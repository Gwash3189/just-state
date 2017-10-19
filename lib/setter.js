'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (path) {
  return function (obj, value) {
    (0, _set2.default)(obj, path, value);

    return obj;
  };
};