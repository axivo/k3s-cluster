/**
 * GitHub API Utilities Module
 * 
 * This module provides centralized functions for interacting with the GitHub API,
 * including checking workflow status, creating commits, and retrieving file changes.
 * It handles all communication with GitHub's REST and GraphQL APIs, providing a 
 * consistent interface for other modules.
 * 
 * The module includes functions for:
 * - Checking workflow run status to detect issues
 * - Creating signed commits through the GraphQL API
 * - Getting updated files from pull requests or push events
 * 
 * @module github-api
 * @author AXIVO
 * @license BSD-3-Clause
 */

const utils = require('./utils');

/**
 * Checks if a workflow run has any warnings or errors using GraphQL API
 * 
 * Analyzes a specific workflow run by its run ID to determine if it encountered any issues,
 * including failures, warnings, or cancellations. This function provides a way to
 * programmatically detect problematic workflows that may require attention without
 * manually checking the workflow logs.
 * 
 * The function checks the conclusion status of the workflow run, considering
 * 'cancelled' and 'failure' as error conditions, while null (in-progress) and 'success'
 * are considered successful states.
 * 
 * @param {Object} params - Function parameters
 * @param {Object} params.github - GitHub API client for making API calls
 * @param {Object} params.context - GitHub Actions context containing repository information
 * @param {Object} params.core - GitHub Actions Core API for logging and output
 * @param {number} params.runId - The workflow run ID to check
 * @returns {Promise<boolean>} - True if the workflow run has warnings or errors, false otherwise
 */
async function checkWorkflowRunStatus({
  github,
  context,
  core,
  runId
}) {
  try {
    core.info(`Checking workflow run ${runId} ID status...`);
    const response = await github.rest.actions.getWorkflowRun({
      owner: context.repo.owner,
      repo: context.repo.repo,
      run_id: parseInt(runId, 10)
    });
    const workflowRun = response.data;
    if (!workflowRun) {
      core.info(`No workflow run found with ${runId} ID`);
      return false;
    }
    const errorConclusions = ['cancelled', 'failure'];
    const successConclusions = [null, 'success'];
    if (errorConclusions.includes(workflowRun.conclusion)) {
      core.info(`Workflow run concluded with ${workflowRun.conclusion}`);
    }
    const hasIssues = !successConclusions.includes(workflowRun.conclusion);
    return hasIssues;
  } catch (error) {
    utils.handleError(error, core, 'check workflow run status', false);
    return true;
  }
}

/**
 * Creates a signed commit using GitHub's GraphQL API
 * 
 * This function creates a verified commit through GitHub's GraphQL API instead of
 * using the Git command line. This approach produces commits that are marked as "verified"
 * in the GitHub UI, as they're created through the API with GitHub's authentication.
 * 
 * The function handles:
 * - Validation of input parameters
 * - Creation of commits with multiple file additions and deletions
 * - Proper branch targeting and HEAD validation to prevent conflicts
 * - Error handling for the GraphQL operation
 * 
 * @param {Object} options - Function parameters
 * @param {Object} options.github - GitHub API client for making API calls 
 * @param {Object} options.context - GitHub Actions context containing repository information
 * @param {Object} options.core - GitHub Actions Core API for logging and output
 * @param {string} options.branchName - Branch name to commit to
 * @param {string} options.expectedHeadOid - Expected HEAD SHA of the branch (for validation)
 * @param {Array<Object>} options.additions - Files to add/modify, each having {path, contents} where contents is base64 encoded
 * @param {Array<Object>} options.deletions - Files to delete, each having {path}
 * @param {string} options.commitMessage - Commit message headline
 * @returns {Promise<string|null>} - OID (SHA) of the created commit or null if no changes
 */
