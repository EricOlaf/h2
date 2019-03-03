import React, { Component } from "react";
import axios from "axios";
import EachPost from "./EachPost/EachPost";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get("/api/dashboard/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    let { posts } = this.state;
    console.log(posts);
    return (
      <div>
        Dashboard
        <EachPost posts={posts} />
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
