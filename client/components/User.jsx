//Per user info based dataimport User from './User'
import React from 'react'
import {connect} from 'react-redux'

// List of users for layout page
function User (props) {

console.log(props)

  return(
    <div>
      {props.person.user_name}
      ${props.person.hourly_wage}
    </div>
  )

}

export default connect()(User)