import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class LoginNav extends React.Component {
  render() {
    return (
      <div className="hero-body has-text-centered">
        <Link to="/">
          <h1 id="LoginNav_title" className="title is-1">
            Foxy News
          </h1>
        </Link>
        <div id="LoginNav_subhead">
          Wellington, New Zealand - Monday November 5, 2018 - Project
        </div>

        <Nav />
      </div>
    );
  }
}

export default LoginNav;
