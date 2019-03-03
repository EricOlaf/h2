import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get("/api/dashboard/posts").then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        Dashboard
        <div>Need to bring in all the data</div>
      </div>
    );
  }
}

export default Dashboard;

//Make a list of all the different posts

//Search feature and find a post

//Allow someone to write a post

//Allow someone to put a picture in a post

//Login and logout

//Reset button for search posts
