import React, { Component } from "react";
import CommentList from "./CommentList";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentComment: {
        text: "",
        key: "",
      },
    };
       this.handleInput = this.handleInput.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentComment: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addComment(e) {
    e.preventDefault();
    const newComment = this.state.currentComment;
    if (newComment.text !== "") {
      const newComments = [...this.state.comments, newComment];
      this.setState({
        comments: newComments,
        currentComment: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div>
        <div className="comment-c">
          <form id="comments" onSubmit={this.addComment}>
            <textarea
              className="form-control ml-5 shadow-none textarea"
              type="text"
              placeholder=" Enter your comment"
              value={this.state.currentComment.text}
              onChange={this.handleInput}
            />

            <div className="mt-2 text-right">
              <button
                className="btn btn-primary btn-sm shadow-none"
                type="submit"
              >
                Post comment
              </button>
            </div>
          </form>

          <CommentList comments={this.state.comments} />
        </div>
      </div>
    );
  }
}
