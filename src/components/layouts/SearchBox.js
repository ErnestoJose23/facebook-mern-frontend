import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../../components/pages/Search.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CardContent from "@material-ui/core/CardContent";

import { Avatar } from "@material-ui/core";
import FriendRequest from "./FriendRequest";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SearchBox({ search, type }) {
  const classes = useStyles();
  const [persons, setPersons] = useState([]);
  const [receiver, setReceiver] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUserName/${search}`).then(
      (response) => {
        setPersons(response.data);
      }
    );
  }, []);

  return (
    <div className="searchbox">
      <Card className={classes.root}>
        <CardContent>
          <h3>{type}</h3>
          {type == "People" ? (
            <div>
              {persons.map((person) => (
                <FriendRequest person={person} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchBox;
