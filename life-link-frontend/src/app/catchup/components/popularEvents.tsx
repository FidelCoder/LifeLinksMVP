import React from "react";

const PopularEvents = () => {
  return (
    <div className="mx-2">
      <div className="flex justify-between my-2 items-center">
        <h3 className="font-semibold">Popular Events</h3>
        <h4 className="text-[#E99123] text-sm ">View All</h4>
      </div>
      <article className="bg-popular-events-bg bg-cover h-[200px] rounded-xl flex justify-end items-end">
        <span className="m-3 bg-white px-3 py-2 rounded-xl h-[80px] w-[400px] flex flex-col justify-around">
          <h4>International Music Festival</h4>
          <span>Kilifi, Kenya</span>
        </span>
      </article>
    </div>
  );
};

export default PopularEvents;
