"use client";

import Link from "next/link";
import React from "react";

const CreateEvent = () => {
  return (
    <div className="mx-2">
      <article className="bg-gradient-to-r from-[#F90000] to-[#FF9000] bg-cover h-[150px] rounded-xl flex flex-col justify-around my-2 p-2">
        <h4 className="text-white font-semibold">
          Create an Event or a Catchup
        </h4>
        <Link
          href="/catchup/createEvent"
          className="py-3 px-6 bg-white w-auto  text-black font-semibold rounded-xl hover:cursor-pointer"
        >
          Create Event
        </Link>
      </article>
    </div>
  );
};

export default CreateEvent;
