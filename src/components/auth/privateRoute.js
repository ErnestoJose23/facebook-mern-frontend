import React, { useContext, useEffect } from "react";
import { Provider } from "react-redux";

import { Redirect, Route, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

function PrivateRoute({ component: Component }) {
  const { userData, setUserData } = useContext(UserContext);
  const token = localStorage.getItem("auth-token");

  return (
    <Route
      render={(props) =>
        token !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
