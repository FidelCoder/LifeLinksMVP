"use client";

import React from "react";
import AppBar from "./components/AppBar";
import NavBar from "@/components/Navbar";
import CatchUpStory from "@/components/stories/CatchUpStory";
import CatchupTweet from "./components/CatchupTweet";

const Home = () => {
  return (
    <div className="overflow-auto">
      <AppBar />
      <CatchUpStory />
      <CatchupTweet />
      <NavBar />
    </div>
  );
};

export default Home;
