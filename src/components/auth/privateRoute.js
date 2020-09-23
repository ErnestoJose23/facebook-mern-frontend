import React, { useContext, useEffect } from "react";
import { Provider } from "react-redux";

import { Redirect, Route, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

function PrivateRoute({ component: Component, user }) {
  const { userData, setUserData } = useContext(UserContext);
  useEffect(() => {
    console.log("Aqui");
    console.log(user);
  }, []);
  return (
    <Route
      render={(props) =>
        userData.token != undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
