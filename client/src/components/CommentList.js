import React from "react";

function CommentList(props) {
  const comments = props.comments;
  const commentList = comments.map((comment) => {
    return (
      <div className="comment-list" key={comment.key}>
        <p className="comment-text">{comment.text}</p>
      </div>
    );
  });
  return (
    <div className="d-flex justify-content-center py-2">
      <div className="second py-2 px-2">
      <p>Comments</p>
        <span className="text1">{commentList}</span>
      </div>
    </div>
  );
}

export default CommentList;
