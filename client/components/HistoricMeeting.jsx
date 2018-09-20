import React from "react";

class HistoricMeeting extends React.Component {
  render() {
    return (
      <div id="historycontainer">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Meeting Details:</p>
            <p className="subtitle">
              <i className="fas fa-arrow-left" /> Select a meeting from the left
            </p>
            <div className="content" />
          </article>
        </div>
      </div>
    );
  }
}

export default HistoricMeeting;
