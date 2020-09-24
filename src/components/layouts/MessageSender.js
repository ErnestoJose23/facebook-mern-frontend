import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import "./Feed.css";
import UserContext from "../../context/UserContext";

function MessageSender() {
  const { userData, setUserData } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
            type="text"
            className="messageSender_input"
            placeholder={`What's on your mind, ${userData.user} `}
          />
          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>
      <div className="separador"></div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <div className="messageSender_icon messageSender_photo"></div>
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender_option">
          <div className="messageSender_icon messageSender_friend"></div>
          <h4>Tag Friends</h4>
        </div>
        <div className="messageSender_option">
          <div className="messageSender_icon messageSender_activity"></div>
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
