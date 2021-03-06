import { expect } from 'chai'
import logger from '../src/logger'

describe('logger', () => {
  let loggerMock, newState, oldState

  beforeEach(() => {
    loggerMock = jest.fn()
    newState = {}
    oldState = {}

    logger(newState, oldState, loggerMock)
  })

  it('logs out the new state', () => {
    const [string, object] = loggerMock.mock.calls[3]

    expect(string).to.eq('new state: ')
    expect(object).to.eql(newState)
  })

  it('logs out the old state', () => {
    const [string, object] = loggerMock.mock.calls[2]

    expect(string).to.eq('old state: ')
    expect(object).to.eql(oldState)
  })

  describe('when there are multiple changes', () => {
    beforeEach(() => {
      logger(newState, oldState, loggerMock)
    })

    it('logs out a unique id with each change', () => {
      const idOne = loggerMock.mock.calls[1][1]
      const idTwo = loggerMock.mock.calls[6][1]

      expect(idOne).to.not.eql(idTwo)
    })
  })

  describe('when not using a fake logger', () => {
    it("doesn't blow up", () => {
      expect(() => logger(newState, oldState)).to.not.throw
    })
  })
})
