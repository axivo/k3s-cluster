/**
 * Workflow handler for common workflow operations
 * 
 * @module handlers/Workflow
 * @author AXIVO
 * @license BSD-3-Clause
 */
const Action = require('../core/Action');
const config = require('../config');
const DocsService = require('../services/Docs');
const FileService = require('../services/File');
const GitService = require('../services/Git');
const GitHubService = require('../services/Github');
const IssueService = require('../services/Issue');
const LabelService = require('../services/Label');
const TemplateService = require('../services/Template');

/**
 * Workflow handler for documentation generation operations
 * 
 * Provides orchestration for repository configuration, helm-docs installation,
 * documentation generation, and issue reporting for documentation workflows.
 * 
 * @class WorkflowHandler
 */
class WorkflowHandler extends Action {
  /**
   * Creates a new WorkflowHandler instance
   * 
   * @param {Object} params - Handler parameters
   */
  constructor(params) {
    params.config = config;
    super(params);
    this.docsService = new DocsService(params);
    this.fileService = new FileService(params);
    this.gitService = new GitService(params);
    this.gitHubService = new GitHubService(params);
    this.issueService = new IssueService(params);
    this.labelService = new LabelService(params);
    this.templateService = new TemplateService(params);
  }

  /**
   * Configure repository
   * 
   * @returns {Promise<void>}
   */
  async configureRepository() {
    return this.execute('configure repository', async () => {
      this.logger.info('Configuring repository for workflow operations...');
      await this.gitService.configure();
      this.logger.info('Repository configuration complete');
    });
  }

  /**
   * Install helm-docs
   * 
   * @param {string} version - Version of helm-docs to install
   * @returns {Promise<void>}
   */
  async installHelmDocs(version) {
    return this.execute('install helm-docs', async () => {
      await this.docsService.install(version);
    });
  }

  /**
   * Generate documentation and optionally update labels
   * 
   * @returns {Promise<void>}
   */
  async processReleases() {
    return this.execute('process releases', async () => {
      if (this.config.get('issue.createLabels')) {
        this.logger.info('Updating repository labels...');
        await this.labelService.update();
      }
      this.logger.info('Generating documentation...');
      const updatedFiles = await this.gitHubService.getUpdatedFiles();
      const updatedDirs = [...new Set(updatedFiles
        .filter(file => file.startsWith('roles/') && file.split('/').length > 2)
        .map(file => file.split('/').slice(0, 2).join('/'))
      )];
      if (!updatedDirs.length) {
        this.logger.info('No file updates present, skipping documentation generation');
        return;
      }
      await this.docsService.generate(updatedDirs);
      this.logger.info('Successfully generated documentation');
    });
  }

  /**
   * Report workflow issues
   * 
   * @returns {Promise<void>}
   */
  async reportIssue() {
    return this.execute('report workflow issue', async () => {
      this.logger.info('Checking for workflow issues...');
      if (this.config.get('issue.createLabels')) {
        this.logger.warning('Set "createLabels: false" after initial setup');
      }
      const templatePath = this.config.get('workflow.template');
      const templateContent = await this.fileService.read(templatePath);
      const issue = await this.issueService.report(
        this.context,
        this.labelService,
        {
          content: templateContent,
          service: this.templateService
        }
      );
      let message = 'No workflow issues to report';
      if (issue) message = 'Successfully reported workflow issue';
      this.logger.info(`${message}`);
    }, false);
  }
}

module.exports = WorkflowHandler;
