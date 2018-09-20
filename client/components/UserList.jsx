import User from './User'
import React from 'react'
import {connect} from 'react-redux'

// List of users for layout page
function UserList (props) {
  
  const users =
    [
      {
        id: 1,
        user_name: 'symesharr',
        first_name: 'Harrison',
        last_name: 'Symes',
        // hash: hashSync('Krang', saltRounds),
        hourly_wage: 300
      },
      {
        id: 2,
        user_name: 'symesharr',
        first_name: 'Harrison',
        last_name: 'Symes',
        // hash: hashSync('Krang', saltRounds),
        hourly_wage: 300
      }
    ]
    

  return(
    <div>
      <h1>userList</h1>
      {users.map(user => {
        return(
          <User person={user} />
        )
      })}
    </div>
  )

}

export default connect()(UserList)