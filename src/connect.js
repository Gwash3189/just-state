/**
 * @module connect
 * @example
 * import Connect from './connect'
 */

import cloneDeep from 'lodash/cloneDeep'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import logger from './logger'

/**
 * Connects the provided state and the provided component together.
 * This class is used by the `state` function provided in `./state.js`
 */
export default class Connect extends Component {
  constructor(props) {
    super(props)
    this.state = cloneDeep(props.state)
    this.updateState = this.updateState.bind(this)
  }

  /**
   * A state mutation method that has the signature of `(state, id) => newState | Promise<any>`
   * @typedef {Function} StateMutation
   */

  /**
   * A variatic function that chains the provided functions together
   * and updates the state of the provided component
   *
   * The functions provided must take the entire state tree.
   * They must either return the new state tree, or a promise
   * that resolves to the new state tree
   *
   * @param  {StateMutation[]} funcs N number of functions that mutate the state and return the
   *                                 entire state tree
   * @return {Promise}         A promise that is either resolved or rejected when the state
   *                           update is complete. The promise is rejected when an error occurs
   *                           during the state update process.
   *
   * @fulfuil {object} - The state tree
   * @reject  {Error} - The error generator by the error
   */
  updateState(...funcs) {
    const { logStateChange } = this.props
    // composes all functions together from left to right
    // assuming all state changes are async
    const promisedChange = funcs.reduce((foldedState, func) => {
      const change = foldedState.then(state => {
        const id = logStateChange(foldedState, state)

        return Promise.resolve(func(state, id))
      })

      return change
    }, Promise.resolve(this.state))

    return new Promise((res, rej) => {
      promisedChange
        .then(state => this.setState(state, () => res(true)))
        .catch((...args) => rej(...args))
    })
  }

  /**
   * Renders the component provided on `this.props.component` with
   * the updateState function, and the state derived from `mapStateToProps`
   * @return {React.Node} An instance of the component provided on `this.props.component`
   */
  render() {
    const Component = this.props.component
    const mapStateToProps = this.props.mapStateToProps
    const spreadState = mapStateToProps(this.props.state)

    return <Component updateState={this.updateState} {...spreadState} />
  }
}

Connect.defaultProps = {
  logStateChange: logger
}

Connect.propTypes = {
  state: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  mapStateToProps: PropTypes.func.isRequired,
  logStateChange: PropTypes.func
}
