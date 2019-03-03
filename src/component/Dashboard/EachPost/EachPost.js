import React from "react";
import "./EachPost.css";

function EachPost(props) {
  let postList = props.posts.map(p => {
    return (
      <div key={p.id} className="eachPost">
        <h1
          onClick={() => {
            props.selectPost(p);
          }}
        >
          {p.title}
        </h1>
        <p>{p.content}</p>
        <button
          onClick={() => {
            props.delete(p.id);
          }}
        >
          DELETE
        </button>
      </div>
    );
  });
  return <div className="allPosts">{postList}</div>;
}

export default EachPost;
