import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class LoginNav extends React.Component {
  render() {
    return (
      <div id="LoginNav_firstcontainer" className="container has-text-centered">
        <div id="LoginNav_Hero">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 id="LoginNav_title" className="title is-1">
                Foxy News
              </h1>
              <div id="LoginNav_subhead">
                Wellington, New Zealand - Monday November 5, 2018 - Project
              </div>
            </Link>
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginNav;
