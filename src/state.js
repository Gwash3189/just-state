/**
 * @module module
 * @example
 * import state from './state'
 */

import React from 'react'
import Connect from './connect'
import identity from 'lodash/identity'


/**
 * The main interface of connecting a React Component.
 * Passes the `state`, `component` and the `mapStateToProps`
 * to the `Connect` component
 *
 * @curried
 * @param  {any} state           The state tree to be passed to the provided
 *                               mapStateToProps function
 * @param  {any} Component       The react component to be rendered
 * @param  {any} mapStateToProps A function which takes the provided state tree
 *                               and returns an object which is spread onto the
 *                               provided `component` as props
 * @return {React.node}          An instance of the Connect component from `./connect`
 */
export default state => (Component, mapStateToProps = identity) => {
  return (
    <Connect
      state={state}
      mapStateToProps={mapStateToProps}
      component={Component} />
  )
}
