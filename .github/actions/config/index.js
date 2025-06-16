/**
 * Configuration module
 * 
 * Provides a centralized, pre-configured instance of the Configuration class
 * that can be imported and used throughout the application.
 * 
 * Users can create custom configuration files by:
 * 1. Copying production.js to a new file (e.g., staging.js, development.js)
 * 2. Modifying the settings in the new file as needed
 * 3. Changing the require statement below to load the desired configuration
 * 
 * @example
 * // To use staging configuration:
 * // const settings = require('./staging');
 * 
 * // To use development configuration:
 * // const settings = require('./development');
 * 
 * @module config
 * @author AXIVO
 * @license BSD-3-Clause
 */
const Configuration = require('../core/Configuration');
const settings = require('./production');

/**
 * Singleton configuration instance
 */
const config = new Configuration(settings);

module.exports = config;
