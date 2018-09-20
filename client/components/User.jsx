//Per user info based dataimport User from './User'
import React from 'react'
import {connect} from 'react-redux'

// List of users for layout page
function User (props) {



  return(
    <div>
    <h1> User</h1>
    <p>{}</p>
    </div>
  )

}

export default connect()(User)