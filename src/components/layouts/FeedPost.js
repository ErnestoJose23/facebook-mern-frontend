import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Axios from "axios";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

function FeedPost({ user_id, displayName, timestamp, title, imagename }) {
  const [user, setUser] = useState([]);
  const [img, setImg] = useState([]);
  const [comment, setComment] = useState("");
  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUser/${user_id}`).then(
      (response) => {
        setUser(response.data);
      }
    );
    if (imagename != "") {
      Axios.get(`http://localhost:5000/feed/getImg/${imagename}`).then(
        (response) => {
          setImg(response.data);
        }
      );
    }
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
      {img.image ? (
        <div className="post_image">
          <img src={`data:image/jpeg;base64,${img.image}`} />
        </div>
      ) : (
        <div></div>
      )}
      <div className="separador_post"></div>
      <div className="post_actions">
        <div className="post_option">
          <ThumbUpAltOutlinedIcon />
          Like
        </div>
        <div className="post_option">
          <ChatBubbleOutlineOutlinedIcon />
          Comment
        </div>
        <div className="post_option">
          <ShareOutlinedIcon />
          Share
        </div>
      </div>
      <div className="separador_post"></div>
      <div className="post_comment">
        <Avatar src={user.avatar} />

        <input
          type="text"
          className="messageSender_input"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="title"
        />
      </div>
    </div>
  );
}

export default FeedPost;
