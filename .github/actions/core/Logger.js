/**
 * Logging class for standardized log management
 * 
 * @module core/Logger
 * @author AXIVO
 * @license BSD-3-Clause
 */

/**
 * Logging class for standardized log management
 * 
 * Provides structured logging, timing information, and log levels for
 * consistent output across GitHub Actions.
 * 
 * @class Logger
 */
class Logger {
  /**
   * Creates a new Logger instance
   * 
   * @param {Object} params - Logger parameters
   * @param {Object} params.core - GitHub Actions Core API for logging
   * @param {Object} options - Logger configuration options
   * @param {string} options.context - Context identifier for log entries
   * @param {boolean} options.timestamp - Whether to include timestamps
   * @param {string} options.level - Minimum log level ('debug'|'info'|'warning'|'error')
   */
  constructor(params, options = {}) {
    const { core } = params;
    this.core = core;
    this.context = options.context || 'action';
    this.level = options.level || 'info';
    this.levelPriority = { debug: 0, info: 1, warning: 2, error: 3 };
    this.timestamp = options.timestamp === true;
  }

  /**
   * Determines if a log level should be displayed
   * 
   * @private
   * @param {string} level - The log level to check
   * @returns {boolean} Whether the log level should be displayed
   */
  #allow(level) {
    return this.levelPriority[level] >= this.levelPriority[this.level];
  }

  /**
   * Formats a log message with metadata
   * 
   * @private
   * @param {string} message - The message to format
   * @param {Object} meta - Additional metadata
   * @returns {string} The formatted message
   */
  #format(message, meta = {}) {
    const parts = [`[${this.context}]`];
    if (meta.level && meta.level !== 'info') parts.push(`[${meta.level.toUpperCase()}]`);
    if (meta.timestamp) parts.push(`[${new Date().toISOString()}]`);
    if (meta.component) parts.push(`[${meta.component}]`);
    return `${parts.join('')} ${message}`;
  }

  /**
   * Logs a debug message
   * 
   * @param {string} message - The message to log
   * @param {Object} meta - Additional metadata
   * @returns {void}
   */
  debug(message, meta = {}) {
    if (!this.#allow('debug')) return;
    const logMeta = { level: 'debug', timestamp: true, ...meta };
    this.core.info(this.#format(message, logMeta));
  }

  /**
   * Logs an error message
   * 
   * @param {string} message - The message to log
   * @param {Object} meta - Additional metadata
   * @returns {void}
   */
  error(message, meta = {}) {
    if (!this.#allow('error')) return;
    const logMeta = { level: 'error', ...meta };
    const formattedMessage = this.#format(message, logMeta);
    if (meta.file) {
      const params = {
        file: meta.file,
        startLine: meta.line || 1,
        startColumn: meta.col || 1,
        title: meta.title || 'Error',
        message: formattedMessage
      };
      this.core.error(formattedMessage, params);
    } else {
      this.core.error(formattedMessage);
    }
  }

  /**
   * Logs an info message
   * 
   * @param {string} message - The message to log
   * @param {Object} meta - Additional metadata
   * @returns {void}
   */
  info(message, meta = {}) {
    if (!this.#allow('info')) return;
    const logMeta = { level: 'info', ...meta };
    this.core.info(this.#format(message, logMeta));
  }

  /**
   * Logs a warning message
   * 
   * @param {string} message - The message to log
   * @param {Object} meta - Additional metadata
   * @returns {void}
   */
  warning(message, meta = {}) {
    if (!this.#allow('warning')) return;
    const logMeta = { level: 'warning', ...meta };
    const formattedMessage = this.#format(message, logMeta);
    if (meta.file) {
      const params = {
        file: meta.file,
        startLine: meta.line || 1,
        startColumn: meta.col || 1,
        title: meta.title || 'Warning',
        message: formattedMessage
      };
      this.core.warning(formattedMessage, params);
    } else {
      this.core.warning(formattedMessage);
    }
  }
}

module.exports = Logger;
