/**
 * Production configuration values
 * 
 * This module defines the production configuration values used throughout the application.
 */

module.exports = {
  /**
   * Issue-specific configuration
   * 
   * @type {Object}
   */
  issue: {
    /**
     * Controls automatic label update for repository
     * 
     * When enabled, the system will automatically update repository labels defined
     * in the labels configuration during workflow execution. When disabled,
     * the system will only use existing labels.
     * 
     * Note: If enabled, the system will update GitHub issues during each workflow run,
     * including a reminder to set this value to "false" after initial setup. This can result in
     * numerous notifications for repository maintainers.
     * 
     * @type {boolean}
     * @default false
     */
    updateLabels: false,

    /**
     * Predefined issue label definitions used across the repository
     * 
     * Contains standardized label definitions (color, description) that are used
     * for categorizing issues in GitHub and generating release notes. These labels
     * can be automatically created when updateLabels is true.
     * 
     * @type {Object}
     */
    labels: {
      /**
       * Label definition for blocked issues or pull requests
       * 
       * Used to identify items that cannot proceed due to unresolved dependencies,
       * requirements, or other blockers. This helps prioritize work by highlighting
       * items that need special attention to move forward.
       * 
       * @type {Object}
       */
      blocked: {
        /**
         * Display color for the blocked label (red-orange)
         * 
         * Hexadecimal color code without leading #. This color appears 
         * as the label background in the GitHub issue interface.
         * 
         * @type {string}
         * @default 'd93f0b'
         */
        color: 'd93f0b',

        /**
         * Tooltip description shown when hovering over the blocked label
         * 
         * This text appears when users hover over the label in the GitHub interface,
         * providing additional context about what the label means.
         * 
         * @type {string}
         * @default 'Not ready due to unresolved issues'
         */
        description: 'Not ready due to unresolved issues'
      },

      /**
       * Label definition for bugs and issues
       * 
       * Used to categorize issues that report problems or unexpected behavior.
       * 
       * @type {Object}
       */
      bug: {
        /**
         * Display color for the bug label (red)
         * 
         * @type {string}
         * @default 'd73a4a'
         */
        color: 'd73a4a',

        /**
         * Tooltip description shown when hovering over the bug label
         * 
         * @type {string}
         * @default 'Something isn\'t working'
         */
        description: 'Something isn\'t working'
      },

      /**
       * Label definition for issues requiring dependencies
       * 
       * Used to categorize issues related to dependency updates or version conflicts.
       * 
       * @type {Object}
       */
      dependency: {
        /**
         * Display color for the dependency label (dark blue)
         * 
         * @type {string}
         * @default '00008b'
         */
        color: '00008b',

        /**
         * Tooltip description shown when hovering over the dependency label
         * 
         * @type {string}
         * @default 'Dependency version related'
         */
        description: 'Dependency version related'
      },

      /**
       * Label definition for issues requiring enhancements
       * 
       * @type {Object}
       */
      enhancement: {
        /**
         * Display color for the enhancement label (green)
         * 
         * @type {string}
         * @default '008000'
         */
        color: '008000',

        /**
         * Tooltip description shown when hovering over the enhancement label
         * 
         * @type {string}
         * @default 'New feature or request'
         */
        description: 'New feature or request'
      },

      /**
       * Label definition for issues requiring initial assessment
       * 
       * Used to mark issues that need initial review and categorization.
       * This helps workflows identify which issues are still pending review.
       * 
       * @type {Object}
       */
      triage: {
        /**
         * Display color for the triage label (green)
         * 
         * Hexadecimal color code without leading #. This color appears 
         * as the label background in the GitHub issue interface.
         * 
         * @type {string}
         * @default '30783f'
         */
        color: '30783f',

        /**
         * Tooltip description shown when hovering over the triage label
         * 
         * This text appears when users hover over the label in the GitHub interface,
         * providing additional context about what the label means.
         * 
         * @type {string}
         * @default 'Needs triage'
         */
        description: 'Needs triage'
      },

      /**
       * Label definition for issues related to upstream dependencies or external projects
       * 
       * Used to mark issues that originate from or are dependent on upstream
       * dependencies, external libraries, or third-party projects that are
       * outside of direct control.
       * 
       * @type {Object}
       */
      upstream: {
        /**
         * Display color for the upstream label (purple)
         * 
         * Hexadecimal color code without leading #. This color appears 
         * as the label background in the GitHub issue interface.
         * 
         * @type {string}
         * @default '4943e6'
         */
        color: '4943e6',

        /**
         * Tooltip description shown when hovering over the upstream label
         * 
         * This text appears when users hover over the label in the GitHub interface,
         * providing additional context about what the label means.
         * 
         * @type {string}
         * @default 'Upstream related'
         */
        description: 'Upstream related'
      },

      /**
       * Label definition for workflow-related issues and errors
       * 
       * Used to categorize issues that are created automatically by workflows
       * when they encounter errors or require attention. This helps distinguish
       * system-generated issues from user-created ones.
       * 
       * @type {Object}
       */
      workflow: {
        /**
         * Display color for the workflow label (purple)
         * 
         * Hexadecimal color code without leading #. This color appears 
         * as the label background in the GitHub issue interface.
         * 
         * @type {string}
         * @default 'b84cfd'
         */
        color: 'b84cfd',

        /**
         * Tooltip description shown when hovering over the workflow label
         * 
         * This text appears when users hover over the label in the GitHub interface,
         * providing additional context about what the label means.
         * 
         * @type {string}
         * @default 'Workflow execution related'
         */
        description: 'Workflow execution related'
      }
    }
  },

  /**
   * Repository-specific configuration
   * 
   * @type {Object}
   */
  repository: {
    /**
     * Git user identity for automated operations
     * 
     * Contains the standard user identity used for Git operations in automated 
     * workflows. This configuration ensures that commits and changes made by
     * GitHub Actions are properly attributed to the GitHub Actions bot account
     * rather than to any human user.
     * 
     * The GitHub Actions bot is a special system account that can make verified
     * commits directly through the GitHub API without requiring personal access
     * tokens. Using this identity ensures all automated commits are clearly
     * distinguishable from human commits in the repository history.
     * 
     * @type {Object}
     */
    user: {
      /**
       * Email address for the GitHub Actions bot
       * 
       * Standard email address for the GitHub Actions bot account.
       * This email is automatically recognized by GitHub as belonging
       * to the Actions system account, which allows commits to be
       * properly verified in the GitHub interface.
       * 
       * @type {string}
       * @default '41898282+github-actions[bot]@users.noreply.github.com'
       */
      email: '41898282+github-actions[bot]@users.noreply.github.com',

      /**
       * Username for the GitHub Actions bot
       * 
       * Standard username for the GitHub Actions bot account.
       * This username is displayed as the author/committer in Git commit
       * history and in the GitHub interface, making it clear which changes
       * were made by automated processes.
       * 
       * @type {string}
       * @default 'github-actions[bot]'
       */
      name: 'github-actions[bot]'
    }
  },

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
     */
    labels: ['bug', 'triage', 'workflow'],

    /**
     * Log level for workflow operations
     * 
     * Controls the verbosity of log output in workflows. Available levels:
     * - debug: Show all messages including detailed tracing and stack traces
     * - info: Show informational, warning, and error messages (default)
     * - warning: Show only warning and error messages
     * - error: Show only error messages
     * 
     * @type {string}
     * @default 'info'
     */
    logLevel: 'info',

    /**
     * Path to the Handlebars template for workflow-generated issues
     * 
     * This file contains the Handlebars template used to generate the content
     * of issues created by workflow runs when errors or warnings are detected.
     * It includes placeholders for workflow name, branch, commit, and run details.
     * 
     * @type {string}
     * @default '.github/actions/templates/workflow.md.hbs'
     */
    template: '.github/actions/templates/workflow.md.hbs',

    /**
     * Standard title prefix for workflow-generated issues
     * 
     * When workflows encounter errors or need to report information,
     * they create issues with this standardized title prefix for easy identification.
     * The complete title typically includes additional context about the specific issue.
     * 
     * @type {string}
     * @default 'workflow: Issues Detected'
     */
    title: 'workflow: Issues Detected'
  }
};
