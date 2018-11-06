import React from 'react';
import { connect } from 'react-redux';
// import AttendeesList from './AttendeesList'
// import MeetingUsersList from './MeetingUsersList'
import TimerBox from './TimerBox';

// Main Layout page

function MainStats(props) {
  return (
    <div className="container">
      <h2 className="title is-2">New Meeting</h2>

      {/* <AttendeesList />    */}
      <TimerBox />
    </div>
  );
}

export default connect()(MainStats);
