import { GiHamburgerMenu } from "react-icons/gi";
import Sletter from "./Letter/SLetter";
import Hamburger from "./Hamburger";
import { desktop_nav } from "../constants/Index";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="flex  ">
        <div className=" flex w-11/12 text-center justify-center uppercase  ml-[12%] sm:mx-[2%]  ">
          <div className=" flex w-full items-center justify-center   gap-10">
            <div className=" w-[160px]  h-[40px] sm:w-[270px] sm:h-[60px]   sm:mt-5 ">
              <Sletter />
            </div>

            <div className="w-10/12 hidden sm:block  md:block lg:block xl:block  max-w-[800px] ">
              <ul
                className="  flex flex-row  text-white  lg:gap-[20px] sm:text-[11px] sm:gap-3  
                                font-bold  md:text-[11px] md:gap-4 lg:text-[12px] "
              >
                {desktop_nav.map((navbar) => (
                  <li key={navbar.id}>{navbar.title} </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className=" w-1/12 flex items-center justify-center  ">
          <p
            className="text-white sm:text-[11px] sm:gap-3  
                                font-bold  md:text-[11px] md:gap-4 lg:text-[12px]  uppercase  mr-5   hidden sm:block  md:block lg:block xl:block  "
          >
            {" "}
            Shop{" "}
          </p>
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
