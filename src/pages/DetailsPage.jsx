import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdOutlineStarHalf } from "react-icons/md";
import useFetchDetails from "../hooks/useFetchDetails";
import { PiEyeDuotone } from "react-icons/pi";
import moment from "moment";
import { GoCodeReview } from "react-icons/go";
import { AiFillAlert } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { CiAlarmOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import Divider from "../components/Divider";
import { TbChairDirector } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import useFetch from "../hooks/useFetch";
import HorizontalScrollCard from "../components/CardScroll";

const DetailsPage = () => {
  const params = useParams();
  const imageUrl = useSelector((state) => state.movieverseData.imageUrl);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: reviewData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/reviews`
  );
  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");
  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    ?.join(", ");
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendedData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );
  return (
    <div>
      <div className="w-full h-[584px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageUrl + data?.backdrop_path}
            className="h-full object-cover w-full"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent "></div>
      </div>

      <div className="container mx-auto px-6 py-16 lg:py-0 my-1 flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageUrl + data?.poster_path}
            className="h-80 object-cover w-60  rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-2xl lg:text-4xl text-white font-bold ">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>
          <Divider />
          <div className="flex gap-2 ">
            <p className="flex items-center ">
              Rating : {Number(data?.vote_average).toFixed(1)}
              <MdOutlineStarHalf className="text-yellow-400" />
            </p>
            <p>|</p>
            <p className="flex items-center gap-0.5">
              View : {Number(data?.popularity).toFixed(0)}
              <PiEyeDuotone className="text-neutral-600" />
            </p>
            <p>|</p>
            <p className="flex items-center gap-0.5">
              Duration : {duration[0]}h {duration[1]}m
              <CiAlarmOn className=" bg-transparent text-green-800 rounded-full" />
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="text-xl font-semibold mb-1">Storyline :</h3>
            <p>{data?.overview}</p>
          </div>
          <Divider />
          <div className="flex gap-2">
            <p className="flex items-center gap-0.5">
              Status : {data?.status}
              <AiFillAlert className="text-red-600" />
            </p>
            <span>|</span>
            <p className="flex items-center gap-0.5">
              Release Date : {moment(data?.release_date).format("MMMM D YYYY")}
              <CiCalendar className="text-white" />
            </p>
          </div>
          <Divider />

          <div>
            <p className="flex items-center gap-0.5">
              <TbChairDirector className="text-neutral-500" />
              <p className="text-white"> Director : </p>
              {castData?.crew[0]?.name}
            </p>
            <p className="flex items-center gap-0.5">
              <TfiWrite />
              <p className="text-white"> Writer : </p>
              {writer}
            </p>
          </div>
          <Divider />
          <h2 className="font-semibold text-lg mb-1">Cast : </h2>

          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-1">
            {castData?.cast
              .filter((el) => el?.profile_path)
              .map((cast, index) => {
                return (
                  <div className="flex items-center flex-col">
                    <div>
                      <img
                        className="rounded-full w-20 h-20 object-cover"
                        src={imageUrl + cast?.profile_path}
                      />
                    </div>
                    <p className="font-semibold text-center text-sm">
                      {cast?.name}
                    </p>
                  </div>
                );
              })}
          </div>
          <Divider />
          <h2 className="font-semibold text-lg mb-1">User reviews :</h2>
          <div className="container mx-auto flex-col">
            <div className="flex flex-col bg-neutral-800 rounded-md px-4 py-1 my-2">
              <p className="flex text-white justify-between items-center">
                {`${reviewData?.results[0]?.author}'s Review about ${
                  data?.title || data?.name
                }`}{" "}
                :
                <div className="text-white text-xl">
                  <GoCodeReview />
                </div>
              </p>
              <p className="text-[13px] px-2 py-1 text-justify text-neutral-400 ">
                {reviewData?.results[0]?.content}
              </p>
            </div>
            <div className="flex flex-col bg-neutral-800 rounded-md px-4 py-1 my-2">
              <p className="flex text-white justify-between items-center">
                {`${reviewData?.results[1]?.author}'s Review about ${
                  data?.title || data?.name
                }`}{" "}
                :
                <div className="text-white text-xl">
                  <GoCodeReview />
                </div>
              </p>
              <p className="text-[13px] px-2 py-1 text-justify text-neutral-400">
                {reviewData?.results[1]?.content}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard
          data={similarData}
          heading={"More like this " + params?.explore}
          media_type={params?.explore}
        />
        <HorizontalScrollCard
          data={recommendedData}
          heading={"Recommended " + params?.explore}
          media_type={params?.explore}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
