import { setCount } from './setters'
import { selectCount } from './selectors'

/**
 * Updates the `count` value in the stateTree
 * @curried
 * @param  {Number}  number The number to adjust the count by.
 *                          Can be positive or negative
 * @param  {Object}  state  The state tree
 * @return {Object}         The updated state tree
 */
export const updateCount = number => state => {
  const newCount = add(number, selectCount(state))
  return setCount(state, newCount)
}

/**
 * Adds two numbers together
 * @param  {Number} left  Left  number
 * @param  {Number} right Right number
 * @return {Number}             The value of addinng both numbers together
 */
const add = (left, right) => left + right
