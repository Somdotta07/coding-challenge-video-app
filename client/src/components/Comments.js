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
        <form id="comments" onSubmit={this.addComment}>
          <input
            type="text"
            placeholder=" Enter your comment"
            value={this.state.currentComment.text}
            onChange={this.handleInput}
          />
          <button type="submit" className="btn btn-primary btn-sm shadow-none">
            Post
          </button>
        </form>

        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
