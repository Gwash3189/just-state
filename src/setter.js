import set from 'lodash/set'

export default path => (obj, value) => {
  set(obj, path, value)
  return obj
}
