import {combineReducers} from 'redux'

import auth from './auth'
import userRed from './userRed'

export default combineReducers({
  auth,
  userRed
})
