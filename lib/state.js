'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connect = require('./connect.js');

var _connect2 = _interopRequireDefault(_connect);

var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state) {
  return function (Component) {
    var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity2.default;

    return _react2.default.createElement(_connect2.default, {
      state: state,
      mapStateToProps: mapStateToProps,
      component: Component
    });
  };
};