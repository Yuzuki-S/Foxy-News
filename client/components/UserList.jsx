import User from './User'
import React from 'react'
import {connect} from 'react-redux'

// List of users for layout page
function UserList (props) {

  return(
    <div>
      <h1>userList</h1>
      <User />
    </div>
  )

}

export default connect()(UserList)