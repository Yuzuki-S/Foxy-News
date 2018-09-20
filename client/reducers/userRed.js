// import {setAllUsers} from '../actions/setUsers'


export default function userRed(state = [], action) {
  
  switch (action.type) {
    case 'SET_ALL_USERS':
        return {
        totalUsers: action.allUsers
      }
    default:
      return state
  }
}