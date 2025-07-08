/**
 * Issue service for GitHub issue operations
 * 
 * @module services/Issue
 * @author AXIVO
 * @license BSD-3-Clause
 */
const Action = require('../core/Action');
const GitHubService = require('./Github');

/**
 * Issue service for GitHub issue operations
 * 
 * Provides GitHub issue management for automated workflow issue reporting.
 * 
 * @class IssueService
 */
class IssueService extends Action {
  /**
   * Creates a new IssueService instance
   * 
   * @param {Object} params - Service parameters
   */
  constructor(params) {
    super(params);
    this.gitHubService = new GitHubService(params);
  }

  /**
   * Prepares and creates a workflow issue
   * 
   * @param {Object} context - GitHub Actions context
   * @param {Object} [template={}] - Template configuration
   * @param {string} template.content - Issue template content
   * @param {Object} template.service - Template service instance
   * @returns {Promise<Object|null>} Created issue data or null on failure
   */
  async report(context, template = {}) {
    return this.execute('report workflow issue', async () => {
      const { content, service } = template;
      const annotations = await this.gitHubService.getAnnotations();
      if (!annotations.length) return null;
      const repoUrl = context.payload.repository.html_url;
      const isPullRequest = Boolean(context.payload.pull_request);
      const branchName = isPullRequest
        ? context.payload.pull_request.head.ref
        : context.payload.repository.default_branch;
      const commitSha = isPullRequest
        ? context.payload.pull_request.head.sha
        : context.payload.after;
      const issueBody = await service.render(content, {
        Workflow: context.workflow,
        RunID: context.runId,
        Sha: commitSha,
        Branch: branchName,
        RepoURL: repoUrl
      });
      if (!issueBody) return null;
      const labelNames = this.config.get('workflow.labels');
      return this.gitHubService.createIssue(
        this.config.get('workflow.title'),
        issueBody,
        labelNames
      );
    }, false);
  }
}

module.exports = IssueService;
