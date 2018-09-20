import UserList from './UserList'
import React from 'react'


import {connect} from 'react-redux'

class AttendeeList extends React.Component {
  constructor(props){
    super(props)
  }

render() {
  return(
  <div>
    <h1>Unfortunate Souls that have to sit in meeting</h1>
      {console.log('Want stuff here', this.props.displayAttendee.addAttendee)}
      {this.props.displayAttendee.addAttendee.map(data => {

return (<p>{data.user.user_name}</p>)
      }
       )}
  </div>
  )
}
}

const mapStateToProps = (state) => {
  console.log('AL', state)
  
  return {
    displayAttendee: state
  }
}

export default connect(mapStateToProps)(AttendeeList)