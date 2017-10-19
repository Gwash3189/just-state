import uniqueId from 'lodash/uniqueId'

const stateChangeId = () => {
  return uniqueId('state-change')
}

export default {
  logStateChange: (newState, oldState, logger = console.log) => {
    // eslint-disable-line no-console
    logger('=======================================')
    logger('starting state change: ', stateChangeId())
    logger('old state: ', oldState)
    logger('new state: ', newState)
    logger('=======================================')
  }
}
