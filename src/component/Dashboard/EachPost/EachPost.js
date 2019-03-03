import React from "react";
import "./EachPost.css";

function EachPost(props) {
  let postList = props.posts.map(p => {
    return (
      <div key={p.id} className="eachPost">
        <h1>{p.title}</h1>
        <p>{p.content}</p>
      </div>
    );
  });
  return <div className="allPosts">{postList}</div>;
}

export default EachPost;
