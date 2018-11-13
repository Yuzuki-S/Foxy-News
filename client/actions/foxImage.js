import request from 'superagent';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const RECEIVE_IMAGE = 'RECEIVE_IMAGE';

export const requestImage = () => {
  return {
    type: REQUEST_IMAGE
  };
};

export const receiveImage = () => {
  return {
    type: RECEIVE_IMAGE
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
    console.log('Hi2');
    return request
      .get('/foximage')
      .then(res => {
        console.log('action', res);
      })
      .catch(err => {
        dispatch(showError(err.message));
      });
  };
}
