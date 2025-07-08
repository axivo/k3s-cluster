/**
 * GitHub API service
 * 
 * @module services/Github
 * @author AXIVO
 * @license BSD-3-Clause
 */
const Action = require('../core/Action');

/**
 * GitHub API service
 * 
 * Provides GitHub REST and GraphQL API operations for workflow management,
 * issue reporting, and signed commits.
 * 
 * @class GitHubService
 */
class GitHubService extends Action {
  /**
   * Creates an annotation for the current workflow run
   * 
   * @param {string} message - Annotation message
   * @param {string} [level='warning'] - Annotation level (warning, error, notice)
   * @returns {Promise<Object>} Created check run data
   */
  async createAnnotation(message, level = 'warning') {
    return this.execute('create annotation', async () => {
      const checkRun = await this.github.rest.checks.create({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        name: level,
        head_sha: this.context.sha,
        status: 'completed',
        conclusion: 'neutral',
        output: {
          title: level,
          summary: message,
          annotations: [{
            path: level,
            start_line: 1,
            end_line: 1,
            annotation_level: level,
            message: message
          }]
        }
      });
      return checkRun.data;
    });
  }

  /**
   * Creates a signed commit using GitHub GraphQL API
   * 
   * @param {string} branch - Branch name
   * @param {Object} [options={}] - Function options
   * @param {string} options.oid - Expected HEAD OID
   * @param {Array<Object>} options.additions - Files to add/modify
   * @param {Array<Object>} options.deletions - Files to delete
   * @param {string} options.message - Commit message
   * @returns {Promise<Object>} Commit details
   */
  async createSignedCommit(branch, options = {}) {
    const { oid, additions, deletions, message } = options;
    return this.execute(`create signed commit on '${branch}' branch`, async () => {
      const fileChanges = {};
      if (additions?.length) {
        fileChanges.additions = additions.map(file => ({
          path: file.path,
          contents: file.contents
        }));
      }
      if (deletions?.length) {
        fileChanges.deletions = deletions.map(file => ({
          path: file.path
        }));
      }
      const query = `
        mutation CreateCommit($input: CreateCommitOnBranchInput!) {
          createCommitOnBranch(input: $input) {
            commit {
              url
              oid
            }
          }
        }
      `;
      const variables = {
        input: {
          branch: {
            repositoryNameWithOwner: `${this.context.repo.owner}/${this.context.repo.repo}`,
            branchName: branch
          },
          message: {
            headline: message
          },
          expectedHeadOid: oid,
          fileChanges
        }
      };
      const response = await this.github.graphql(query, variables);
      const commitData = response.createCommitOnBranch.commit;
      this.logger.info(`Successfully created '${commitData.oid}' signed commit`);
      return {
        url: commitData.url,
        oid: commitData.oid
      };
    });
  }

  /**
  * Creates a GitHub issue
  *
  * @param {string} title - Issue title
  * @param {string} body - Issue body
  * @param {Array<string>} [labels=[]] - Issue labels
  * @returns {Promise<Object>} Created issue
  */
  async createIssue(title, body, labels = []) {
    return this.execute(`create issue: '${title}'`, async () => {
      const response = await this.github.rest.issues.create({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        title,
        body,
        labels
      });
      this.logger.info(`Successfully created issue #${response.data.number}: ${response.data.title}`);
      return {
        id: response.data.id,
        number: response.data.number,
        title: response.data.title,
        url: response.data.html_url
      };
    });
  }

  /**
  * Creates a label in a repository
  *
  * @param {string} name - Label name
  * @param {string} color - Label color (hex without #)
  * @param {string} description - Label description
  * @returns {Promise<Object>} Created label
  */
  async createLabel(name, color, description) {
    return this.execute(`create '${name}' label`, async () => {
      const response = await this.github.rest.issues.createLabel({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        name,
        color,
        description
      });
      this.logger.info(`Successfully created '${name}' label`);
      return {
        id: response.data.id,
        name: response.data.name,
        color: response.data.color,
        description: response.data.description
      };
    }, false, true);
  }

  /**
   * Gets annotations for the current workflow run
   * 
   * @returns {Promise<Array<Object>>} Array of annotations
   */
  async getAnnotations() {
    return this.execute('get annotations', async () => {
      const checkRuns = await this.github.rest.checks.listForRef({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        ref: this.context.sha
      });
      const annotations = [];
      for (const checkRun of checkRuns.data.check_runs) {
        if (checkRun.output?.annotations_url) {
          try {
            const response = await this.github.request(checkRun.output.annotations_url);
            if (response.data && response.data.length > 0) {
              annotations.push(...response.data.map(annotation => ({
                level: annotation.annotation_level,
                message: annotation.message,
                path: annotation.path,
                line: annotation.start_line
              })));
            }
          } catch (error) {
            continue;
          }
        }
      }
      return annotations;
    }, false);
  }

  /**
  * Gets a label from a repository
  *
  * @param {string} name - Label name
  * @returns {Promise<Object|null>} Label or null if not found
  */
  async getLabel(name) {
    return this.execute(`get '${name}' label`, async () => {
      const response = await this.github.rest.issues.getLabel({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        name
      });
      if (!response) {
        this.logger.info(`Label '${name}' not found`);
        return null;
      }
      return {
        id: response.data.id,
        name: response.data.name,
        color: response.data.color,
        description: response.data.description
      };
    }, false);
  }

  /**
   * Gets the list of updated files from a pull request
   * 
   * @returns {Promise<Array<string>>} Array of file paths that were changed
   */
  async getUpdatedFiles() {
    return this.execute('get updated files', async () => {
      const files = [];
      if (this.context.payload.pull_request) {
        let page = 1;
        let hasMorePages = true;
        while (hasMorePages) {
          const response = await this.github.rest.pulls.listFiles({
            owner: this.context.repo.owner,
            repo: this.context.repo.repo,
            pull_number: this.context.payload.pull_request.number,
            per_page: 100,
            page
          });
          files.push(...response.data.map(file => file.filename));
          hasMorePages = response.data.length === 100;
          page++;
        }
      }
      return files;
    }, false);
  }

  /**
   * Lists jobs for a workflow run
   * 
   * @returns {Promise<Array<Object>>} Array of job objects with steps
   */
  async listJobs() {
    return this.execute('list jobs', async () => {
      const response = await this.github.rest.actions.listJobsForWorkflowRun({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        run_id: this.context.runId
      });
      return response?.data?.jobs || [];
    }, false, true);
  }

  /**
  * Updates a label in a repository
  *
  * @param {string} name - Label name
  * @param {string} color - Label color (hex without #)
  * @param {string} description - Label description
  * @returns {Promise<Object>} Updated label
  */
  async updateLabel(name, color, description) {
    return this.execute(`update '${name}' label`, async () => {
      const response = await this.github.rest.issues.updateLabel({
        owner: this.context.repo.owner,
        repo: this.context.repo.repo,
        name,
        color,
        description
      });
      this.logger.info(`Successfully updated '${name}' label`);
      return {
        id: response.data.id,
        name: response.data.name,
        color: response.data.color,
        description: response.data.description
      };
    }, false, true);
  }
}

module.exports = GitHubService;
