import request from 'superagent';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const requestImage = () => {
  return {
    type: REQUEST_IMAGE
  };
};

export const receiveImage = (fox) => {
  return {
    type: RECEIVE_IMAGE,
    image:fox
  };
};

export const showError = errorMessage => {
  return {
    type: 'SHOW_ERROR',
    errorMessage: errorMessage
  };
};

export function getImage() {
  return dispatch => {
    dispatch(requestImage());
    return request
      .get('/foximage')
      .then(res => {
        dispatch(receiveImage(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message));
      });
  };
}
