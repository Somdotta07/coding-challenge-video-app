import React from "react";

function CommentList(props) {
    const comments = props.comments;
    const commentList = comments.map(comment => {
        return <div className="comment-list" key={comment.key}>
            <p className="comment-text">{comment.text}</p>
        </div>
    })
    return (
        <div  className="mt-2">{commentList}</div>
    )
    
}

export default CommentList;