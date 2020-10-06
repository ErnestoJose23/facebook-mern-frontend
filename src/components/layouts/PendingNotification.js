import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./header.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function PendingNotification(pending) {
  const classes = useStyles();
  const history = useHistory();

  const acceptRequest = (e) => {
    e.preventDefault();
    const user1_id = pending.pending.sender_id;
    const user2_id = pending.pending.receiver_id;
    const FriendRequest_id = pending.pending._id;
    const requestData = {
      user1_id,
      user2_id,
      FriendRequest_id,
    };

    console.log(requestData);

    const RequestRes = Axios.post(
      "http://localhost:5000/friendrequest/acceptrequest",
      requestData
    );
    const AddFriend_ = Axios.post(
      `http://localhost:5000/friendrequest/addFriend/${pending.pending.sender_id}/${pending.pending.receiver_id}`
    );
    const AddFriend__ = Axios.post(
      `http://localhost:5000/friendrequest/addFriend/${pending.pending.receiver_id}/${pending.pending.sender_id}`
    );

    history.push("/");
  };
  return (
    <div className="pendingnotificationall">
      <div className="pendingnotification">
        <Avatar src={pending.pending.avatar} className={classes.large} />
        <div className="FriendRquest">
          <strong>{pending.pending.senderName}</strong>{" "}
          <span>sent you a friend request. </span>
        </div>
      </div>
      <div className="request_actions">
        <Button
          variant="contained"
          color="primary"
          className="request_button"
          onClick={acceptRequest}
        >
          Confirm
        </Button>
        <Button variant="contained">Delete</Button>
      </div>
    </div>
  );
}

export default PendingNotification;
