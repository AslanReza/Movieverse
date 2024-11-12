import React, { useEffect, useState } from "react";
import navLogo from "../assets/nav.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { GrContact } from "react-icons/gr";
import { navigation } from "../constants/nav";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);
  return (
    <header className="fixed top-0 w-full h-16 z-40 bg-black bg-opacity-75">
      <div className="container mx-auto px-3 flex  items-center h-full">
        <Link to={"/"}>
          <img className="rounded-md" src={navLogo} alt="Logo" width={124} />
        </Link>
        <span className="pl-5 text-neutral-500 hidden lg:block">|</span>

        <nav
          className="hidden lg:flex items-center 
       gap-2 ml-4"
        >
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <span className="px-5 text-neutral-500 hidden lg:block">|</span>
        <div className="mr-auto flex items-center gap-0">
          <div
            className="text-2xl text-white hidden lg:block cursor-pointer"
            href="/search"
          >
            <CiSearch />
          </div>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            value={searchInput}
            placeholder="What are you looking for?"
            className="hidden lg:block border-none bg-transparent px-2 py-1 min-w-48 outline-none rounded-md ml-0"
          />
        </div>
        <a
          href="/contact"
          data-tooltip-id="my-tooltip-diff"
          data-tooltip-delay-hide={500}
          className="example-container cursor-pointer my-anchor-element flex items-baseline gap-1 lg:text-2xl lg:mr-5 text-xl text-neutral-600 hover:text-white"
        >
          <GrContact />
          <Tooltip
            className="example-diff-arrow"
            classNameArrow="example-arrow"
            data-tooltip-delay-hide={3500}
            anchorSelect=".my-anchor-element"
            place="bottom"
            style={{
              fontSize: "14px",
              padding: "0px 10px",
              textAlign: "center",
              borderRadius: "4px",
              display: "block",
            }}
          >
            Get in Touch!
          </Tooltip>
        </a>
      </div>
    </header>
  );
};

export default Header;
