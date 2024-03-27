"use client";

import AppBar from "@/app/home/components/AppBar";
import NavBar from "@/components/Navbar";
import { friendSource } from "@/helpers/friendSource";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CreateEventPage = () => {
  const router = useRouter();
  return (
    <section>
      <AppBar />
      <form className="mt-10">
        <label htmlFor="name" className="font-semibold">
          Event or Catchup Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Event or Catchup Name"
          className=" border border-[#E8E8E8] w-full rounded-xl px-4 py-4 mx-1 bg-transparent text-black text-sm outline-none"
        />

        <label htmlFor="time" className="font-semibold">
          Enter Time Period
        </label>
        <input
          type="text"
          id="time"
          placeholder="Enter Time Period"
          className=" border border-[#E8E8E8] w-full rounded-xl px-4 py-4 mx-1 bg-transparent text-black text-sm outline-none"
        />

        <label htmlFor="location" className="font-semibold">
          Enter Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter Location"
          className=" border border-[#E8E8E8] w-full rounded-xl px-4 py-4 mx-1 bg-transparent text-black text-sm outline-none"
        />
        <section className="flex flex-col mx-2">
          <div className="flex justify-between mb-4 items-center">
            <h3 className="font-semibold">Invite Friends</h3>
            <h4 className="text-[#E99123] text-sm ">View All</h4>
          </div>
          <div className="flex justify-around overflow-x-scroll">
            {friendSource.map((friend, index) => {
              return (
                <span
                  key={index}
                  className="flex flex-col items-center text-black hover:text-[#F90000] mx-2"
                >
                  <span className="border-2 border-[#F90000] rounded-full">
                    <Image
                      src={friend.img}
                      alt=""
                      className="border-2 border-white rounded-full min-w-[60px] h-[60px]"
                    />
                  </span>
                  <h3 className="text-sm text-center">{friend.name}</h3>
                </span>
              );
            })}
          </div>
        </section>
        <button
          onClick={() => {
            event?.preventDefault();
            router.push("/catchup/share-qr");
          }}
          className="bg-gradient-to-r from-[#F90000] to-[#FF9000] text-white font-bold text-lg p-3 rounded-xl w-full mt-5"
        >
          Create
        </button>
      </form>
      <NavBar />
    </section>
  );
};

export default CreateEventPage;
