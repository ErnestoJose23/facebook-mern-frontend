import { Avatar } from "@material-ui/core";
import React from "react";

function Story({ img, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${img})` }}>
      <Avatar src={profileSrc} className="story_avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
