import { expect } from 'chai'
import { Counter } from './../../examples/counter/counter'
import React from 'react'
import { shallow } from 'enzyme'

describe('Counter', () => {
  let output, updateStateMock, initialState, expectedState, stateMock

  const renderCounter = (props = {}) => {
    return shallow(<Counter updateState={updateStateMock} count={0} />)
  }

  beforeEach(() => {
    stateMock = 0
    updateStateMock = func => {
      expectedState = func(initialState)
    }
    output = renderCounter()
  })

  it('renders a Counter', () => {
    expect(output).to.not.be.null
  })

  it('renders the counter', () => {
    expect(output.find('h1').text()).to.eq(' 0 ')
  })

  describe('when the increment button is clicked', () => {
    let button

    beforeEach(() => {
      initialState = { count: 0 }
      output = renderCounter()
      button = output.find('button').first()

      button.simulate('click')
    })

    it('it increments the state', () => {
      expect(expectedState).to.eql({ count: 1 })
    })
  })

  describe('when the decrement button is clicked', () => {
    let button

    beforeEach(() => {
      initialState = { count: 0 }
      output = renderCounter()
      button = output.find('button').at(1)

      button.simulate('click')
    })

    it('it increments the state', () => {
      expect(expectedState).to.eql({ count: -1 })
    })
  })
})
