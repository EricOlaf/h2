import React, { Component } from "react";
import "./OnePost.css";
import axios from "axios";

class OnePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changedTitle: "",
      changedContent: ""
    };
    this.changedContentHandler = this.changedContentHandler.bind(this);
    this.changedTitleHAndler = this.changedTitleHAndler.bind(this);
  }

  changedTitleHAndler(input) {
    this.setState({ changedTitle: input });
  }
  changedContentHandler(input) {
    this.setState({ changedContent: input });
  }

  editPostHandler = id => {
    axios.put(`/api/posts/edit${id}`, this.state).then(() => {
      this.props.show();
    });
  };
  render() {
    let { title, content, author_id, id } = this.props.post;
    let { showPost, show } = this.props;
    return (
      <div className="opAll">
        <div className={showPost}>
          <div
            className="exit"
            onClick={() => {
              show();
            }}
          >
            X
          </div>
          <h1>{title}</h1>
          <input
            placeholder="Change The Title"
            value={this.state.changedTitle}
            onChange={e => {
              this.changedTitleHAndler(e.target.value);
            }}
          />
          <p>{content}</p>
          <input
            placeholder="Change The Content"
            value={this.state.changedContent}
            onChange={e => {
              this.changedContentHandler(e.target.value);
            }}
          />
          <br />
          <p>{author_id}</p>
          <button
            onClick={() => {
              this.editPostHandler(id);
            }}
          >
            EDIT
          </button>
        </div>
      </div>
    );
  }
}

export default OnePost;
