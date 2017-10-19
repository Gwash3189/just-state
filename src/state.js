import React from 'react'
import Connect from './connect'
import identity from 'lodash/identity'

export default state => (Component, mapStateToProps = identity) => {
  return (
    <Connect
      state={state}
      mapStateToProps={mapStateToProps}
      component={Component}
    />
  )
}
