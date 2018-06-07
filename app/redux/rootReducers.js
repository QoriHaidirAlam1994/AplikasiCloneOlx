import { combineReducers } from 'redux'

import nav from './nav'
import produkReducer from '../produk/reducers'

const appReducer = combineReducers({
  nav,
  produkReducer
})

export default appReducer
