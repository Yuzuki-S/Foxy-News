import React from "react";

class HistoricMeetings extends React.Component {
  handleClick = e => {
    console.log("clicked meeting id " + e);
  };

  render() {
    return (
      <div id="historycontainer">
        <a
          value="1"
          onClick={e => {
            this.handleClick(1);
          }}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 1
        </a>
        <a
          onClick={this.handleClick}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 4
        </a>
        <a
          onClick={this.handleClick}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 3
        </a>
        <a
          onClick={this.handleClick}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 2
        </a>
        <a
          onClick={this.handleClick}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 5
        </a>
        <a
          onClick={this.handleClick}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 6
        </a>
        <a
          onClick={this.handleClick}
          id="history_meeting"
          className="button is-success"
        >
          Meeting 7
        </a>
      </div>
    );
  }
}

export default HistoricMeetings;
