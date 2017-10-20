import { state } from './../../src/index'

/**
 * The initial state tree for the counter app
 * @type {Object}
 */
export const initalState = {
  count: 0
}

/**
 * The partial application of the `state` function from `just-state`
 * Is a function that takes the Counter component, and an optional mapStateToProps function
 */
export default state(initalState)
