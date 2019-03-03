import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    };
  }

  contentHandler = input => {
    this.setState({ content: input });
  };

  titleHandler = input => {
    this.setState({ title: input });
  };

  submitHandler = () => {
    let { title, content } = this.state;
    let id = 1;
    const post = [title, content, id];

    axios
      .post("/api/newpost", post)
      .then(this.setState({ title: "", content: "" }));
  };
  render() {
    let { title, content } = this.state;
    return (
      <div className="form">
        <div className="inner">
          <h1>New PosT</h1>
          <h3>Title:</h3>
          <input
            value={title}
            onChange={e => {
              this.titleHandler(e.target.value);
            }}
          />
          <h3>Title:</h3>
          <textarea
            value={content}
            onChange={e => {
              this.contentHandler(e.target.value);
            }}
          />
          <button onClick={this.submitHandler}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Form;
