import React from 'react';
import Header from './Header';
import ArticlewithFox from './ArticlewithFox';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Breaking News!
        <ArticlewithFox />
      </div>
    );
  }
}

export default Home;
