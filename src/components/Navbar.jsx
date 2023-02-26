import React from "react";
import logo from "../assets/logo1.png";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="flex h-[80px] bg-[#0a192f] justify-between px-4 items-center text-white">
        <div className="logo">
          <img src={logo} className="w-[50px]" alt="logo" />
        </div>
        {/* menu */}
        <div className="">
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact Me</li>
          </ul>
        </div>
        {/* Hamburger */}
        <div className="hidden">
          <FaBars />
        </div>
        {/* mobile menu */}
        <div className="hidden">
          <ul className="">
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact Me</li>
          </ul>
        </div>
        {/* social icons */}
        <div className="hidden"></div>
      </div>
    </div>
  );
};

export default Navbar;
