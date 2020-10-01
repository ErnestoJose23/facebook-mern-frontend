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
  user_id_post,
  displayName,
  timestamp,
  title,
  imagename,
  post_id,
  comments,
}) {
  const [user, setUser] = useState([]);
  const [commentsPost, setCommentsPost] = useState(comments);

  const [img, setImg] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentNuevo, setCommentNuevo] = useState();
  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUser/${user_id_post}`).then(
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
    setCommentsPost(comments);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = user._id;
    const comment = newComment;
    const CommentData = {
      user_id,
      post_id,
      displayName,
      comment,
    };

    const FeedRes = Axios.post(
      "http://localhost:5000/comment/uploadComment",
      CommentData
    );

    setCommentsPost([...commentsPost, CommentData]);
    setNewComment("");
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

      {commentsPost.map((comment) => (
        <Comment key={comment._id} comments={comment} />
      ))}

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
