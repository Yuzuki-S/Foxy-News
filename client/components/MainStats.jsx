
import React from 'react'
import { connect } from 'react-redux'
// import AttendeesList from './AttendeesList'
// import MeetingUsersList from './MeetingUsersList'
import TimerBox from './TimerBox'
// import CostPerHour from './CostPerHour'

// Main Layout page

function MainStats(props) {
  
  return (
  
  <div className="container">
    <h2 className="title is-2">New Meeting</h2>
      
      {/* <AttendeesList />    */}
      <TimerBox />
      {/* <CostPerHour /> */}

  </div>
  )
}

export default connect()(MainStats)
