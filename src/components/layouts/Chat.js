import React from "react";
import "./Chat.css";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Chat() {
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
    </div>
  );
}

export default Chat;
