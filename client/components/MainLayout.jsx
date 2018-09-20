import React from 'react'
import { connect } from 'react-redux'
import UserList from './UserList'
import AttendeesList from './AttendeesList'
// import MeetingUsersList from './MeetingUsersList'
import TimerBox from './TimerBox'
import CostPerHour from './CostPerHour'
import MainStats from './MainStats';

// Main Layout page

function MainLayout(props) {
  
  return (
  
  <div className="container">
    <h2 className="title is-2">Main Page</h2>
    <div className= 'bigboi'>
    <div className="main_LeftSideBar">
    LEFT<UserList />
    </div>
    <div className="right_mainLayout_container">
      <MainStats />
    </div>

</div>
  </div>
  )
}

export default connect()(MainLayout)