async function createSignedCommit({
  github,
  context,
  core,
  branchName,
  expectedHeadOid,
  additions = [],
  deletions = [],
  commitMessage
}) {
  try {
    core.info('Creating signed commit...');
    if (!branchName) {
      throw new Error('branchName is required');
    }
    if (!expectedHeadOid) {
      throw new Error('expectedHeadOid is required');
    }
    if (!commitMessage) {
      throw new Error('commitMessage is required');
    }
    if (!(additions.length + deletions.length)) {
      core.info('No changes to commit');
      return null;
    }
    const input = {
      branch: {
        repositoryNameWithOwner: context.payload.repository.full_name,
        branchName: branchName
      },
      expectedHeadOid: expectedHeadOid,
      fileChanges: {
        additions: additions,
        deletions: deletions
      },
      message: { headline: commitMessage }
    };
    const mutation = `
      mutation($input: CreateCommitOnBranchInput!) {
        createCommitOnBranch(input: $input) {
          commit {
            oid
          }
        }
      }
    `;
    const { createCommitOnBranch } = await github.graphql(mutation, { input });
    const commitOid = createCommitOnBranch.commit.oid;
    core.info(`Signed commit created with ${commitOid} OID`);
    return commitOid;
  } catch (error) {
    utils.handleError(error, core, 'create signed commit');
  }
}

/**
 * Gets the list of updated files from a push event or pull request
 * 
 * This function retrieves all files that were changed, added, or removed in either
 * a push event or a pull request. It detects the event type and uses the appropriate
 * GitHub API to fetch comprehensive file information.
 * 
 * For pull requests, it uses GraphQL with pagination to get all changed files.
 * For push events, it uses the compareCommits REST API to get files between commits.
 * 
 * The function is used to identify which charts have been modified and need
 * to be repackaged, have their dependencies updated, or be released.
 * 
 * @param {Object} params - Function parameters
 * @param {Object} params.github - GitHub API client for making API calls
 * @param {Object} params.context - GitHub Actions context containing repository information
 * @param {Object} params.core - GitHub Actions Core API for logging and output
 * @param {string} [params.eventType='pull_request'] - Event type to process ('pull_request' or 'push')
 * @returns {Promise<string[]>} - Array of file paths that were changed or added
 */
async function getUpdatedFiles({
  github,
  context,
  core,
  eventType = 'pull_request'
}) {
  const files = [];
  try {
    if (!['pull_request', 'push'].includes(eventType)) {
      throw new Error(`'${eventType}'`);
    }
    if (eventType === 'pull_request' && (!context.payload.pull_request || !context.payload.pull_request.number)) {
      return files;
    }
    if (eventType === 'push' && (!context.payload.before || !context.payload.after)) {
      return files;
    }
  } catch (error) {
    utils.handleError(error, core, 'validate event type', false);
    return files;
  }
  try {
    if (eventType === 'pull_request') {
      const query = `
        query($owner: String!, $repo: String!, $prNumber: Int!, $cursor: String) {
          repository(owner: $owner, name: $repo) {
            pullRequest(number: $prNumber) {
              files(first: 100, after: $cursor) {
                nodes {
                  path
                }
                pageInfo {
                  hasNextPage
                  endCursor
                }
              }
            }
          }
        }
      `;
      let endCursor = null;
      let hasNextPage = true;
      while (hasNextPage) {
        const variables = {
          owner: context.repo.owner,
          repo: context.repo.repo,
          prNumber: context.payload.pull_request.number,
          cursor: endCursor
        };
        const result = await github.graphql(query, variables);
        const newFiles = result.repository.pullRequest.files.nodes.map(node => node.path);
        files.push(...newFiles);
        const pageInfo = result.repository.pullRequest.files.pageInfo;
        hasNextPage = pageInfo.hasNextPage;
        endCursor = pageInfo.endCursor;
      }
      if (files.length > 0) {
        const word = files.length === 1 ? 'file' : 'files';
        core.info(`Found ${files.length} updated ${word} in pull request #${context.payload.pull_request.number}`);
      }
      return files;
    }
    if (eventType === 'push') {
      const response = await github.rest.repos.compareCommits({
        owner: context.repo.owner,
        repo: context.repo.repo,
        base: context.payload.before,
        head: context.payload.after
      });
      response.data.files.forEach(file => {
        files.push(file.filename);
      });
      if (files.length > 0) {
        const word = files.length === 1 ? 'file' : 'files';
        core.info(`Found ${files.length} updated ${word} in push event`);
      }
      return files;
    }
    return files;
  } catch (error) {
    utils.handleError(error, core, `get updated files for '${eventType}' event`, false);
    return files;
  }
}

/**
 * Exports the module's functions
 */
module.exports = {
  checkWorkflowRunStatus,
  createSignedCommit,
  getUpdatedFiles
};
