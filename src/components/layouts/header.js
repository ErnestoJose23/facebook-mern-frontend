import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import { Avatar, IconButton } from "@material-ui/core";

function header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
        <div className="header_input">
          <SearchIcon />

          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <OndemandVideoIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        <div className="header_option">
          <VideogameAssetIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <div className="header_option">Create</div>
          <div className="header_option">
            <IconButton>
              <ChatIcon />
            </IconButton>
          </div>
          <div className="header_option">
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </div>
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
}

export default header;
