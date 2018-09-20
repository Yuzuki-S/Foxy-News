import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

class LoginNav extends React.Component {
  render() {
    return (
      <div id="App_firstcontainer" className="container has-text-centered">
        <section id="App_video" class="hero is-fullheight video">
          <div class="hero-video">
            <video id="bgvid" playsInline autoPlay muted loop>
              <source src="./video.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <div id="App_Hero" className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 id="App_title" className="title is-1">
                $how Me The Money
              </h1>
            </Link>
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginNav;
