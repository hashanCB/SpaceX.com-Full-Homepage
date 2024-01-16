import React, { useState } from "react";

const Hamburger = () => {
  const [isopen, SetIsopen] = useState(false);

  const ChangeHanurger = () => {
    SetIsopen(!isopen);
  };

  const hamburger = "space-y-1 cursor-pointer";
  const cross = "space-y-1 cursor-pointer ";
  const line = "w-4 h-0.5 bg-white transition-transform  duration-300  ";

  return (
    <div>
      <div
        className={`${isopen ? cross : hamburger} `}
        onClick={ChangeHanurger}
      >
        <div
          className={`${line}  ${
            isopen ? "rotate-45 translate-y-[4px]   " : ""
          }`}
        ></div>
        <div className={`${line} ${isopen ? "opacity-0" : ""}`}></div>
        <div
          className={`${line} ${
            isopen ? "-rotate-45 -translate-y-[8px] " : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Hamburger;
