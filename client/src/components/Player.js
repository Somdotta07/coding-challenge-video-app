import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

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
        <div className="container ">
          <div className="d-flex  row">
            <div className="col-md-10 left">
              <div className="d-flex flex-column comment-section">
                <div className="bg-white p-2">
                  <div className="d-flex flex-row user-info">
                    <div className="d-flex flex-column justify-content-start ml-2">
                      <span className="d-block font-weight-bold name">
                        <h1>{this.state.videoData.name}</h1>
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <video controls muted autoPlay crossOrigin="anonymous">
                      <source
                        src={`http://localhost:8000/video/${this.state.videoId}`}
                        type="video/mp4"
                      ></source>
                    </video>
                  </div>
                </div>
                <div className="bg-white">
                  <div className="d-flex flex-row fs-12">
                    <div className="like p-2 cursor">
                      <i className="fa fa-thumbs-o-up"></i>
                      <span className="ml-1">Like</span>
                    </div>
                    <div className="like p-2 cursor">
                      <i className="fa fa-commenting-o"></i>
                      <span className="ml-1">Comment</span>
                    </div>
                    <div className="like p-2 cursor">
                      <i className="fa fa-share"></i>
                      <span className="ml-1">Share</span>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-2">
                  <div className="d-flex flex-row align-items-start">
                    <Toggle />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 right">
              <div
                className="single__suggestion d__flex"
                style={{
                  padding: "10px 20px",
                }}
              >
                <div className="thumb__img relative d__flex">
                  <iframe
                    src={`http://localhost:8000/video/3`}
                    alt=""
                    className="thumb__img pointer"
                    frameborder="0" sandbox=""
                  />
                </div>
              </div>

              <div
                className="single__suggestion d__flex"
                style={{
                  padding: "10px 20px",
                }}
              >
                <div className="thumb__img relative d__flex">
                  <iframe
                    src={`http://localhost:8000/video/1`}
                    alt=""
                    className="thumb__img pointer"
                    frameborder="0" sandbox=""
                  />
                </div>
              </div>
              <div
                className="single__suggestion d__flex"
                style={{
                  padding: "10px 20px",
                }}
              >
                <div className="thumb__img relative d__flex">
                  <iframe
                    src={`http://localhost:8000/video/4`}
                    alt=""
                    className="thumb__img pointer"
                    frameborder="0" sandbox=""
                  />
                </div>
              </div>
              <div
                className="single__suggestion d__flex"
                style={{
                  padding: "10px 20px",
                }}
              >
                <div className="thumb__img relative d__flex">
                  <iframe
                    src={`http://localhost:8000/video/5`}
                    alt=""
                    className="thumb__img pointer"
                    frameborder="0" sandbox=""
                  />
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
