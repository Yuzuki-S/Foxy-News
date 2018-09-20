//History
import React from "react";
import Navbar from "./Navbar";

class History extends React.Component {
  render() {
    return (
      <div>
        <div id="Help_content" class="columns">
          <Navbar />
        </div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">History</h1>
              <h2 className="subtitle">See historical meetings and costs</h2>
            </div>
          </div>
        </section>

        <div id="history_container" className="container">
          <div id="h_left">Left</div>
          <div id="h_right">Right</div>
        </div>
      </div>
    );
  }
}

export default History;
