"use client";

import { ShapeLogo } from "@/constants/svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SplashScreen = () => {
  const router = useRouter();

  setTimeout(()=>{
    router.replace("/onboarding")
  }, 3000)
  
  return <Image src={ShapeLogo} alt="" />;
};

export default SplashScreen;
