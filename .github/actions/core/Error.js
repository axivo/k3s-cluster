/**
 * Error handling class for standardized error management
 * 
 * @module core/Error
 * @author AXIVO
 * @license BSD-3-Clause
 */

/**
 * Error handling class for standardized error management
 * 
 * Provides consistent error reporting, GitHub annotations, and
 * workflow failure management with proper context preservation.
 * 
 * @class ActionError
 */
class ActionError {
  /**
   * Global error handler registration flag
   * 
   * @static
   * @type {boolean}
   */
  static handler = false;

  /**
   * Creates a new ActionError instance
   * 
   * @param {Object} core - GitHub Actions Core API for logging
   * @param {Object} config - Configuration instance
   */
  constructor(params) {
    const { core, config } = params;
    this.core = core;
    this.config = config;
  }

  /**
   * Creates GitHub annotation for errors
   * 
   * @private
   * @param {Object} error - Error information
   * @param {string} type - Annotation type (warning/error)
   */
  #createAnnotation(error, type) {
    if (error.file) {
      const params = {
        file: error.file,
        startLine: error.line || 1,
        startColumn: error.col || 1,
        title: `Operation Failed: ${error.operation}`,
        message: error.message
      };
      if (type === 'error') {
        this.core.error(error.message, params);
      } else {
        this.core.warning(error.message, params);
      }
    }
  }

  /**
   * Extracts detailed information from an error
   * 
   * @private
   * @param {Object} context - Error context
   * @param {Error} error - The error object
   * @returns {Object} - Formatted error information
   */
  #extractErrorInfo(context, error) {
    return {
      message: `Failed to ${context.operation}: ${error.message}`,
      operation: context.operation,
      originalError: error,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      file: context.file,
      line: context.line,
      col: context.col
    };
  }

  /**
   * Reports errors in a standardized way
   * 
   * @param {Object} context - Error context information
   * @param {string} context.operation - Operation that failed
   * @param {boolean} [context.fatal=true] - Whether the error is fatal
   * @param {string} [context.annotationType='error'] - Annotation type (warning/error)
   * @param {string} [context.file] - Related file path
   * @param {number} [context.line] - Related line number
   * @param {number} [context.col] - Related column number
   * @param {Error} error - The error object that was caught
   * @returns {string} - The formatted error message
   */
  report(context, error) {
    const errorInfo = this.#extractErrorInfo(context, error);
    if (this.config.get('workflow.logLevel') === 'debug') {
      console.error(errorInfo.stack);
    }
    if (context.fatal !== false) {
      this.#createAnnotation(errorInfo, 'error');
      this.core.setFailed(errorInfo.message);
    } else {
      this.#createAnnotation(errorInfo, context.annotationType || 'warning');
      this.core.warning(errorInfo.message);
    }
    return errorInfo.message;
  }

  /**
   * Sets up global error handler for uncaught exceptions, unhandled rejections and warnings
   * 
   * @returns {void}
   */
  setHandler() {
    if (ActionError.handler) {
      return;
    }
    ActionError.handler = true;
    process.on('uncaughtException', (error) => {
      console.error(error);
      process.exit(1);
    });
    process.on('unhandledRejection', (reason) => {
      console.error('Unhandled promise rejection:', reason);
      process.exit(1);
    });
    process.on('warning', (warning) => {
      console.warn(warning.stack);
    });
  }
}

module.exports = ActionError;
