/**
 * @module logger
 * @example
 * import logger from './logger'
 */

import uniqueId from 'lodash/uniqueId'

const stateChangeId = () => {
  return uniqueId('state-change')
}

/**
 * Logs state changes in a readable way
 * @param  {Object}   newState the new state object
 * @param  {Object}   oldState the old state object
 * @param  {function} logger   A custom logger, if no logger is provided `console.log` is used
 * @return {string}   the unique id used in the logging process
 */
export default (newState, oldState, logger = console.log) => {
  const id = stateChangeId()

  logger('=======================================')
  logger('starting state change: ', id)
  logger('old state: ', oldState)
  logger('new state: ', newState)
  logger('=======================================')

  return id
}
