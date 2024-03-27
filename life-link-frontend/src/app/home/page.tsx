"use client";

import React from "react";
import AppBar from "./components/AppBar";
import NavBar from "@/components/Navbar";
import CatchUpStory from "@/components/stories/CatchUpStory";

const Home = () => {
  return (
    <div>
      <AppBar />
      <CatchUpStory />
      <NavBar />
    </div>
  );
};

export default Home;
