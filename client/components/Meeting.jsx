import React from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';

//Meeting data

function Meeting(props) {
  return (
    <div className="container">
      <h2 className="title is-2">This is the meeting summary</h2>
    </div>
  );
}

export default connect()(Meeting);
