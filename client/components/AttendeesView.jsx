import React from "react";
import { connect } from "react-redux";
import { getMeeting } from "../actions/meetings";
class AttendeesView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="attendeesviewcontainer">
        <ul>
          {this.props.meetings.map(attendee => {


            return (
              <li>
                <b>Attendee:</b> {attendee.first_name} {attendee.last_name}
                <br />
                <b>Cost per hour:</b> ${attendee.hourly_wage}
              </li>
            );

          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.singlemeeting
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMeeting: id => dispatch(getMeeting(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeesView);
