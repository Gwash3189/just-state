'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A proxy to `lodash/set` as a convience for creating state setters
 * This method sets the value on the object, and then returns the provided object
 * @curried
 * @see https://lodash.com/docs/4.17.4#set
 * @param  {string} path  The path to be traversed on the provided object
 * @param  {object} obj   The object to be traversed
 * @param  {any}    value The value to be set on the provided object
 * @return {any}    The original object provided
 *
 * @example
 * import createSetter from './setter'
 * createSetter('a.b.c')({ a: { b: { c: 'hello!' } } }, 'goodbye!')
 * // { a: { b: { c: 'goodbye!' } } }
 */
exports.default = function (path) {
  return function (obj, value) {
    (0, _set2.default)(obj, path, value);

    return obj;
  };
}; /**
    * @module setter
    * @example
    * import setter from './setter'
    */