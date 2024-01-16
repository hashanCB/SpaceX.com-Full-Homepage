import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sildebar from "./components/Sidebar";
import mobi from "../src/assets/Desktop_home.jpeg";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <div className="relative h-[100vh] ">
        <img src={mobi} alt="mobiview" className="  h-full  object-cover" />

        <div className=" absolute top-0 left-0  right-0">
          <Sildebar />
        </div>
      </div>
    </div>
  );
}

export default App;
