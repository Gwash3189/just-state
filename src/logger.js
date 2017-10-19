import uniqueId from 'lodash/uniqueId'

const stateChangeId = () => {
  return uniqueId('state-change')
}

export default {
  /**
   * Logs state changes in a readable way
   * @param  {Object}   newState the new state object
   * @param  {Object}   oldState the old state object
   * @param  {function} logger   A custom logger, if no logger is provided `console.log` is used
   * @return {undefined}
   */
  logStateChange: (newState, oldState, logger = console.log) => {
    logger('=======================================')
    logger('starting state change: ', stateChangeId())
    logger('old state: ', oldState)
    logger('new state: ', newState)
    logger('=======================================')
  }
}
