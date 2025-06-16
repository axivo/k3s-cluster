/**
 * Core module exports
 * 
 * This module exports all core classes to simplify imports
 * throughout the application.
 */
const Action = require('./Action');
const ActionError = require('./Error');
const Configuration = require('./Configuration');
const Logger = require('./Logger');

module.exports = {
  Action,
  ActionError,
  Configuration,
  Logger
};
