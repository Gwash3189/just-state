/**
 * @module selector
 * @example
 * import selector from './selector'
 */

import get from 'lodash/get'

/**
 * A proxy to `lodash/get` as a convience for creating state selectors
 * @curried
 * @see https://lodash.com/docs/4.17.4#get
 * @param  {string} path         The path to be traversed on the provided object
 * @param  {object} obj          The object to be traversed
 * @param  {any}    defaultValue The default value to be returned in the path resolves to undefined
 * @return {any}    The value that lives at the end of the path on the provided object
 *
 * @example
 * import createSelector from './selector'
 * createSelector('a.b.c')({ a: { b: { c: 'hello!' } } }) // 'hello'
 * createSelector('a.b.c.e')({ a: { b: { c: 'hello!' } } }, 'nothing here') // 'nothing here'
 */
export default path => (obj, defaultValue) => get(obj, path, defaultValue)
