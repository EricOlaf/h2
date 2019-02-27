import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { handleUser } from "../../ducks/reducer";

import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  loginHandler = () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(user);
    axios
      .post("/api/auth/login", user)
      .then(res => {
        // console.log(res);
        this.props.handleUser(
          res.data.id,
          res.data.username,
          res.data.profilepic
        );
      })
      .then(() => this.props.history.push("/dashboard"));
  };
  registerHandler = () => {
    const { username, password } = this.state;
    let user = {
      username,
      password
    };
    axios
      .post("/api/auth/login", user)
      .then(res => {
        // console.log(res);
        this.props.handleUser(
          res.data.id,
          res.data.username,
          res.data.profilepic
        );
      })
      .then(() => this.props.history.push("/dashboard"));
  };

  render() {
    // let { username, password } = this.state;
    return (
      <div className="authAll">
        <div className="authBox">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzNNf3sZqypfnudwwzpRqunqGKXL9QPPPP4_rNupptgYtvQ9idg"
            alt=""
          />
          <div className="authName">Helo</div>
          <div className="inputs">
            <div className="">Username:</div>
            <input
              placeholder="Name"
              type="text"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div className="inputs">
            <div className="">Username:</div>
            <input
              placeholder="Password"
              type="text"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <button className="" onClick={() => this.loginHandler()}>
              Login
            </button>
            <button className="" onClick={() => this.registerHandler()}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { handleUser }
  )(Auth)
);
