import User from './User'

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addAttendee} from '../actions/addAttendee'

const users =[
  {
    id: 1,
    user_name: 'symesharr',
    first_name: 'Harrison',
    last_name: 'Symes',
    hourly_wage: 300
  },
  {
    id: 2,
    user_name: 'Jeff',
    first_name: 'Harrison',
    last_name: 'Symes',
    hourly_wage: 300
  }
]

class UserList extends Component {
  constructor(props) {
    super(props);
    // this.state = {  }
  }
  render() { 
    return(
      <div>
        <h1>userList</h1>
        {console.log(users)}
       
        {users.map(user => {
          console.log(user);
          
          return (
            <div>    
          <User person={user}  /> 
          <button onClick={() => this.props.addAttendee(user)} id="" className="">Add</button>
          </div>
         
          )  
        })}
      </div>
  
    )
  }
}

function addToAttendees(user) {
  console.log("clicked?", user)
  
}


const mapDispatchToProps = (dispatch) => {
  return {
    addAttendee: (user) => dispatch(addAttendee(user))
  }
}

export default connect(null,mapDispatchToProps)(UserList)