import React from "react";
import Navbar from "./Navbar";
import HistoricMeetings from "./HistoricMeetings";
import HistoricMeeting from "./HistoricMeeting";

class History extends React.Component {
  constructor(props) {
    super(props);
  }
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
              <h1 className="title">History</h1>
              <h2 className="subtitle">See historical meetings and costs</h2>
            </div>
          </div>
        </section>

        <div id="history_container" className="container">
          <div class="slide-fwd-center" id="h_left">
            <h1 id="title_history" className="subtitle">
              Historical Meetings
            </h1>
            <HistoricMeetings />
          </div>
          <div id="h_right">
            <HistoricMeeting />
          </div>
        </div>
      </div>
    );
  }
}

export default History;
