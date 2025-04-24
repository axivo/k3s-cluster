/**
 * Common Utility Functions for GitHub Actions Workflows
 * 
 * This module provides a suite of utility functions for GitHub Actions workflows
 * used across different scripts in the repository. It includes functions for
 * error handling, file operations, issue creation, and templating using Handlebars.
 * 
 * These utilities provide consistent behavior for error management, repository
 * operations, and user feedback through issues and GitHub API interactions.
 * 
 * @module utils
 * @author AXIVO
 * @license BSD-3-Clause
 */

const fs = require('fs/promises');
const Handlebars = require('handlebars');
const config = require('./config');

/**
 * Configures Git repository for GitHub Actions workflows
 * 
 * This function sets up the Git repository with the GitHub Actions bot identity for making commits
 * in workflows. It configures the user name and email to match the GitHub Actions bot,
 * ensuring that commits made by automated workflows are properly attributed and appear as verified
 * in GitHub's interface.
 * 
 * The function returns a utility function for executing Git commands that standardizes
 * output formatting, trims whitespace, and provides consistent error handling for Git operations
 * throughout the workflow.
 * 
 * Note: This function is in utils.js instead of github-api.js because it operates on the local
 * Git repository configuration, which cannot be accessed or modified through GitHub's GraphQL or
 * REST APIs. These operations must be performed using Git CLI commands on the local repository.
 * 
 * @param {Object} options - Function parameters
 * @param {Object} options.github - GitHub API client (unused but kept for consistent parameter structure)
 * @param {Object} options.context - GitHub Actions context containing repository information
 * @param {Object} options.core - GitHub Actions Core API for logging and output
 * @param {Object} options.exec - GitHub Actions exec helpers for running commands
 * @returns {Promise<Function>} - Async function to run Git commands that returns trimmed stdout
 */
async function configureGitRepository({ github, context, core, exec }) {
  const runGit = async (args) => (await exec.getExecOutput('git', args)).stdout.trim();
  try {
    core.info('Configuring Git repository...');
    await Promise.all([
      runGit(['config', 'user.name', 'github-actions[bot]']),
      runGit(['config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com'])
    ]);
    core.info('Git repository configured with GitHub Actions bot identity');
    return runGit;
  } catch (error) {
    handleError(error, core, 'configure Git repository');
  }
}

/**
 * Helper function to prepare file additions and deletions from Git staged changes
 * 
 * This function processes Git staged changes and prepares them in the format required
 * by the GitHub API for creating commits. It identifies added, modified, and deleted files,
 * reads the content of changed files, encodes them in base64, and organizes both additions
 * and deletions into the specific structure expected by the GitHub GraphQL API.
 * 
 * The function uses different Git diff filters to separately identify:
 * - Additions/modifications (--diff-filter=ACMR): files that need content uploaded
 * - Deletions (--diff-filter=D): files that need to be removed from the repository
 * 
 * Note: This function is in utils.js instead of github-api.js because it operates on local
 * Git repositories and requires file system access to read staged but uncommitted changes.
 * These operations cannot be performed through GitHub's GraphQL or REST APIs, which only
 * have access to committed content that has been pushed to the remote repository.
 * 
 * @param {Function} runGit - Function to run git commands and return trimmed stdout
 * @returns {Promise<Object>} - Object with additions and deletions arrays in GitHub API format
 */
async function getGitStagedChanges(runGit) {
  const additions = await Promise.all(
    (await runGit(['diff', '--name-only', '--staged', '--diff-filter=ACMR']))
      .split('\n')
      .filter(Boolean)
      .map(async file => {
        const contents = await fs.readFile(file, 'utf-8');
        return { path: file, contents: Buffer.from(contents).toString('base64') };
      })
  );
  const deletions = (await runGit(['diff', '--name-only', '--staged', '--diff-filter=D']))
    .split('\n')
    .filter(Boolean)
    .map(file => ({ path: file }));
  return { additions, deletions };
}

/**
 * Handles errors in a standardized way across workflows
 * 
 * This function provides a centralized error handling mechanism that can be configured
 * for different levels of severity. For fatal errors, it logs the error using core.setFailed,
 * then throws a new exception to terminate execution. For non-fatal errors, it logs a warning
 * using core.warning and allows execution to continue.
 * 
 * The standardized error message format includes the operation context to make debugging
 * easier by providing clear information about what specific action failed.
 * 
 * @param {Error} error - The error object that was caught
 * @param {Object} core - GitHub Actions Core API for logging and output
 * @param {string} operation - The operation that failed (for context in the error message)
 * @param {boolean} [fatal=true] - Whether to treat the error as fatal (throw exception) or non-fatal (warning)
 * @returns {string} - The formatted error message that was logged
 */
function handleError(error, core, operation, fatal = true) {
  const errorMsg = `Failed to ${operation}: ${error.message}`;
  if (fatal) {
    core.setFailed(errorMsg);
    throw new Error(errorMsg);
  } else {
    core.warning(errorMsg);
  }
  return errorMsg;
}

/**
 * Reports workflow issues by creating a GitHub issue
 * 
 * This function automatically detects problems in a GitHub Actions workflow run
 * and creates a detailed issue in the repository to track these problems. It first
 * checks if the workflow had any failures or warnings using the checkWorkflowRunStatus
 * function, then generates an issue with detailed context about the workflow run.
 * 
 * The issue includes:
 * - Information about the workflow and run ID
 * - Branch and commit SHA
 * - Links to the repository and workflow
 * - Standardized labels for categorization
 * 
 * 
 * @param {Object} params - Function parameters
 * @param {Object} params.github - GitHub API client for making API calls
 * @param {Object} params.context - GitHub Actions context containing workflow information
 * @param {Object} params.core - GitHub Actions Core API for logging and output
 * @returns {Promise<void>}
 */
async function reportWorkflowIssue({
  github,
  context,
  core
}) {
  const api = require('./github-api');
  let hasIssues = await api.checkWorkflowRunStatus({
    github,
    context,
    core,
    runId: context.runId
  });
  if (!hasIssues) {
    core.info('No failures or warnings detected, skipping issue creation');
    return;
  }
  try {
    core.info('Creating workflow issue...');
    const repoUrl = context.payload.repository.html_url;
    const isPullRequest = Boolean(context.payload.pull_request);
    const branchName = isPullRequest
      ? context.payload.pull_request.head.ref
      : context.payload.repository.default_branch;
    const commitSha = isPullRequest
      ? context.payload.pull_request.head.sha
      : context.payload.after;
    const templateContent = await fs.readFile(config('workflow').template, 'utf8');
    const template = Handlebars.compile(templateContent);
    const issueBody = template({
      Workflow: context.workflow,
      RunID: context.runId,
      Sha: commitSha,
      Branch: branchName,
      RepoURL: repoUrl
    });
    const labelNames = config('workflow').labels;
    await github.rest.issues.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      title: config('workflow').title,
      body: issueBody,
      labels: labelNames
    });
    core.info('Successfully created workflow issue');
  } catch (error) {
    handleError(error, core, 'create workflow issue', false);
  }
}

/**
 * Exports the module's functions
 */
module.exports = {
  configureGitRepository,
  getGitStagedChanges,
  handleError,
  reportWorkflowIssue
};
