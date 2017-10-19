'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Connects the provided state and the provided component together.
 * This class is used by the `state` function provided in `./state.js`
 */
var Connect = function (_Component) {
  _inherits(Connect, _Component);

  function Connect(props) {
    _classCallCheck(this, Connect);

    var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props));

    _this.state = (0, _cloneDeep2.default)(props.state);
    _this.updateState = _this.updateState.bind(_this);
    return _this;
  }

  /**
   * A variatic function that chains the provided functions together
   * and updates the state of the provided component
   *
   * The functions provided must take the entire state tree and either return the new
   * state tree, or a promise that resolves to the new state tree
   *
   * @param  {...[(state) => any | Promise<any>]} funcs N number of functions that mutate the
   *                                                    state and return the entire state tree
   * @return {Promise}                                  A promise that is either resolved or
   *                                                    rejected when the state update is complete
   */


  _createClass(Connect, [{
    key: 'updateState',
    value: function updateState() {
      var _this2 = this;

      var logStateChange = this.props.logStateChange;
      // composes all functions together from left to right
      // assuming all state changes are async

      for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      var promisedChange = funcs.reduce(function (foldedState, func) {
        var change = foldedState.then(function (state) {
          logStateChange(foldedState, state);

          return Promise.resolve(func(state));
        });

        return change;
      }, Promise.resolve(this.state));

      return new Promise(function (res, rej) {
        promisedChange.then(function (state) {
          return _this2.setState(state, function () {
            return res(true);
          });
        }).catch(function () {
          return rej.apply(undefined, arguments);
        });
      });
    }

    /**
     * Renders the component provided on `this.props.component` with
     * the updateState function, and the state derived from `mapStateToProps`
     * @return {React.Node} An instance of the component provided on `this.props.component`
     */

  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      var mapStateToProps = this.props.mapStateToProps;
      var spreadState = mapStateToProps(this.props.state);

      return _react2.default.createElement(Component, _extends({ updateState: this.updateState }, spreadState));
    }
  }]);

  return Connect;
}(_react.Component);

exports.default = Connect;


Connect.defaultProps = {
  logStateChange: _logger2.default.logStateChange
};

Connect.propTypes = {
  state: _propTypes2.default.object.isRequired,
  component: _propTypes2.default.func.isRequired,
  mapStateToProps: _propTypes2.default.func.isRequired,
  logStateChange: _propTypes2.default.func
};