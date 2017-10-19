import cloneDeep from 'lodash/cloneDeep'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import logger from './logger'

export default class Connect extends Component {
  constructor(props) {
    super(props)
    this.state = cloneDeep(props.state)
    this.updateState = this.updateState.bind(this)
  }

  updateState(...funcs) {
    const { logStateChange } = this.props
    // composes all functions together from left to right
    // assuming all state changes are async
    const promisedChange = funcs.reduce((foldedState, func) => {
      const change = foldedState.then(state => {
        logStateChange(foldedState, state)

        return Promise.resolve(func(state))
      })

      return change
    }, Promise.resolve(this.state))

    return new Promise((res, rej) => {
      promisedChange
        .then(state => this.setState(state, () => res(true)))
        .catch((...args) => rej(...args))
    })
  }

  render() {
    const Component = this.props.component
    const mapStateToProps = this.props.mapStateToProps
    const spreadState = mapStateToProps(this.props.state)

    return <Component updateState={this.updateState} {...spreadState} />
  }
}

Connect.defaultProps = {
  logStateChange: logger.logStateChange
}

Connect.propTypes = {
  state: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired,
  mapStateToProps: PropTypes.func.isRequired,
  logStateChange: PropTypes.func
}
