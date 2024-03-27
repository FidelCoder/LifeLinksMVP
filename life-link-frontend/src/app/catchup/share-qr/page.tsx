"use client";

import { QRCode } from "@/constants/svg";
import { ArrowLeft, Copy, ShareNetwork } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const ShareQr = () => {
  return (
    <section className="home-background flex flex-col p-5 xl:px-[200px] ">
      <div className="flex justify-between">
        <ArrowLeft size={24} color="#000000" />
        <h3 className="text-black text-lg">Share QR</h3>
        <span></span>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h5 className="text-xl text-black">scan to CatchUp</h5>
      </div>
      <div className="flex justify-center">
        <Image src={QRCode} alt="" />
      </div>
      <form className="mt-10">
        <span className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-[#909090] p-1">
            Share QR
          </label>
          <span className="border border-[#0795B0] rounded-lg p-4 bg-white text-black text-sm flex justify-between ">
            <button>http://lifelink/catchup</button>
            <ShareNetwork size={24} />
          </span>
        </span>
        <span className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-[#909090] p-1">
            Copy Catchup Link
          </label>
          <span className="border border-[#0795B0] rounded-lg p-4 bg-white text-black text-sm flex justify-between ">
            <button>http://lifelink/catchup</button>
            <Copy size={24} color="#000000" />
          </span>
        </span>
        <button className="bg-white font-bold text-lg p-3 rounded-xl w-full mt-5">
          Continue
        </button>
      </form>
    </section>
  );
};

export default ShareQr;
