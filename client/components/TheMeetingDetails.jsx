import React from "react";
import AttendeesView from "./AttendeesView";

class TheMeetingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeesView: false
    };
    this.seeAttendees = this.seeAttendees.bind(this);
  }

  seeAttendees() {
    console.log("the func");

    this.setState(prevState => ({
      attendeesView: !prevState.attendeesView
    }));
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
              return (
                // <div className="tile is-ancestor">
                //   <div className="tile is-4 is-vertical is-parent">
                //     <div className="tile is-child box">
                //       <p className="title">Meeting Name</p>
                //       <p>{meetingDetail.meeting_name}</p>
                //     </div>
                //     <div className="tile is-child box">
                //       <p className="title">Two</p>
                //       <p>
                //         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                //         Proin ornare magna eros, eu pellentesque tortor
                //         vestibulum ut. Maecenas non massa sem. Etiam finibus
                //         odio quis feugiat facilisis.
                //       </p>
                //     </div>
                //   </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <p className="title">
                      Meeting Name: {meetingDetail.meeting_name}
                    </p>
                    <ul>
                      <li>
                        Duration in Seconds: {meetingDetail.duration_seconds}
                      </li>
                      <li>Total Cost: ${meetingDetail.cost}</li>
                    </ul>
                    {this.state.attendeesView && (
                      <AttendeesView attendees={meetingDetail.attendees} />
                    )}
                  </div>
                  <button onClick={this.seeAttendees}>Toggle Attendees</button>
                </div>
                // </div>
              );
            })}
            <div className="content" />
          </article>
        </div>
      </div>
    );
  }
}

export default TheMeetingDetails;
