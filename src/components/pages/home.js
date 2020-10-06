import React, { useState, useEffect } from "react";
import Header from "../../components/layouts/header";
import Sidebar from "../../components/layouts/Sidebar";
import Chat from "../../components/layouts/Chat";
import Feed from "../layouts/Feed";

import "./Home.css";

import Axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/feed/sync").then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div className="Home">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed posts={posts} />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
