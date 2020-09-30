import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Axios from "axios";
import Comment from "./Comment";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

function FeedPost({
  user_id,
  displayName,
  timestamp,
  title,
  imagename,
  post_id,
}) {
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState("");
  const [img, setImg] = useState([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUser/${user_id}`).then(
      (response) => {
        setUser(response.data);
      }
    );
    Axios.get(`http://localhost:5000/comment/getComments/${post_id}`).then(
      (response) => {
        setComments(response.data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id_comment = user._id;
    const CommentData = {
      user_id_comment,
      post_id,
      displayName,
      newComment,
    };

    const FeedRes = Axios.post(
      "http://localhost:5000/comment/uploadComment",
      CommentData
    );

    console.log(comments);
  };

  return (
    <div className="feedpost">
      <div className="post_top">
        <Avatar src={user.avatar} className="post_avatar" />
        <div className="post_topInfo">
          <p>{user.displayName}</p>
          <span>{timestamp}</span>
        </div>
        <div className="post_right">
          <MoreHorizOutlinedIcon />
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
      {comments != [] ? (
        comments.map((comment) => (
          <Comment
            key={comment._id}
            user_id={comment.user_id}
            feed_id={comment.feed_id}
            displayName={comment.displayName}
            comment={comment.comment}
          />
        ))
      ) : (
        <div></div>
      )}

      <div className="post_comment">
        <Avatar src={user.avatar} />
        <form className="comment_form">
          <input
            type="text"
            className="comment_input"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            name="title"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="messageSender_button"
          ></button>
        </form>
      </div>
    </div>
  );
}

export default FeedPost;
