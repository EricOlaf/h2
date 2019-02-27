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
          <img
            src="https://www.iconsdb.com/icons/preview/white/home-5-xxl.png"
            alt=""
          />
        </Link>
        <Link to="/form">
          <img
            src="https://www.iconsdb.com/icons/preview/white/child-new-post-xxl.png"
            alt=""
          />
        </Link>
      </div>
      <div className="NavBottom">
        <Link to="/">
          <img
            className="logoutButton"
            src="https://www.iconsdb.com/icons/preview/white/account-logout-xxl.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Nav);
