import { catchupSource } from "@/helpers/catchupSource";
import Image from "next/image";
import React from "react";

const CatchUpStory = () => {
  return (
    <div className="flex justify-around overflow-x-scroll">
      {catchupSource.map((catchup, index) => {
        return (
          <span
            key={index}
            className="flex flex-col items-center text-black hover:text-[#F90000] mx-2"
          >
            <span className="border-2 border-[#F90000] rounded-full">
              <Image
                src={catchup.img}
                alt=""
                className="border-2 border-white rounded-full min-w-[60px] h-[60px]"
              />
            </span>
            <h3 className="text-sm text-center">{catchup.catchuptitle}</h3>
          </span>
        );
      })}
    </div>
  );
};

export default CatchUpStory;
