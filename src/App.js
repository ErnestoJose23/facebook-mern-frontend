import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/pages/home";
import UserContext from "./context/UserContext";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Axios from "axios";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      console.log(tokenRes.data);
    };

    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
