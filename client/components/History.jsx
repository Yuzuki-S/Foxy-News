import React from "react";
import Navbar from "./Navbar";
import HistoricMeetings from "./HistoricMeetings";
import HistoricMeeting from "./HistoricMeeting";
import TheMeetingDetails from "./TheMeetingDetails";
import { connect } from "react-redux";

import { getMeeting } from "../actions/meetings";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDetails: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getMeeting(1);
  }

  handleClick() {
    this.setState(prevState => ({
      viewDetails: !prevState.viewDetails
    }));
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
            <HistoricMeetings handleClick={this.handleClick} />
          </div>
          <div id="h_right">
            {this.state.viewDetails && <HistoricMeeting />}
            {!this.state.viewDetails && (
              <TheMeetingDetails meeting={this.props.meetings} />
            )}
          </div>
        </div>
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
)(History);
