/**
 * Shell service for executing shell commands
 * 
 * @module services/Shell
 * @author AXIVO
 * @license BSD-3-Clause
 */
const Action = require('../core/Action');

/**
 * Shell service for executing shell commands
 * 
 * Provides comprehensive shell command execution with error handling,
 * output capture, and flexible execution options.
 * 
 * @class ShellService
 */
class ShellService extends Action {
  /**
   * Creates a new ShellService instance
   * 
   * @param {Object} params - Service parameters
   */
  constructor(params) {
    super(params);
  }

  /**
   * Executes a shell command with error handling
   * 
   * @param {string} command - Command to execute
   * @param {string[]} args - Command arguments
   * @param {Object} [options={}] - Execution options
   * @param {boolean} [options.silent=true] - Whether to suppress command output
   * @param {boolean} [options.output=false] - Whether to capture and return command output
   * @param {boolean} [options.throwOnError=true] - Whether to throw on non-zero exit code
   * @param {boolean} [options.returnFullResult=false] - Whether to return full result object
   * @returns {Promise<string|Object>} Command output or result object
   */
  async execute(command, args, options = {}) {
    const {
      silent = true,
      output = false,
      throwOnError = true,
      returnFullResult = false,
      ...execOptions
    } = options;
    try {
      if (output) {
        const result = await this.exec.getExecOutput(command, args, {
          silent,
          ...execOptions
        });
        return returnFullResult ? {
          stdout: result.stdout.trim(),
          stderr: result.stderr.trim(),
          exitCode: result.exitCode
        } : result.stdout.trim();
      } else {
        await this.exec.exec(command, args, {
          silent,
          ...execOptions
        });
        return '';
      }
    } catch (error) {
      this.actionError.report({
        operation: `execute '${command}' command`,
        fatal: throwOnError
      }, error);
      return null;
    }
  }
}

module.exports = ShellService;
