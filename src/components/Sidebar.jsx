import React from "react";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../constants/Index";
const Sidebar = ({ toggleSidebar }) => {
  return (
    <div>
      <div className=" fixed top-0 right-0 bottom-0 opacity-80 lg:right-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="flex flex-col w-full m-10">
          <div className=" text-white cursor-pointer" onClick={toggleSidebar}>
            <IoMdClose />
          </div>

          <div className=" text-white">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>{link.title} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
