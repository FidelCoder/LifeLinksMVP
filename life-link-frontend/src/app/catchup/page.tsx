"use client";

import React from "react";
import AppBar from "../home/components/AppBar";
import NavBar from "@/components/Navbar";
import Categories from "./components/categories";
import PopularEvents from "./components/popularEvents";
import CreateEvent from "./components/createEvent";

const CatchUp = () => {
  return (
    <div className="">
      <AppBar />
      <Categories />
      <PopularEvents />
      <CreateEvent />
      <NavBar />
    </div>
  );
};

export default CatchUp;
