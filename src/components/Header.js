import React, { useEffect, useState } from "react";
import logo from "../assets/Logo-3.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { navigation } from "../constants/nav";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search?q=${searchInput}`);
  }, [searchInput]);
  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-700 bg-opacity-75">
      <div className="container mx-auto px-2 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="Logo" width={124} />
        </Link>
        <nav
          className="hidden lg:flex items-center
       gap-1 ml-4"
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
        <div className="ml-auto flex items-center gap-2">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            value={searchInput}
            placeholder="Search"
            className="hidden lg:block border-none bg-transparent px-4 py-1 outline-none"
          />
          <div className="hidden lg:text-2xl text-white cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
