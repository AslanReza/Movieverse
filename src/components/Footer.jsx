import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/nav.png";
import { FaHeart } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-45 mt-6 text-neutral-400 py-2">
      <div className="flex   items-center justify-center gap-4">
        <Link className="hover:text-white" to={"/about"}>
          About
        </Link>
        <Link className="hover:text-white" to={"/contact"}>
          Contact
        </Link>
        <Link className="hover:text-white" to={"/"}>
          <img
            className="rounded-md mx-2"
            src={navLogo}
            alt="Logo"
            width={98}
          />
        </Link>
        <Link className="hover:text-white" to={"/privacy"}>
          Privacy Policy
        </Link>
        <Link className="hover:text-white" to={"/help"}>
          Help
        </Link>
      </div>
      <div className="flex justify-center px-2 items-center mt-1">
        <p className="flex items-center gap-1 hover:text-white">
          Made with <FaHeart color="red" /> and <FaReact color="cyan" />
        </p>
        <p className="px-4">| |</p>
        <div className="flex items-center">
          <Link
            className="text-lg  text-black bg-neutral-400 hover:bg-orange-600 rounded-full"
            target="_blank"
            to={"https://github.com/AslanReza?tab=following"}
          >
            <FaGithub />
          </Link>
          <Link
            className="text-blue-500 text-lg mx-4"
            target="_blank"
            to={"https://telegram.me/Rezaslan"}
          >
            <FaTelegram />
          </Link>
          <Link
            className="bg-balck  text-xl"
            target="_blank"
            to={"https://twitter.com/rezaslan"}
          >
            <AiFillTwitterCircle />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
