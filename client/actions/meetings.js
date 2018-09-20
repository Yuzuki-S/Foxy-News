import request from '../utils/api';

//get all meetings

//this is our request action
export function meetingReqAll() {
  return {
    type: 'MEETING_REQ',
    isFetching: true,
    isAuthenticated: true
  };
}
//this handles the response from our api
export function meetingResAll(response) {
  return {
    type: 'MEETING_RES',
    isFetching: false,
    meeting: response
  };
}

export function allMeetings() {
  return dispatch => {
    dispatch(meetingReqAll());
    return request('get', 'allmeetings')
      .then(response => {
        if (!response.ok) {
          //error case will go here
        } else {
          dispatch(meetingResAll(response.body));
        }
      })
      .catch(err => dispatch(loginError(err.response.body.message)));
  };
}

//get an invidivual meeting based on ID

//this is our request action
export function meetingReq() {
  return {
    type: 'SINGLE_MEETING_REQ',
    isFetching: true,
    isAuthenticated: true
  };
}
//this handles the response from our api
export function meetingRes(response) {
  return {
    type: 'SINGLE_MEETING_RES',
    isFetching: false,
    meeting: response
  };
}

export function getMeeting(id) {
  return dispatch => {
    dispatch(meetingReq());
    let obj = {
      id: id
    };
    return request('get', `meetings/${id}/users`, obj)
      .then(response => {
        if (!response.ok) {
        } else {
          dispatch(meetingRes(response.body.attendees));
        }
      })
      .catch(err => dispatch(loginError(err.response.body.message)));
  };
}
