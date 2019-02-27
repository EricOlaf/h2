import React, { Component } from "react";
import logo from "./logo.svg";
import { HashRouter } from "react-router-dom";
import routes from "./route";

import Nav from "../src/component/Nav/Nav";

import "./App.css";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {this.props.location.pathname === "/" ? null : <Nav />}
          <div className="App">{routes}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
