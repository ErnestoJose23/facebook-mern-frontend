import { Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import "./Feed.css";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { DomainDisabled } from "@material-ui/icons";

function MessageSender() {
  const { userData, setUserData } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    var imagename = "";
    if (file != null) {
      var imagename = Date.now();
    }
    const displayName = userData.user;
    const user_id = userData.user_id;

    var objToday = new Date(),
      curHour =
        objToday.getHours() > 12
          ? objToday.getHours() - 12
          : objToday.getHours() < 10
          ? "0" + objToday.getHours()
          : objToday.getHours(),
      curMinute =
        objToday.getMinutes() < 10
          ? "0" + objToday.getMinutes()
          : objToday.getMinutes(),
      curSeconds =
        objToday.getSeconds() < 10
          ? "0" + objToday.getSeconds()
          : objToday.getSeconds(),
      curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    var dd = String(objToday.getDate()).padStart(2, "0");
    var mm = String(objToday.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = objToday.getFullYear();
    var timestamp =
      curHour +
      ":" +
      curMinute +
      ":" +
      curSeconds +
      " " +
      curMeridiem +
      " " +
      dd +
      "/" +
      mm +
      "/" +
      yyyy;

    console.log(timestamp);
    const FeedData = {
      displayName,
      imagename,
      timestamp,
      user_id,
      file,
      title,
    };

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const FeedRes = Axios.post("http://localhost:5000/feed/upload", FeedData);
    const FeedResImg = Axios.post(
      "http://localhost:5000/feed/uploadImg",
      formData,
      {
        headers: {
          path: imagename,
        },
      }
    );

    setTitle("");
    setFile("");
    imagename = "";
    history.push("/");
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
            name="title"
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
