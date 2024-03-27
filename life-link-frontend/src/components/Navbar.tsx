import { Profile } from "@/constants/svg";
import { ChatCircleDots, Compass, HouseSimple } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white">
      <div className="flex justify-around items-center text-black h-[60px]">
        <Link
          href="/home"
          className="flex flex-col items-center text-black hover:text-[#F90000]"
        >
          <HouseSimple size={24} />
          <h3 className="text-sm">Home</h3>
        </Link>
        <Link
          href="/catchup"
          className="flex flex-col items-center text-black hover:text-[#F90000]"
        >
          <Compass size={24} />
          <h3 className="text-sm">Catch Up</h3>
        </Link>
        <Link
          href="/messages"
          className="flex flex-col items-center text-black hover:text-[#F90000]"
        >
          <ChatCircleDots size={24} />
          <h3 className="text-sm">Messages</h3>
        </Link>
        <Popover>
          <PopoverTrigger>
            <button className="flex flex-col items-center text-black hover:text-[#F90000]">
              <Image src={Profile} alt="" />
              <h3 className="text-sm">Profile</h3>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <button className="py-3 px-6 border border-white bg-gradient-to-r from-[#F90000] to-[#FF9000] text-white font-semibold rounded-full hover:cursor-pointer">
                Connect Wallet
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default NavBar;
