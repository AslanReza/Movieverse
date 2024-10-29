import React, { useEffect, useState } from "react";
import navLogo from "../assets/nav.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
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
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img className="rounded-md" src={navLogo} alt="Logo" width={124} />
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
          <div
            className="text-2xl text-white hidden lg:block cursor-pointer"
            href="/search"
          >
            <CiSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
