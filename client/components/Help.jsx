import React from "react";
import Navbar from "./Navbar";

class Help extends React.Component {
  render() {
    return (
      <div>
        <div id="history_nav">
          <div id="Help_content" class="columns">
            <Navbar />
          </div>
        </div>
        <section id="hero_history" className="hero is-primary">
          <div id="hero_body" className="hero-body">
            <div className="container">
              <h1 className="title">About</h1>
              <h2 className="subtitle">See about</h2>
            </div>
          </div>
        </section>
        <div id="help_box">
          <p id="Help_body">
            Meetings are expensive, but sometimes we forget how expensive they
            are and feel the need to talk for too long about topics that are
            unimportant for the meeting purpose. This is an app to display the
            costs of meetings, and track the costs of your meetings over time.
            The idea of the App is to be able to display the real-time cost of a
            meeting as it occurs. This cost is calculated based on the hourly
            wages of the meeting's attendees and the current duration of the
            meeting. The intended effect of this App is to make meeting
            attendees aware of how much this time is costing the business.
          </p>
        </div>
      </div>
    );
  }
}

export default Help;
