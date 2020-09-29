import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Axios from "axios";

function FeedPost({ user_id, displayName, timestamp, title, imagename }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUser/${user_id}`).then(
      (response) => {
        setUser(response.data);
      }
    );
  }, []);
  return (
    <div className="feedpost">
      <div className="post_top">
        <Avatar src={user.avatar} className="post_avatar" />
        <div className="post_topInfo">
          <p>{user.displayName}</p>
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
