import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import History from './History';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Home from './Home';

const App = ({ auth }) => (
  <Router>
    <div>
      <div className="">
        {!auth.isAuthenticated ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Route exact path="/" component={Main} />
        )}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={(Header, Register)} />
        <Route path="/history" component={History} />
      </div>
    </div>
  </Router>
);

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
