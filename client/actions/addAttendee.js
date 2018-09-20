import request from "../utils/api";

export const addAttendee = user => {
  return {
    type: "ADD_USER",
    user: user
  };
};

export function getMeeting(id) {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API

    return request("get", "api/meetings/1/users", id)
      .then(response => {
        if (!response.ok) {
          console.log("broken");

          // If there was a problem, we want to
          // dispatch the error condition
          //dispatch(loginError(response.body.message))
          // return Promise.reject(response.body.message)
        } else {
          // If login was successful, set the token in local storage
          //const userInfo = saveUserToken(response.body.token)
          // Dispatch the success action
          console.log(response);

          //dispatch(receiveLogin(userInfo))
        }
      })
      .catch(err => dispatch(loginError(err.response.body.message)));
  };
}
