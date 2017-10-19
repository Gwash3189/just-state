import merge from 'lodash/merge'
import { state } from '../../../src/index'

import user from './user'
import products from './products'
import emails from './emails'

export default state({
  user,
  products,
  emails
})
