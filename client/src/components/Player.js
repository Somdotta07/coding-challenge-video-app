import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.match.params.id,
      videoData: {},
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(
        `http://localhost:8000/video/${this.state.videoId}/data`,
      );
      const data = await res.json();
      this.setState({ videoData: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App-header">
        <Header />
        <video controls muted autoPlay crossOrigin="anonymous">
          <source
            src={`http://localhost:8000/video/${this.state.videoId}`}
            type="video/mp4"
          ></source>
        </video>
        <h1>{this.state.videoData.name}</h1>
<div class="container mt-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="d-flex flex-column comment-section">
                <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info">
                        <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">User</span><span class="date text-black-50">Date</span></div>
                    </div>
                    <div class="mt-2">
                        <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                    </div>
                </div>
                <div class="bg-light p-2">
                    <div class="d-flex flex-row align-items-start"><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                    <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
        <Footer />
      </div>
    );
  }
}
