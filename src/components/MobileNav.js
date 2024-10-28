import React from "react";
import { mobileNav } from "../constants/nav";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <section className="lg:hidden h-12 bg-black bg-opacity-75 backdrop-blur-2xl fixed bottom-0 z-20 w-full">
      <div className="flex items-center  text-neutral-700 justify-evenly h-full">
        {mobileNav.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobileNav"}
              to={nav.href}
              className={({ isActive }) =>
                `px-2 flex h-full items-center flex-col justify-center ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNav;
