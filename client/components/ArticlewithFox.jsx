import React from 'react';
import { connect } from 'react-redux';

class ArticlewithFox extends React.Component {
  render() {
    return (
      <div>
        <div>Image here</div>
        <div>Article here</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(ArticlewithFox);
