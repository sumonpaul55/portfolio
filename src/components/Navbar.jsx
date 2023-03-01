import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { RiBarChartHorizontalLine, RiCloseLine, RiFacebookFill, RiLinkedinBoxFill, RiTwitterFill, RiGithubFill, RiMailAddFill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="flex h-[80px] bg-[#0a192f] justify-between px-4 items-center text-white">
        <div className="logo">
          <img src={logo} className="w-[50px]" alt="logo" />
        </div>
        {/* menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact Me</li>
        </ul>
        {/* Hamburger */}
        <div onClick={() => setNav(!nav)} className="md:hidden z-10 cursor-pointer text-2xl">
          {!nav ? <RiBarChartHorizontalLine /> : <RiCloseLine />}
        </div>
        {/* mobile menu */}
        <ul className={`${!nav ? "hidden" : "absolute bg-[#0a192f] text-white flex items-center flex-col justify-center inset-0 md:hidden"}`}>
          <li className="py-4 text-3xl">Home</li>
          <li className="py-4 text-3xl">About</li>
          <li className="py-4 text-3xl">Experience</li>
          <li className="py-4 text-3xl">Skills</li>
          <li className="py-4 text-3xl">Work</li>
          <li className="py-4 text-3xl">Contact Me</li>
        </ul>
        {/* social icons */}
        <div className="absolute top-[35%] left-0 hidden xl:block">
          <ul className="">
            <li className="w-[160px] h-10 flex justify-between items-center bg-blue-600 text-xl ml-[-105px] hover:ml-[0] duration-300">
              <a href="/">Facebook</a>
              <RiFacebookFill className="text-3xl" />
            </li>
            <li className="w-[160px] h-10 flex justify-between items-center bg-[#3A1078] text-xl ml-[-105px] hover:ml-[0] duration-300">
              <a href="/">Linkedin</a>
              <RiLinkedinBoxFill className="text-3xl" />
            </li>
            <li className="w-[160px] h-10 flex justify-between items-center bg-[#C147E9] text-xl ml-[-105px] hover:ml-[0] duration-300">
              <a href="/">Twitter</a>
              <RiTwitterFill className="text-3xl" />
            </li>
            <li className="w-[160px] h-10 flex justify-between items-center bg-[#D36B00] text-xl ml-[-105px] hover:ml-[0] duration-300">
              <a href="/">Email</a>
              <RiMailAddFill className="text-3xl" />
            </li>
            <li className="w-[160px] h-10 flex justify-between items-center bg-[#182747] text-xl ml-[-105px] hover:ml-[0] duration-300">
              <a href="/">Github</a>
              <RiGithubFill className="text-3xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
