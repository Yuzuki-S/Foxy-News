import {ADD_USER} from '../actions/addAttendee'

const addAttendee = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
    console.log(action)
    return [...state, action]
    default:
    return state 
  }
}

export default addAttendee