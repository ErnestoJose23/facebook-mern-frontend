import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import "./Feed.css";

function Comment({ comments }) {
  const [usercomment, setUsercomment] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUser/${comments.user_id}`).then(
      (response) => {
        setUsercomment(response.data);
      }
    );
    console.log(comments);
  }, []);

  return (
    <div className="comment">
      {usercomment ? (
        <Avatar src={usercomment.avatar} className="post_avatar" />
      ) : (
        <div></div>
      )}
      <div className="comentario">
        <span>{comments.displayName}</span>
        <p>{comments.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
