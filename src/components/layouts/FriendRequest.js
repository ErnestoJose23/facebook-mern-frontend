import { Avatar } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import UserContext from "../../context/UserContext";
import Axios from "axios";

function FriendRequest(person) {
  const { userData, setUserData } = useContext(UserContext);
  const [relation, setRelation] = useState([]);

  useEffect(() => {
    Axios.get(
      `http://localhost:5000/friendrequest/sync/${userData.user_id}/${person.person._id}`
    ).then((response) => {
      setRelation(response.data);
    });
  }, [userData]);

  const sendRequest = (e) => {
    e.preventDefault();

    const receiver_id = person.person._id;
    const sender_id = userData.user_id;
    const requestData = {
      sender_id,
      receiver_id,
    };
    /*
    const RequestRes = Axios.post(
      "http://localhost:5000/friendrequest/sendrequest",
      requestData
    );*/
    console.log(relation);
  };
  return (
    <div>
      <form>
        <div className="search_result">
          <Avatar src={person.person.avatar} fontSize="large" />
          <p>{person.person.displayName}</p>
          <div className="addFriendIcon">
            {!relation.length ? (
              <button onClick={sendRequest} type="submit">
                <PersonAddIcon className="addFriend" />
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FriendRequest;
