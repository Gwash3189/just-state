import { setter } from './../../src/index'

/**
 * Sets the `count` path on the state tree
 * @type {function}
 * @example
 * import { setCount } from 'setters'
 * setCount({ count: 0 }, 1) // { count: 1 }
 */
export const setCount = setter('count')
