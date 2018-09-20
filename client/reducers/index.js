import {combineReducers} from 'redux'

import auth from './auth'
import userRed from './userRed'
import addAttendee from './attendee'
import timer from './timer'

export default combineReducers({
  auth,
  userRed,
  addAttendee,
  timer
})
