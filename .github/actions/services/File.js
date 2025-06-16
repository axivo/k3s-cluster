/**
 * File service for file system operations
 * 
 * @module services/File
 * @author AXIVO
 * @license BSD-3-Clause
 */
const fs = require('fs/promises');
const path = require('path');
const Action = require('../core/Action');

/**
 * File service for file system operations
 * 
 * Provides comprehensive file system operations including YAML processing,
 * directory management, file filtering, and path manipulation utilities.
 * 
 * @class FileService
 */
class FileService extends Action {
  /**
   * Creates a directory
   * 
   * @param {string} directory - Directory to create
   * @param {Object} [options={}] - Directory creation options
   * @param {boolean} [options.recursive] - Whether to create parent directories
   * @param {boolean} [options.silent] - Whether to suppress log messages
   * @returns {Promise<void>}
   */
  async createDir(directory, options = {}) {
    return this.execute(`create '${directory}' directory`, async () => {
      await fs.mkdir(directory, { recursive: options.recursive ?? true });
      if (!options.silent) {
        this.logger.info(`Successfully created '${directory}' directory`);
      }
    }, false);
  }

  /**
   * Reads a file
   * 
   * @param {string} file - File to read
   * @param {Object} [options={}] - Read options
   * @param {string} [options.encoding] - File encoding
   * @returns {Promise<string|Buffer>} File contents
   */
  async read(file, options = {}) {
    return this.execute(`read '${file}' file`, async () => {
      return await fs.readFile(file, options.encoding || 'utf8');
    });
  }
}

module.exports = FileService;
