import React, { useState } from "react";
import CustomSearchBox from "../../../../components/custom-searchbox/custom-searchbox.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { UserRoundCheck, UserRoundPlus } from "lucide-react";

const PrivateProfileFriendMentorPageComponent = () => {
  const [toggle, setToggle] = useState<string>("myMentors");
  return (
    <div className="w-full md:w-[25rem] h-full flex flex-col items-start gap-2">
      <div className="border w-full md:w-[25rem] h-full flex flex-col items-center justify-between shadow-sm rounded-lg p-2 gap-2">
        <div className="w-full flex items-center justify-between gap-2 flex-wrap">
          <CustomSearchBox />
        </div>
        <div className="w-full flex items-center justify-center gap-2 flex-wrap">
          <div className="bg-gray-200 p-1 rounded-lg">
            <button
              onClick={() => setToggle("myMentors")}
              className={`w-32 text-xs font-display ${
                toggle === "myMentors"
                  ? "bg-gray-500 text-white transition-all"
                  : "text-gray-700"
              } p-1 rounded-lg`}
            >
              My Mentors
            </button>
            <button
              onClick={() => setToggle("myFriends")}
              className={`w-32 text-xs font-display ${
                toggle === "myFriends"
                  ? "bg-gray-500 text-white transition-all"
                  : "text-gray-700"
              } p-1 rounded-lg`}
            >
              My Friends
            </button>
          </div>
        </div>
        <div className="w-full h-full overflow-y-auto scroll-container flex flex-col gap-1">
          {toggle === "myMentors" ? (
            <div>
              <div className="border-b flex items-center justify-between p-2 cursor-pointer">
                <CustomLabel className="font-display cursor-pointer text-gray-700">
                  Aman Verma
                </CustomLabel>
                <CustomLabel className="p-1 bg-blue-300 flex items-center justify-center rounded-lg cursor-pointer text-xs font-display">
                  HOD
                </CustomLabel>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b flex items-center justify-between p-2 cursor-pointer">
                <CustomLabel className="font-display cursor-pointer text-gray-700">
                  Aman Verma
                </CustomLabel>
                <CustomLabel className="p-1 bg-green-300 flex items-center justify-center rounded-lg cursor-pointer">
                  <UserRoundCheck className="w-4 h-4 text-gray-700" />
                </CustomLabel>
              </div>
              <div className="border-b flex items-center justify-between p-2 cursor-pointer">
                <CustomLabel className="font-display cursor-pointer text-gray-700">
                  Aman Verma
                </CustomLabel>
                <CustomLabel className="p-1 bg-blue-600 flex items-center justify-center rounded-lg cursor-pointer">
                  <UserRoundPlus className="w-4 h-4 text-white" />
                </CustomLabel>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateProfileFriendMentorPageComponent;
