import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { state } from './../../src/index'
import { updateCount } from './updaters'
import { selectCount } from './selectors'
import stateful from './state'

export class Counter extends Component {
  increment() {
    const { updateState } = this.props

    updateState(updateCount(1))
  }

  decrement() {
    const { updateState } = this.props

    updateState(updateCount(-1))
  }

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
