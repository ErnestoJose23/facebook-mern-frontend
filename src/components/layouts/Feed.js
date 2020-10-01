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
          key={post._id}
          user_id_post={post.user_id}
          post_id={post._id}
          displayName={post.displayName}
          title={post.title}
          imagename={post.imagename}
          timestamp={post.timestamp}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default Feed;
