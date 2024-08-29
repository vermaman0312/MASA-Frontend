import React from "react";
import "./vmeet-loader.style.css";

const CustomVMeetLoader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#101826]">
      <div className="box">
        <div className="container">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  );
};

export default CustomVMeetLoader;
