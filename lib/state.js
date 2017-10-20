'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

var _identity = require('lodash/identity');

var _identity2 = _interopRequireDefault(_identity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The main interface of connecting a React Component.
 * Passes the `state`, `component` and the `mapStateToProps`
 * to the `Connect` component
 *
 * @curried
 * @param  {any} state           The state tree to be passed to the provided
 *                               mapStateToProps function
 * @param  {any} Component       The react component to be rendered
 * @param  {any} mapStateToProps A function which takes the provided state tree
 *                               and returns an object which is spread onto the
 *                               provided `component` as props
 * @return {React.node}          An instance of the Connect component from `./connect`
 */
exports.default = function (state) {
  return function (Component) {
    var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity2.default;

    return _react2.default.createElement(_connect2.default, {
      state: state,
      mapStateToProps: mapStateToProps,
      component: Component });
  };
}; /**
    * @module module
    * @example
    * import state from './state'
    */