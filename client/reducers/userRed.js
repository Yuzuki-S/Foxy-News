// import {setAllUsers} from '../actions/setUsers'

//initial state is array cause we are hard coding things atm
export default function userRed(state = [], action) {
  switch (action.type) {
    case 'SET_ALL_USERS':
      return {
        totalUsers: action.allUsers
      };
    default:
      return state;
  }
}
