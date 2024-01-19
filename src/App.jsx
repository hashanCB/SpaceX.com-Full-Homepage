import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sildebar from "./components/Sidebar";
import mobi from "../src/assets/Desktop_home.jpeg";
import Info from "./components/Info";
import tvvideo from "./assets/video.mp4";

function App() {
  return (
    <div className="flex  flex-col ">
      <div
        className=" relative bg-cover bg-center w-fullitems-center justify-center h-screen"
        style={{
          backgroundImage:
            'url("https://sxcontent9668.azureedge.us/cms-assets/assets/Axiom_3_sunset_011724_DSC_2907_desktop_d510009afd.jpg")',
        }}
      >
        <div className=" absolute top-0 left-0  right-0">
          <Sildebar />
        </div>

        <Info
          firstname={"UPCOMING LAUNCH"}
          sendname={"AX-3 MISSION"}
          butttonname={"WATCH"}
        />

        <div className="animate-bounce absolute bottom-[5%] left-[50%]  text-white opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div
        className=" relative bg-cover bg-center w-full items-center justify-center h-screen"
        style={{
          backgroundImage:
            'url("https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_37_011424_DSC_0117_desktop_e31bf7f8cb.jpg")',
        }}
      >
        <Info
          firstname={"RECENT LAUNCH"}
          sendname={"STARLINK MISSION"}
          butttonname={"REWATCH"}
        />

        <div className="animate-bounce absolute bottom-[5%] left-[50%]  text-white opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div className="relative bg-cover bg-center w-full h-screen overflow-hidden">
        {/* Replace the video URL with your actual video URL */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={tvvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Your Info component */}
        <Info
          firstname={"RECENT LAUNCH"}
          sendname={"STARSHIP'S SECOND FLIGHT TEST"}
          butttonname={"LEARN MORE"}
        />

        <div className="animate-bounce absolute bottom-[5%] left-[50%]  text-white opacity-70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <div className=" h-[100px] bg-black">
        <div className="flex flex-col sm:flex-row  items-center  justify-center text-center">
          <div className=" sm:flex gap-10  mt-5 text-[10px]">
            <p className="whitespace-nowrap  text-white tracking-wide">
              SPACEX © 2024
            </p>

            <div className=" flex flex-row  mt-3  sm:flex gap-5 font-semibold   text-center sm:mt-0 text-[10px] ">
              <p className=" text-white tracking-wide">PRIVACY POLICY</p>
              <p className=" text-white tracking-wide">SUPPLIERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
