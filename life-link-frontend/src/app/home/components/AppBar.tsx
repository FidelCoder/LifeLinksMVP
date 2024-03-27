import { TextLogo } from "@/constants/svg";
import { Bell, List, XCircle } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

const AppBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="text-black py-4 px-2 flex items-center justify-between">
      <List size={32} color="#000000" className="block" onClick={toggleMenu} />

      {/* mobile menu section */}
      <div
        className="absolute top-0 left-0 right-0 sm:block bg-white p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
        style={showMenu ? { display: "block" } : { display: "none" }}
      >
        <XCircle size={32} color="#E99123" onClick={toggleMenu} />
        <ul className="flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto"></ul>
      </div>

      <div className="hidden lg:flex items-center">
        <ul className=" flex flex-col sm:flex-row justify-around text-base font-DM text-[#A2A2A2] w-auto"></ul>
      </div>

      <Bell size={24} />
    </div>
  );
};

export default AppBar;
