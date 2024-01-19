import React from "react";

const Info = ({ firstname, sendname, butttonname }) => {
  return (
    <div className=" absolute bottom-40 left-10  sm:ml-[12%] sm:mx-[2%]  ">
      <div>
        <p className=" uppercase text-[20px] text-white">{firstname}</p>
      </div>

      <div className=" uppercase text-[48px] text-white font-bold">
        {sendname}
      </div>

      <div className="mt-5">
        <button className=" w-[160px] h-[50px] border-white border-2 text-white text-center hover:bg-white hover:text-black hover:font-bold ">
          {butttonname}
        </button>
      </div>
    </div>
  );
};

export default Info;
