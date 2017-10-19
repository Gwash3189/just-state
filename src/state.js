import React, { Component } from 'react'
import Connect from './connect.js'
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
