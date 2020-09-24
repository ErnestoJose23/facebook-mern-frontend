import React from "react";
import Header from "../../components/layouts/header";
import Sidebar from "../../components/layouts/Sidebar";
import Chat from "../../components/layouts/Chat";
import Feed from "../layouts/Feed";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
