import React from "react";

class Help extends React.Component {
  render() {
    return (
      <div id="Help_content" className="content">
        <h1 id="Help_head" className="title is-2">
          About
        </h1>
        <hr />

        <p id="Help_body">
          Meetings are expensive, but sometimes we forget how expensive they are
          and feel the need to talk for too long about topics that are
          unimportant for the meeting purpose. This is an app to display the
          costs of meetings, and track the costs of your meetings over time. The
          idea of the App is to be able to display the real-time cost of a
          meeting as it occurs. This cost is calculated based on the hourly
          wages of the meeting's attendees and the current duration of the
          meeting. The intended effect of this App is to make meeting attendees
          aware of how much this time is costing the business.
        </p>
      </div>
    );
  }
}

export default Help;
