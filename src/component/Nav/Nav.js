import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Nav = props => {
  return (
    <div>
      <Link to="/dashboard">Home</Link>
      <Link to="/form">New Post</Link>
      <Link to="/">Logout</Link>
    </div>
  );
};

export default withRouter(Nav);
