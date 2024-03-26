'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ShapeLogo } from "@/constants/svg";
import { onboardingSource } from "@/helpers/onboardingSource";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Onboarding = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.replace("/signup");
  };
  return (
    <main className="onboarding-bg " onClick={handleNavigate}>
      <Image src={ShapeLogo} alt="" className="py-[100px]" />
      <Carousel>
        <CarouselContent>
          {onboardingSource.map((element, index) => {
            return (
              <CarouselItem key={index}>
                <div className="flex flex-col justify-around h-[300px]">
                  <h2 className="text-4xl text-white font-bold">
                    {element.title}
                  </h2>
                  <h4 className="text-white my-5">{element.subtitle}</h4>
                  <article className="flex">
                    <hr
                      className="line"
                      style={
                        index == 0 ? { width: "150px" } : { width: "50px" }
                      }
                    />
                    <hr
                      className="line"
                      style={
                        index == 1 ? { width: "150px" } : { width: "50px" }
                      }
                    />
                    <hr
                      className="line"
                      style={
                        index == 2 ? { width: "150px" } : { width: "50px" }
                      }
                    />
                  </article>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </main>
  );
};

export default Onboarding;
