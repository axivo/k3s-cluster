/**
 * Base Action class for GitHub Actions
 * 
 * @module core/Action
 * @author AXIVO
 * @license BSD-3-Clause
 */
const ActionError = require('./Error');
const Logger = require('./Logger');

/**
 * Base Action class for GitHub Actions
 * 
 * Provides dependency injection, context management, and error handling
 * for implementing GitHub Actions functionality.
 * 
 * @class Action
 */
class Action {
  /**
   * Creates a new Action instance
   * 
   * @param {Object} params - Action parameters
   * @param {Object} params.core - GitHub Actions Core API
   * @param {Object} params.github - GitHub API client
   * @param {Object} params.context - GitHub Actions context
   * @param {Object} params.exec - GitHub Actions exec helper
   * @param {Object} params.config - Configuration instance
   */
  constructor(params) {
    const { core, github, context, exec, config } = params;
    this.actionError = new ActionError(params);
    this.config = config;
    this.context = context;
    this.core = core;
    this.exec = exec;
    this.github = github;
    this.logger = new Logger(params, {
      context: this.constructor.name,
      level: this.config.get('workflow.logLevel')
    });
    this.actionError.setHandler();
  }

  /**
   * Executes an operation with error handling
   * 
   * @param {string} operation - Operation name for error reporting
   * @param {Function} action - Action to execute
   * @param {boolean} fatal - Whether errors should be fatal
   * @param {boolean} silent - Whether to silently return null on 404 errors
   * @returns {Promise<any>} - Result of the operation or null on error
   */
  async execute(operation, action, fatal = true, silent = false) {
    const isDebug = this.config.get('workflow.logLevel') === 'debug';
    const startTime = isDebug ? Date.now() : 0;
    if (isDebug) this.logger.debug(`→ ${operation}`);
    try {
      const result = await action();
      if (isDebug) {
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        this.logger.debug(`← ${operation} completed in ${duration}s`);
      }
      return result;
    } catch (error) {
      if (silent && error.status === 404) return null;
      if (isDebug) {
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        this.logger.debug(`❌ ${operation} failed after ${duration}s`);
      }
      this.actionError.report({
        operation,
        fatal
      }, error);
      return null;
    }
  }
}

module.exports = Action;
