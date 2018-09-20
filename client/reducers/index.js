import {combineReducers} from 'redux'

import auth from './auth'
import userRed from './userRed'
import addAttendee from './attendee'


export default combineReducers({
  auth,
  userRed,
  addAttendee
})
