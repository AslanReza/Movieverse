import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const query = location?.search?.slice(3);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          page: page,
          query: location?.search?.slice(3),
        },
      });
      setData((preve) => {
        return [...preve, ...response.data.results];
      });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((preve) => preve + 1);
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">
      <div className="lg:hidden my-2 mx-2 sticky top-[68px] z-30">
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20")?.join(" ")}
          className="px-4 py-1 text-lg w-full bg-black/85 outline-1 outline outline-neutral-700 rounded-lg text-white"
        />
      </div>
      <div className="container mx-auto">
        <h3 className="capitalize  text-lg my-3 lg:text-xl font-semibold ">
          Search Results
        </h3>
        <div className="grid  grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => {
            return (
              <Card
                data={searchData}
                key={searchData.id + "Search Section"}
                media_type={searchData.media_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
