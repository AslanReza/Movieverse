import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import HeroHeader from "../components/HeroHeader";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/CardScroll";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import ColoredDivider from "../components/ColoredDivider";

const Home = () => {
  const trendingData = useSelector((state) => state.movieverseData.bannerData);
  const { data: topRatedMoviesData } = useFetch("/movie/top_rated");
  const { data: popularMoviesData } = useFetch("/movie/popular");
  const { data: nowPlayingMoviesData } = useFetch("/movie/now_playing");
  const { data: upComingMoviesData } = useFetch("/movie/upcoming");
  const { data: topRatedTvData } = useFetch("/tv/top_rated");
  const { data: popularTvData } = useFetch("/tv/popular");
  const { data: nowPlayingTvData } = useFetch("/tv/airing_today");
  const { data: upComingTvData } = useFetch("/tv/on_the_air");

  return (
    <div>
      {/* Main Header Section */}
      <HeroHeader />

      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <div className="container mx-auto">
        <ColoredDivider />
      </div>
      <HorizontalScrollCard
        data={popularTvData}
        heading={"Popular TV Shows"}
        media_type={"tv"}
      />

      <HorizontalScrollCard
        data={popularMoviesData}
        heading={"Popular Movies"}
        media_type={"movie"}
      />
      <div className="container mx-auto">
        <ColoredDivider />
      </div>
      <HorizontalScrollCard
        data={topRatedTvData}
        heading={"Top Rated TV Shows"}
        media_type={"tv"}
      />

      <HorizontalScrollCard
        data={topRatedMoviesData}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
       {/* <div className="container mx-auto">
        <ColoredDivider />
      </div>
      <HorizontalScrollCard
        data={nowPlayingTvData}
        heading={"Now Playing TV Shows"}
        media_type={"tv"}
      />

      <HorizontalScrollCard
        data={nowPlayingMoviesData}
        heading={"Now Playing Movies"}
        media_type={"movie"}
      /> */}
    </div>
  );
};

export default Home;
