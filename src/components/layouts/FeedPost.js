import { Avatar } from "@material-ui/core";
import React from "react";
import "./Feed.css";

function FeedPost({ displayName, timestamp, title, imagename }) {
  return (
    <div className="feedpost">
      <div className="post_top">
        <Avatar className="post_avatar" />
        <div className="post_topInfo">
          <p>{displayName}</p>
          <span>{timestamp}</span>
        </div>
      </div>

      <div className="post_bottom">
        <span>{title}</span>
      </div>

      <div className="post_image">
        <img src="https://www.40defiebre.com/wp-content/uploads/2015/02/blogging.png" />
      </div>
    </div>
  );
}

export default FeedPost;
