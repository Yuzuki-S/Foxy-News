import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "./Nav";
import History from "./History";
import MainLayout from "./MainLayout";

import Login from "./Login";
import Register from "./Register";
import LoginNav from "./LoginNav";
// import Meeting from "./Meeting";
import Help from "./Help";

const App = ({ auth }) => (
  <Router>
    <div>
      <div className="">
        {!auth.isAuthenticated && <Route exact path="/" component={LoginNav} />}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={(LoginNav, Register)} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/home" component={MainLayout} />
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
