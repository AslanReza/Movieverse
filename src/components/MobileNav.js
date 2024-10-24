import React from "react";
import { mobileNav } from "../constants/nav";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  return (
    <section className="lg:hidden h-12 bg-neutral-600 bg-opacity-45 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full">
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
