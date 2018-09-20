import React from 'react';
import { connect } from 'react-redux';
import { getMeeting } from '../actions/meetings';

class HistoricMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

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

const mapStateToProps = state => {
  return {
    meetings: state
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
)(HistoricMeeting);
