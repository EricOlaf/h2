import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Nav.css";

const Nav = props => {
  return (
    <div className="navAll">
      <div className="navTop">
        <img src="" alt="" />
        <Link to="/dashboard">
          <div className="navButton">
            {" "}
            <div>HOME</div>
          </div>
        </Link>
        <Link to="/new">
          <div className="navButton">
            {" "}
            <div>NEW POST</div>
          </div>
        </Link>
      </div>
      <div className="NavBottom">
        <Link to="/">
          <div className="navButton">
            {" "}
            <div>LOGOUT</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Nav);
