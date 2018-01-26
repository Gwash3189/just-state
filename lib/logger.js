'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateChangeId = _uniqueId2.default.bind(null, 'state-change');

/**
 * Logs state changes in a readable way
 * @param  {Object}   newState the new state object
 * @param  {Object}   oldState the old state object
 * @param  {function} logger   A custom logger, if no logger is provided `console.log` is used
 * @return {string}   the unique id used in the logging process
 */
/**
 * @module logger
 * @example
 * import logger from './logger'
 */

exports.default = function (newState, oldState) {
  var logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.log;

  var id = stateChangeId();

  logger('=======================================');
  logger('starting state change: ', id);
  logger('old state: ', oldState);
  logger('new state: ', newState);
  logger('=======================================');

  return id;
};