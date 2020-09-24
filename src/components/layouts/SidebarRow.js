import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function SidebarRow({ title, src, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="sidebar_icon" />}
      <p className="sidebar_title">{title}</p>
    </div>
  );
}

export default SidebarRow;
