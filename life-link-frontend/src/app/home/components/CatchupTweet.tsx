import { Conference, User } from "@/constants/img";
import {
  BookmarkSimple,
  ChatCircleDots,
  DotsThreeVertical,
  Heart,
  ShareNetwork,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const CatchupTweet = () => {
  return (
    <div className="my-4 mx-2">
      <span className="flex justify-between">
        <span className="flex justify-between items-center w-1/2">
          <Image src={User} alt="" className="w-[40px] h-[40px]" />
          <span>
            <h4>MaxMillian</h4>
            <p>AfricaTechSummit</p>
          </span>
        </span>

        <DotsThreeVertical size={24} />
      </span>
      <span className="py-10">
        <h3>
          Y’all ready for the next Africa Tech Summit. I will be attending this
          year’s event. #AfricaTechSummit
        </h3>
        <Image src={Conference} alt="" className="w-full my-4 rounded-lg" />
        <span className="flex justify-between">
          <span className="flex justify-around">
            <span className="flex items-center mx-2">
              <ChatCircleDots size={24} />
              <p>46</p>
            </span>

            <span className="flex items-center mx-2">
              <Heart size={24} />
              <p>46</p>
            </span>

            <span className="flex items-center mx-2">
              <ShareNetwork size={24} />
              <p>46</p>
            </span>
          </span>
          <span className="flex items-center">
            <BookmarkSimple size={24} />
          </span>
        </span>
      </span>
    </div>
  );
};

export default CatchupTweet;
