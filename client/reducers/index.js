import {combineReducers} from 'redux'

import auth from './auth'
import userRed from './userRed'
import timer from './timer'

export default combineReducers({
  auth,
  timer,
  userRed
})
