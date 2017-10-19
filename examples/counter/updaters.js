import { setCount } from './setters'
import { selectCount } from './selectors'

export const updateCount = value => state => {
  const newCount = add(value, selectCount(state))
  return setCount(state, newCount)
}

const add = (value, number) => number + value
