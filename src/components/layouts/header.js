import React, { useState, useContext, useEffect } from "react";
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
import { Link, useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import UserContext from "../../context/UserContext";
import MenuItem from "@material-ui/core/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { userData, setUserData } = useContext(UserContext);
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/login");
  };

  useEffect(() => {
    console.log(userData.avatar);
  }, []);

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
        <div className=" home_icon">
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

          <Avatar
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="header_avatar"
            src={userData.avatar}
          ></Avatar>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="header_menu"
          >
            <MenuItem onClick={handleClose}>{userData.user}</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
