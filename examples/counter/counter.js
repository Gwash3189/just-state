/**
 * @module counter
 * @example
 * import Counter from 'counter'
 * <Counter count={1} updateState={...} />
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { state } from './../../src/index'
import { updateCount } from './updaters'
import { selectCount } from './selectors'
import stateful from './state'

/**
 * A stateful component that keeps tracks increment and decrement actions
 */
export class Counter extends Component {
  /**
   * Mutates the state by incrementing the count
   * @mutative
   * @return {undefined}
   */
  increment() {
    const { updateState } = this.props

    updateState(updateCount(1))
  }

  /**
   * Mutates the state by decrementing the count
   * @mutative
   * @return {undefined}
   */
  decrement() {
    const { updateState } = this.props

    updateState(updateCount(-1))
  }

  /**
   * Renders the current count and the increment and decrement buttons
   * @return {Counter} the view of the Counter component
   */
  render() {
    const { count } = this.props

    return (
      <div>
        <h1> {count} </h1>
        <button onClick={this.increment.bind(this)}> Increment </button>
        <button onClick={this.decrement.bind(this)}> Decrement </button>
      </div>
    )
  }
}

Counter.propTypes = {
  updateState: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
}

Counter.mapStateToProps = state => ({
  count: selectCount(state)
})

export default stateful(Counter)
