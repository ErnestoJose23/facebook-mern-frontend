import React, { useContext } from "react";

import { Redirect, Route, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

function PrivateRoute({ component: Component }) {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <Route
      render={(props) =>
        userData.user ? (
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
