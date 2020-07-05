import React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="" to="/">
          <img src="/kurves_logo.jpg" width="112" height="28" />
        </Link>
        <a className="navbar-burger burger" aria-label="menu" role="button" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/aboutyoga">
            About Yoga
          </Link>
          <Link className="navbar-item" to="/aboutus">
            About Us
          </Link>
          <Link className="navbar-item" to="/contactus">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};