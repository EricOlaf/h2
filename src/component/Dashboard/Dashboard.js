import React, { Component } from "react";
import axios from "axios";
import EachPost from "./EachPost/EachPost";
import OnePost from "./OnePost/OnePost";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      selectedPost: {},
      showPost: "off"
    };
  }
  componentDidMount() {
    axios.get("/api/dashboard/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  selectPostHandler = p => {
    let postCopy = { ...p };
    this.setState({ selectedPost: postCopy, showPost: "on" });
  };

  showHandler = () => {
    this.setState({ showPost: "off" });
  };

  deleteHandler = id => {
    console.log(id);
    axios.delete(`/api/dahsboard/delete${id}`).then(res => {
      this.setState({ posts: res.data });
    });
  };

  editHandler = id => {
    console.log(id);
  };

  render() {
    let { posts, selectedPost, showPost } = this.state;
    console.log(posts, selectedPost, showPost);
    return (
      <div className="dashboard">
        Dashboard
        <EachPost
          posts={posts}
          selectPost={this.selectPostHandler}
          delete={this.deleteHandler}
        />
        <OnePost
          post={selectedPost}
          showPost={showPost}
          show={this.showHandler}
          edit={this.editHandler}
        />
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
