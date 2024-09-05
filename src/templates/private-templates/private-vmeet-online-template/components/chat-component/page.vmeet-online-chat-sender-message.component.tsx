import moment from "moment";
import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";

const PrivateVMeetOnlineChatSenderMessagePageComponent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full flex items-center">
        <div className="w-full">
          <p className="whitespace-no-wrap font-display font-normal text-xs">
            <span className="text-gray-400">from</span>{" "}
            <span className="text-[#2D8cFF]">You</span>{" "}
            <span className="text-gray-400">to</span>{" "}
            <span className="text-[#2D8cFF]">Everyone</span>
          </p>
        </div>
        <div className="ml-3 flex items-center justify-between gap-3">
          <p className="whitespace-no-wrap font-display font-normal text-xs text-gray-400 whitespace-nowrap">
            {moment(new Date()).fromNow()}
          </p>
          <div className="flex-shrink-0 w-8 h-8">
            <img
              className="w-full h-full rounded-full"
              src={`https://randomuser.me/api/portraits/women/14.jpg`}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="border-2 border-[#2D8CFF] border-opacity-10 bg-[#2D8CFF] bg-opacity-10 mr-11 p-2 flex items-center justify-start rounded-xl">
          <CustomLabel className="text-xs font-display text-[#D1D5DB]">
            I am great, thanks! How are you?
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineChatSenderMessagePageComponent;
