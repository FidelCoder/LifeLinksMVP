import { categoriesItems } from "@/data/categories-items";
import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <section className="flex flex-col mx-2">
      <div className="flex justify-between mb-4 items-center">
        <h3 className="font-semibold">Categories</h3>
        <h4 className="text-[#E99123] text-sm ">View All</h4>
      </div>
      <div className="flex justify-around overflow-x-scroll">
        {categoriesItems.map((catergory, index) => {
          return (
            <span
              key={index}
              className="flex flex-col items-center text-black hover:text-[#F90000] mx-2"
            >
              <span className="border border-[#F90000] rounded-full p-2">
                {catergory.img}
              </span>
              <h3 className="text-sm text-center">{catergory.title}</h3>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
