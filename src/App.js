import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home";
import UserContext from "./context/UserContext";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Axios from "axios";
import PrivateRoute from "./components/auth/privateRoute";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  let token = localStorage.getItem("auth-token");

  useEffect(() => {
    const checkLoggedIn = async () => {
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });

        setUserData({
          token: token,
          user: userRes.data.displayName,
        });
      }
      console.log("En app");
      console.log(userData);
    };

    checkLoggedIn();
  }, [userData.token]);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
