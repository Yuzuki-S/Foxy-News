import React from "react";

class AttendeesView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="attendeesviewcontainer">
        <ul>
          {this.props.attendees.map(attendee => {
            return (
              <li>
                <b>Attendee:</b> {attendee.first_name} {attendee.last_name}{" "}
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

export default AttendeesView;
