import React, { useState, useEffect, useContext } from "react";
import "./Chat.css";
import UserContext from "../../context/UserContext";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Axios from "axios";
import { Avatar } from "@material-ui/core";

function Chat() {
  const { userData, setUserData } = useContext(UserContext);
  const [friends, setFriends] = useState();
  useEffect(() => {
    Axios.get(
      `http://localhost:5000/users/getFriends/${userData.user_id}`
    ).then((response) => {
      setFriends(response.data);
    });
    console.log("aqui");
    console.log(friends);
  }, [userData]);

  return (
    <div className="chat">
      <div className="chat_top">
        <h4>Contacts</h4>
        <div className="iconsChat">
          <VideoCallIcon className="iconChat" />
          <SearchIcon className="iconChat" />
          <MoreHorizIcon className="iconChat" />
        </div>
      </div>
      {friends ? (
        <div className="chat_friends">
          {friends.friends.map((friend) => (
            <div className="chat_friend">
              <Avatar src={friend.avatar} />
              <div className="chat_friend_name">{friend.displayName}</div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Chat;
