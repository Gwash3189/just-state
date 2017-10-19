import get from 'lodash/get'

export default path => obj => get(obj, path)
