import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";
import moment from "moment";
const Card = ({ data, trending, index, media_type }) => {
  const imageUrl = useSelector((state) => state.movieverseData.imageUrl);
  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[246px] block max-w-[246px] h-80 overflow-hidden rounded-md relative"
    >
      {data?.poster_path ? (
        <img src={imageUrl + data?.poster_path} />
      ) : (
        <div className="bg-neutral-800 h-full w-full flex justify-center items-center">
          Image Was Not Found!
        </div>
      )}
      <div className="absolute top-4">
        {trending && (
          <div className="py-1 px-4 overflow-hidden backdrop-blur-3xl rounded-r-md">
            #{index} Trending
          </div>
        )}
      </div>
      <div className="absolute group hover:top-0  bottom-0 pb-1 pt-1 px-1 bg-black/40 h-auto backdrop-blur-3xl w-full ">
        <h2 className="text-clip line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm items-center text-neutral-00 flex justify-between">
          <p className="">{moment(data.release_date).format("MMM Do YYYY")}</p>
          <p className="bg-black/45 text-white py-0.5 flex items-center px-1 rounded-full text-xs">
            Rating : {Number(data.vote_average).toFixed(1)}
            <MdOutlineStarHalf className="text-yellow-400 ml-1" />
          </p>
        </div>
        <div className="group-hover:block hidden w-full h-[0.5px] bg-neutral-700 mt-2 mb-0.5"></div>
        <div className="group-hover:block  text-clip hidden">
          <h3 className="text-md font-semibold  mb-1">Storyline :</h3>
          <p className="text-xs text-ellipsis line-clamp-5">{data?.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
