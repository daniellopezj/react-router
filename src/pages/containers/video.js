import React, { Component } from "react";
import { connect } from "react-redux";
import PagenotFound from "../components/not-found";
import VideoPlayer from "../../player/containers/video-player";

class Video extends Component {
  render() {
    if (this.props.existId) {
      return <VideoPlayer id={this.props.id} />;
    }
    return <PagenotFound />;
  }
}
function mapStateToProps(state, props) {
  const id = props.match.params.id;
  return {
    existId: state.get("data").get("entities").get("media").has(id),
    id: id,
  };
}

export default connect(mapStateToProps)(Video);
