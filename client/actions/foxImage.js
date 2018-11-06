export function requestImage() {
  type: 'REQUEST_IMAGE';
}

export function receiveImage() {
  type: 'RECEIVE_IMAGE';
}

export function getImage() {
  return dispatch => {
    dispatch(requestImage());
    return request.get('https://randomfox.ca/floof/').then(data);
  };
}

// return (dispatch) => {
//     dispatch(requestImage())
//     return request
//     .get(`http://shibe.online/api/shibes?count=[1-100]`)
//     .then(ApiRes => {

//       console.log(ApiRes.body);
//       dispatch(receiveImage(ApiRes.body))

//       console.log("Hi");
//     })
//     .catch(err => {
//       dispatch(err.message)
//     })
//   }
// }
