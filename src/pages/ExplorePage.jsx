import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Explore = () => {
  const params = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNumber, setTotalPageNumber] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNumber,
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
      setTotalPageNumber(response.data.total_pages);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNumber((preve) => preve + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16 container mx-auto flex justify-center items-center">
      <div className="container ">
        <h3 className="capitalize  text-lg my-3 lg:text-xl font-semibold ">
          {params.explore} page
        </h3>
        <div className="grid  grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData, index) => {
            return (
              <Card
                data={exploreData}
                index={index}
                key={exploreData.id + "exploreSection"}
                media_type={params.explore}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
