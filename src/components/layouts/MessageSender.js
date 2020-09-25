import { Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "./Feed.css";
import UserContext from "../../context/UserContext";
import Axios from "axios";

function MessageSender() {
  const { userData, setUserData } = useContext(UserContext);
  const [title, setTitle] = useState();
  const [file, setFile] = useState();

  const [error, setError] = useState();

  function addPost(postdetail) {
    const FeedRes = Axios.post(
      "http://localhost:5000/feed/upload",
      postdetail,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = userData.user;
    const user_id = userData.user_id;
    const formData = new FormData();
    if (file != undefined) {
      formData.append("file", file[0]);
    }
    const newFeed = {
      displayName,
      user_id,
      title,
      formData,
    };
    console.log(newFeed);
    addPost(newFeed);
    setTitle("");
    setFile("");
  };

  return (
    <div className="messageSender">
      <form>
        <div className="messageSender_top">
          <Avatar src={userData.avatar} />

          <input
            type="text"
            className="messageSender_input"
            placeholder={`What's on your mind, ${userData.user} `}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="separador"></div>
        <div className="messageSender_bottom">
          <div className="messageSender_option">
            <label for="file-upload" className="label-file">
              <div className="messageSender_icon messageSender_photo"></div>
              <h4>Photo/Video</h4>
            </label>
            <input
              id="file-upload"
              type="file"
              className="inputFile"
              onChange={(e) => setFile(e.target.files[0])}
            />
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
        <button
          onClick={handleSubmit}
          type="submit"
          className="messageSender_button"
        ></button>
      </form>
    </div>
  );
}

export default MessageSender;
