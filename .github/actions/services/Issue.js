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
   * Validates if workflow has issues that warrant creating an issue
   * 
   * @private
   * @param {number} id - Workflow run ID
   * @returns {Promise<boolean>} True if issues detected
   */
  async #validate(id) {
    return this.execute('validate workflow status', async () => {
      let hasFailures = false;
      const workflowRun = await this.gitHubService.getWorkflowRun(id);
      if (['cancelled', 'failure'].includes(workflowRun.conclusion)) return true;
      const jobs = await this.gitHubService.listJobs();
      for (const job of jobs) {
        if (job.steps) {
          const failedSteps = job.steps.filter(step =>
            step.status === 'completed' && step.conclusion !== 'success'
          );
          if (failedSteps.length) {
            hasFailures = true;
            break;
          }
        }
      }
      const hasWarnings = await this.execute('validate workflow warnings', async () => {
        const logsData = await this.gitHubService.getWorkflowRunLogs(id);
        if (!logsData) return false;
        const regex = /(^|:)warning:/i;
        return regex.test(logsData);
      }, false);
      return hasFailures || hasWarnings;
    }, false);
  }

  /**
   * Prepares and creates a workflow issue
   * 
   * @param {Object} context - GitHub Actions context
   * @param {Object} label - Label service instance
   * @param {Object} [template={}] - Template configuration
   * @param {string} template.content - Issue template content
   * @param {Object} template.service - Template service instance
   * @returns {Promise<Object|null>} Created issue data or null on failure
   */
  async report(context, label, template = {}) {
    return this.execute('report workflow issue', async () => {
      const { content, service } = template;
      const hasIssues = await this.#validate(context.runId);
      if (!hasIssues) return null;
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
      if (this.config.get('issue.createLabels') && label) {
        await Promise.all(labelNames.map(labelName => label.add(labelName)));
      }
      return this.gitHubService.createIssue(
        this.config.get('workflow.title'),
        issueBody,
        labelNames
      );
    }, false);
  }
}

module.exports = IssueService;
