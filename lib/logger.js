'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateChangeId = function stateChangeId() {
  return (0, _uniqueId2.default)('state-change');
};

exports.default = {
  logStateChange: function logStateChange(newState, oldState) {
    var logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.log;

    logger('=======================================');
    logger('starting state change: ', stateChangeId());
    logger('old state: ', oldState);
    logger('new state: ', newState);
    logger('=======================================');
  }
};