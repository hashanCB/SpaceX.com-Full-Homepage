import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Navbar from "./Navbar";
import { navLinks, mobi_navbar } from "../constants/Index";

const Sidebar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const toggleSidebar = () => {
    setNav(!nav);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div
        className={
          nav
            ? " fixed  top-0 right-0 bottom-0 lg:right-0 p-0 w-[300px]  text-center bg-gray-900   ease-in-out duration-1000 "
            : "ease-in-out w-[300px] duration-1000 fixed top-0 bottom-0 right-[-100%]"
        }
      >
        <div className="flex flex-col w-full mt-0 text-right px-5">
          <div
            className=" flex justify-end text-[32px] text-white cursor-pointer"
            onClick={toggleSidebar}
          ></div>

          <div className=" text-white mt-5">
            <ul className=" hidden sm:block  md:block lg:block xl:block ">
              {navLinks.map((link) => (
                <li key={link.id} className=" my-4 border-b-2 border-white/10">
                  {link.title}{" "}
                </li>
              ))}
            </ul>

            <ul className=" sm:hidden  md:hidden lg:hidden xl:hidden">
              {mobi_navbar.map((links) => (
                <li key={links.id} className=" my-4 border-b-2 border-white/10">
                  {" "}
                  {links.title}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
