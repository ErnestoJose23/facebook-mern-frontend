import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";

function header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
        <div className="header_input">
          <SearchIcon />
        </div>
      </div>
      <div className="header_middle">middle</div>
      <div className="header_right">right</div>
    </div>
  );
}

export default header;
