import React from 'react'
import { connect } from 'react-redux'
// import MeetingList from './MeetingList'
// import MeetingUsersList from './MeetingUsersList'
// import TimerBox from './TimerBox'
import CostPerHour from './CostPerHour'

// Main Layout page

function TimerBox(props) {
  let totalTime = 0;
  //Initial state will be FIRSTPLAY=TRUE, PLAY=FALSE while PLAY=true run timer

  //On start set TIMESTAMP if FIRSTPLAY=TRUE and PLAY=TRUE, 
  //On pause set FIRSTPLAY=FALSE and PLAY=FALSE, 
  //On stop set FIRSTPLAY=FALSE and PLAY=FALSE, TOTALTIME=timer

    // {while (totalTime < 10){
      
    // }}
  
  return (
  
  <div >

<CostPerHour />
TIMERBOXT


  </div>
  )
}

export default connect()(TimerBox)