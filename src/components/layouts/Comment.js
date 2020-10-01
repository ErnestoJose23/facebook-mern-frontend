import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Avatar } from "@material-ui/core";
import "./Feed.css";

function Comment({ user_id, feed_id, displayName, comment, commentNuevo }) {
  const [usercomment, setUsercomment] = useState();

  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUser/${user_id}`).then(
      (response) => {
        setUsercomment(response.data);
      }
    );
    console.log(commentNuevo);
  }, [commentNuevo]);

  return (
    <div className="comment">
      {usercomment ? (
        <Avatar src={usercomment.avatar} className="post_avatar" />
      ) : (
        <div></div>
      )}
      <div className="comentario">
        <span>{displayName}</span>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
