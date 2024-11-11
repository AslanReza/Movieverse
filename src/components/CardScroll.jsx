import React, { useRef } from "react";
import Card from "./Card";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
import { LiaAngleDoubleLeftSolid } from "react-icons/lia";
const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
  const containerRefrenced = useRef();
  const handleNext = () => {
    containerRefrenced.current.scrollLeft += 230;
  };
  const handlePrevious = () => {
    containerRefrenced.current.scrollLeft -= 230;
  };

  return (
    <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">
        {heading}
      </h2>
      <div className="relative">
        <div
          ref={containerRefrenced}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrollbar-none "
        >
          {data.map((data, index) => {
            return (
              <Card
                key={data.id + "heading" + index}
                data={data}
                trending={trending}
                index={index + 1}
                media_type={media_type}
              />
            );
          })}
        </div>
        <div className="absolute top-0 hidden lg:flex justify-between w-full h-full items-center">
          <button
            onClick={handlePrevious}
            className="bg-black/70 p-1 text-white h-24 hover:bg-black rounded-full ml-2 z-10"
          >
            <LiaAngleDoubleLeftSolid />
          </button>
          <button
            onClick={handleNext}
            className="bg-black/70 p-1 text-white h-24  hover:bg-black rounded-full mr-2 z-10"
          >
            <LiaAngleDoubleRightSolid />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HorizontalScrollCard;
