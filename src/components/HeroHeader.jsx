import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineStarHalf } from "react-icons/md";
import { PiEyeDuotone } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
const HeroHeader = () => {
  const bannerData = useSelector((state) => state.movieverseData.bannerData);
  const imageUrl = useSelector((state) => state.movieverseData.imageUrl);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < bannerData.length - 1) {
      setCurrentSlide((preve) => preve + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const inteval = setInterval(() => {
      if (currentSlide < bannerData.length - 1) {
        handleNextSlide();
      } else {
        setCurrentSlide(0);
      }
    }, 5000);
    return () => clearInterval(inteval);
  }, [bannerData, imageUrl, currentSlide]);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[96vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "HeroHeader" + index}
              className="min-w-full mb-6 min-h-[452px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="w-full h-full ">
                <img
                  src={imageUrl + data.backdrop_path}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute px-4 top-0 w-full h-full items-center hidden justify-between group-hover:lg:flex">
                <button
                  onClick={handlePreviousSlide}
                  className="bg-white/60 hover:bg-white h-24 p-1 rounded-full  text-xl z-10 text-black"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="bg-white/60 hover:bg-white p-1 h-24 rounded-full  text-xl z-10 text-black "
                >
                  <FaAngleRight />
                </button>
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto flex justify-center">
                <div className="absolute bg-black/30 my-2 mx-auto p-1 rounded-xl bottom-0  max-w-sm px-4">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-3xl">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2 ">
                    {data.overview}
                  </p>
                  <div className=" flex gap-4 items-center">
                    <div className="flex items-center justify-start">
                      <p>Rating : {Number(data.vote_average).toFixed(1)}</p>
                      <span className="text-yellow-400 pl-0.5 text-md align-middle">
                        <MdOutlineStarHalf />
                      </span>
                    </div>
                    <span>|</span>
                    {/* <div className="flex items-center justify-start">
                      <p>View : {Number(data.popularity).toFixed(0)}</p>
                      <span className="text-neutral-600 pl-0.5 text-md align-middle">
                        <PiEyeDuotone />
                      </span>
                    </div>
                    <span>|</span> */}
                    <div className="flex items-center justify-start">
                      <p>
                        Language :{" "}
                        {String(data.original_language.toUpperCase())}
                      </p>
                      <span className="text-blue-100 pl-0.5 text-md align-middle">
                        <FaLanguage />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroHeader;
