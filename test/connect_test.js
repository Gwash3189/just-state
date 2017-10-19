import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Connect from '../src/connect'

describe('Connect', () => {
  let output, logStateChangeMock, stateMock, ComponentMock, mapStateToPropsMock

  const renderConnect = () => {
    return shallow(
      <Connect
        mapStateToProps={mapStateToPropsMock}
        state={stateMock}
        component={ComponentMock}
        logStateChange={logStateChangeMock}
      />
    )
  }

  beforeEach(() => {
    mapStateToPropsMock = jest.fn()
    stateMock = { count: 1 }
    mapStateToPropsMock = jest.fn(state => ({ ...state }))
    logStateChangeMock = jest.fn()
    ComponentMock = ({ count }) => <h1> {count} </h1> // eslint-disable-line react/prop-types

    output = renderConnect()
  })

  it('renders', () => {
    expect(output).to.not.be.null
  })

  it('renders the provided component', () => {
    expect(output.find(ComponentMock)).to.have.length(1)
  })

  it('renders the component with the updateState function', () => {
    expect(output.prop('updateState')).to.be.a('function')
  })

  it('maps the state to props', () => {
    expect(mapStateToPropsMock.mock.calls).to.have.length(1)
  })

  it('logs out state changes', () => {
    const { updateState } = output.props()

    updateState(x => x).then(() => {
      expect(logStateChangeMock.mock.calls).to.have.length(1)
    })
  })

  describe('when there is an async state change', () => {
    let updateState

    const expectation = state => {
      expect(state.count).to.eql(2)
    }

    const asyncChange = state => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ count: state.count + 1 })
        }, 5)
      })
    }

    beforeEach(() => {
      updateState = output.prop('updateState')
    })

    it('performs the state update', () => {
      return updateState(asyncChange, expectation)
    })

    describe('when a change causes an error', () => {
      const errorChange = () => {
        throw 'Error Change'
      }

      it('catches the error in a rejected promise', () => {
        return updateState(errorChange).catch(msg => {
          expect(msg).to.eq('Error Change')
        })
      })
    })
  })
})
