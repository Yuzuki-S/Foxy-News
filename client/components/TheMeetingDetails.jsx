import React from 'react';
import AttendeesView from './AttendeesView';
import { getMeeting } from '../actions/meetings';
import { connect } from 'react-redux';

class TheMeetingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeesView: false
    };
    this.seeAttendees = this.seeAttendees.bind(this);
  }

  seeAttendees(id) {
    this.setState(prevState => ({
      attendeesView: !prevState.attendeesView
    }));
    this.props.getMeeting(id);
  }

  render() {
    return (
      <div id="historycontainer">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Select any meeting from the left:</p>
            <p className="subtitle">
              Meeting Details are below <i className="far fa-hand-point-down" />
            </p>
            {this.props.meeting.map(meetingDetail => {
              return meetingDetail.map(actualdetail => {
                if (actualdetail.id == this.props.meetingid)
                  return (
                    <div className="tile is-parent">
                      <div className="tile is-child box">
                        <p className="title">
                          Meeting Name: {actualdetail.meeting_name}
                        </p>
                        <ul>
                          <li>
                            Duration in Seconds: {actualdetail.duration_seconds}
                          </li>
                          <li>Total Cost: ${actualdetail.cost}</li>
                        </ul>
                        {this.state.attendeesView && (
                          <AttendeesView id={this.props.meetingid} />
                        )}
                      </div>
                      <button
                        onClick={() => {
                          this.seeAttendees(this.props.meetingid);
                        }}
                      >
                        Toggle Attendees
                      </button>
                    </div>
                  );
              });
            })}
            <div className="content" />
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMeeting: id => {
      dispatch(getMeeting(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheMeetingDetails);
