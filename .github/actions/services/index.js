/**
 * Services module
 * 
 * @module services
 * @author AXIVO
 * @license BSD-3-Clause
 */

const DocsService = require('./Docs');
const FileService = require('./File');
const GitService = require('./Git');
const GitHubService = require('./Github');
const IssueService = require('./Issue');
const LabelService = require('./Label');

const ShellService = require('./Shell');
const TemplateService = require('./Template');

module.exports = {
  Docs: DocsService,
  File: FileService,
  Git: GitService,
  GitHub: GitHubService,
  Issue: IssueService,
  Label: LabelService,
  Shell: ShellService,
  Template: TemplateService
};
