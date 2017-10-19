import set from 'lodash/set'

/**
 * A proxy to `lodash/set` as a convience for creating state setters
 * This method sets the value on the object, and then returns the provided object
 * https://lodash.com/docs/4.17.4#set
 *
 * @curried
 * @param  {string} path  The path to be traversed on the provided object
 * @param  {object} obj   The object to be traversed
 * @param  {any}    value The value to be set on the provided object
 * @return {any}    The original object provided
 *
 * @example
 * import createSelector from './selector'
 * createSelector('a.b.c')({ a: { b: { c: 'hello!' } } }) // 'hello'
 * createSelector('a.b.c.e')({ a: { b: { c: 'hello!' } } }, 'nothing here') // 'nothing here'
 */
export default path => (obj, value) => {
  set(obj, path, value)

  return obj
}
