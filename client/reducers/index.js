import { combineReducers } from 'redux';

import timer from './timer';
import auth from './auth';
import userRed from './userRed';
import addAttendee from './attendee';
import meetings from './meetings';
import singlemeeting from './singlemeeting';
import foxImage from './foxImage'

export default combineReducers({
  auth,
  userRed,
  addAttendee,
  timer,
  meetings,
  singlemeeting,
  foxImage
});
