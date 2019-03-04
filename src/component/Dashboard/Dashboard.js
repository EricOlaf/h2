import React, { Component } from "react";
import axios from "axios";
import EachPost from "./EachPost/EachPost";
import OnePost from "./OnePost/OnePost";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      selectedPost: {},
      showPost: "off",
      name: ""
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
    axios.delete(`/api/dahsboard/delete${id}`).then(res => {
      this.setState({ posts: res.data });
    });
  };

  editHandler = id => {};

  render() {
    let { posts, selectedPost, showPost, name, userID } = this.state;
    console.log(this.props);
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

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Dashboard);
