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
          {console.log(this.props.meetings)}
          {this.props.meetings.map(attendee => {
            {
              console.log(attendee);
            }
            // attendee.map(person => {
            //   return (
            //     <li>
            //       <b>Attendee:</b> {person.first_name} {person.last_name}
            //       <br />
            //       <b>Cost per hour:</b> ${person.hourly_wage}
            //     </li>
            //   );
            // });
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
