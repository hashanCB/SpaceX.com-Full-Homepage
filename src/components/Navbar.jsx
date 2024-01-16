import { GiHamburgerMenu } from "react-icons/gi";
import Sletter from "./Letter/SLetter";
import Hamburger from "./Hamburger";
const Navbar = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="flex  bg-red-800 ">
        <div className=" flex w-11/12 text-center justify-center bg-emerald-500">
          <Sletter w="150" h="40" />
        </div>

        <div className=" w-1/12 flex items-center justify-center  ">
          <div
            className=" text-white cursor-pointer  z-[1] "
            onClick={toggleSidebar}
          >
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
