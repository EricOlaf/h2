import React, { Component } from "react";

import routes from "./route";

import Nav from "../src/component/Nav/Nav";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="App">{routes}</div>
      </div>
    );
  }
}

export default App;
