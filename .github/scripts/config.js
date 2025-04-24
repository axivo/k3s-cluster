/**
 * Configuration Centralization Module
 * 
 * This module centralizes configuration settings for all GitHub Actions workflows
 * in the repository. It provides a single source of truth for configuration values
 * used across different scripts, improving maintainability and consistency.
 * 
 * The module exports a config function that allows other modules to access
 * either the entire configuration or specific sections as needed.
 * 
 * @module config
 * @author AXIVO
 * @license BSD-3-Clause
 */

const CONFIG = {
  /**
   * Workflow-specific configuration
   * 
   * @type {Object}
   */
  workflow: {
    /**
     * Documentation generation configuration
     * 
     * Contains settings for controlling documentation generation behavior,
     * including output verbosity and other helm-docs related options.
     *
     * @type {Object}
     */
    docs: {
      /**
       * Log level for helm-docs command execution
       * 
       * Controls the verbosity of output from the helm-docs command. Available levels
       * in order of increasing verbosity: panic, fatal, error, warning, info, debug, trace.
       * Higher verbosity levels include all lower level messages.
       * 
       * @type {string}
       * @default 'info'
       * @see updateDocumentation - Function in documentation.js that passes this value to helm-docs
       * @see https://github.com/norwoodj/helm-docs - helm-docs documentation for log levels
       */
      logLevel: 'info'
    },

    /**
     * Standard labels to apply to workflow-generated issues
     * 
     * This array defines the set of labels that are automatically applied to issues
     * created by workflows when they detect problems. These labels help categorize
     * and filter workflow-related issues in the repository's issue tracker.
     * 
     * @type {Array<string>}
     * @default ['bug', 'triage', 'workflow']
     * @see reportWorkflowIssue - Function in utils.js that applies these labels to workflow-generated issues
     */
    labels: ['bug', 'triage', 'workflow'],

    /**
     * Path to the Handlebars template for workflow-generated issues
     * 
     * This file contains the Handlebars template used to generate the content
     * of issues created by workflow runs when errors or warnings are detected.
     * It includes placeholders for workflow name, branch, commit, and run details.
     * 
     * @type {string}
     * @default '.github/templates/workflow.md.hbs'
     * @see reportWorkflowIssue - Function in utils.js that uses this template when creating workflow issue reports
     */
    template: '.github/templates/workflow.md.hbs',

    /**
     * Standard title prefix for workflow-generated issues
     * 
     * When workflows encounter errors or need to report information,
     * they create issues with this standardized title prefix for easy identification.
     * The complete title typically includes additional context about the specific issue.
     * 
     * @type {string}
     * @default 'workflow: Issues Detected'
     * @see reportWorkflowIssue - Function in utils.js that uses this title when creating workflow issue reports
     */
    title: 'workflow: Issues Detected'
  }
};

/**
 * Returns configuration settings from the centralized CONFIG object
 * 
 * This function provides access to the centralized configuration object,
 * allowing other modules to retrieve either specific sections or the entire
 * configuration. When a section name is provided, only that portion of the
 * configuration is returned, which helps maintain focused module dependencies
 * and prevents unnecessary exposure of unrelated configuration settings.
 * 
 * The function supports a simple dot-notation access pattern that makes configuration
 * retrieval both concise and explicit in calling code. By providing this controlled
 * access method, the module ensures proper encapsulation of the configuration details.
 * 
 * @param {string} [section] - Optional section name to retrieve only that part of the config
 * @returns {Object} - The requested configuration section or the entire config object
 */
function config(section) {
  if (section && CONFIG[section]) {
    return CONFIG[section];
  }
  return CONFIG;
}

/**
 * Exports the configuration function directly
 * 
 * This module directly exports the config function which provides a controlled interface
 * for accessing the centralized configuration settings. The CONFIG object itself
 * is not exported to encourage proper access patterns and maintain
 * encapsulation of configuration details.
 */
module.exports = config;
