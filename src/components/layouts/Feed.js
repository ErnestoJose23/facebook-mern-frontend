import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "../storyReel/StoryReel";
import MessageSender from "./MessageSender";
import FeedPost from "./FeedPost";

function Feed({ posts }) {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <FeedPost
          user_id={post.user_id}
          displayName={post.displayName}
          title={post.title}
          imagename={post.imagename}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
