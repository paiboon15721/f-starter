import React, { useState } from "react";
import Header from "./Header";
import CommentItem from "./CommentItem";

const CommentApp = props => {
  const [currentComment, setCurrentComment] = useState("");

  const handleCommentChange = e => {
    setCurrentComment(e.target.value);
  };

  const handleSubmit = () => {
    props.setComments([currentComment, ...props.comments]);
    setCurrentComment("");
  };

  return (
    <div className="container">
      <Header />
      <textarea
        className="form-control mb-3"
        rows="3"
        onChange={handleCommentChange}
        value={currentComment}
      ></textarea>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>

      {props.comments.map((v, k) => (
        <CommentItem key={k} comment={v} />
      ))}
    </div>
  );
};

export default CommentApp;
