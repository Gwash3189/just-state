import { selector } from './../../src/index'

/**
 * Selects the `count` path from the state tree
 * @type {function}
 * @example
 * import { selectCount } from 'selectors'
 * selectCount({ count: 1 }) // 1
 * selectCount({}, 22) // 22
 */
export const selectCount = selector('count')
