import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sletter from "./Letter/SLetter";
const Navbar = () => {
  return (
    <div>
      <div className="flex  bg-red-800 ">
        <div className=" flex w-11/12 text-center justify-center bg-emerald-500">
          <Sletter w="150" h="40" />
        </div>

        <div className=" w-1/12 flex items-center justify-center">
          <div className=" text-white">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
