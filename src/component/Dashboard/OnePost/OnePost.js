import React, { Component } from "react";
import "./OnePost.css";

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

  changedTitleHAndler() {}
  changedContentHandler() {}
  render() {
    let { title, content, author_id, id } = this.props.post;
    let { showPost, edit, show } = this.props;
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
          <input value={this.state.changedTitle} />
          <p>{content}</p>
          <input value={this.state.changedContent} />
          <br />
          <p>{author_id}</p>
          <button
            onClick={() => {
              edit(id);
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
