import { Loader } from "lucide-react";
import React from "react";

const CustomLoader = () => {
  return (
    <div className="w-screen h-screen absolute bg-gray-500 bg-opacity-75 flex items-center justify-center transform transition-all zoom-in">
      <div className="bg-blue-100 p-5 rounded-xl shadow-lg">
        <Loader className="animate-spin" />
      </div>
    </div>
  );
};

export default CustomLoader;
