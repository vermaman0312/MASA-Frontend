import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import moment from "moment";

const PrivateVMeetOnlineChatReceiverMessagePageComponent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full flex items-center">
        <div className="flex-shrink-0 w-8 h-8">
          <img
            className="w-full h-full rounded-full"
            src={`https://randomuser.me/api/portraits/women/18.jpg`}
            alt=""
          />
        </div>
        <div className="ml-3 w-full flex items-center justify-between">
          <p className="whitespace-no-wrap font-display font-normal text-xs">
            <span className="text-gray-400">from</span>{" "}
            <span className="text-[#2D8cFF]">Aman Verma</span>{" "}
            <span className="text-gray-400">to</span>{" "}
            <span className="text-[#2D8cFF]">Everyone</span>
          </p>

          <p className="whitespace-no-wrap font-display font-normal text-xs text-gray-400">
            {moment(new Date()).fromNow()}
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="border-2 border-[#4B5563] border-opacity-50 bg-[#374151] bg-opacity-50 ml-11 p-2 flex items-center justify-start rounded-xl">
          <CustomLabel className="text-xs font-display text-[#D1D5DB]">
            Hi there, how are you?
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineChatReceiverMessagePageComponent;
