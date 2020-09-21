import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/">
          <img
            className="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          />
        </Link>
        <div className="header_input">
          <SearchIcon />

          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option">
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div className="header_option">
          <OndemandVideoIcon />
        </div>
        <div className="header_option">
          <StorefrontIcon />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon />
        </div>
        <div className="header_option">
          <VideogameAssetIcon />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <div className="header_right_info">Create</div>
          <div className="header_right_info">
            <WhatsAppIcon fontSize="small" />
          </div>
          <div className="header_right_info">
            <NotificationsIcon fontSize="small" />
          </div>
          <Avatar></Avatar>
        </div>
      </div>
    </div>
  );
}

export default header;
