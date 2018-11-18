import { combineReducers } from 'redux';

import timer from './timer';
import auth from './auth';
import userRed from './userRed';
import addAttendee from './attendee';
import singlemeeting from './singlemeeting';
import foxImage from './foxImage'

export default combineReducers({
  auth,
  userRed,
  addAttendee,
  timer,
  singlemeeting,
  foxImage
});
