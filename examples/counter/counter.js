import React, { Component } from 'react'
import { state } from './../../src/index'
import { updateCount } from './updaters'
import { selectCount } from './selectors'
import initialCountState from './state'

export class Counter extends Component {
  increment() {
    const { updateState } = this.props

    // you get the entire state tree to you state update functions
    // whatever you return is the new state
    // and is sent to any subsequent state update functions
    // you should treat the functions that mutate your state like redux actions
    updateState(updateCount(1))
  }

  decrement() {
    const { updateState } = this.props

    // updateState just accepts functions, they don't have to live in the component
    // the can be imported / composed from anywhere.
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

Counter.mapStateToProps = state => ({
  count: selectCount(state)
})

export default state(initialCountState)(Counter)
