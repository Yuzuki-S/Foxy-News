import request from "../utils/api";

//this is our request action
export function meetingReq() {
  return {
    type: "MEETING_REQ",
    isFetching: true,
    isAuthenticated: true
  };
}
//this handles the response from our api
export function meetingRes(response) {
  return {
    type: "MEETING_RES",
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
    return request("get", "meetings/1/users", obj)
      .then(response => {
        if (!response.ok) {
        } else {
          dispatch(meetingRes(response.body));
        }
      })
      .catch(err => dispatch(loginError(err.response.body.message)));
  };
}
