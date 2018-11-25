import React from 'react';
import Header from './Header';
import ArticlewithFox from './ArticlewithFox';

class Home extends React.Component {
  render() {
    return (
      <div id="LoginNav_firstcontainer" className="container has-text-centered">
        <div id="home_Hero">
          <Header />
          <div>
            <h1 id="home_title">BREAKING NEWS!</h1>
            <ArticlewithFox />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
