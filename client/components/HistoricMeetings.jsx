import React from "react";
import { connect } from "react-redux";

class HistoricMeetings extends React.Component {
  // handleClick = e => {
  //   console.log("clicked meeting id " + e);
  // };

  render() {
    return (
      <div id="historycontainer">
        {this.props.meetings.map(meeting => {
          return (
            <a
              value="1"
              onClick={e => {
                this.props.handleClick(1);
              }}
              id="history_meeting"
              className="button is-success"
            >
              Meeting {meeting.id}
            </a>
          );
        })}
        {/* <a
          value="1"
          onClick={e => {
            this.handleClick(1);
          }}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 1
        </a> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMeeting: num => dispatch(getMeeting(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricMeetings);
