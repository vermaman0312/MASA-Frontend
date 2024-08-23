import React from "react";
import CustomSignatureName from "../../../../components/custom-signature-name/custom-signature-name.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

type props = {
  userName?: string;
  userProfileImage?: string;
  userGender?: string;
  userRole?: string;
};

const PrivateProfileCardPageComponent = ({
  userName,
  userProfileImage,
  userGender,
  userRole,
}: props) => {
  return (
    <div className="w-full h-[10rem] p-1">
      <div className="w-full h-full bg-white rounded-xl shadow-md shadow-gray-500">
        <CustomSignatureName userName={userName} />
      </div>
      <div className="w-[5rem] h-[5rem] bg-gray-200 rounded-full relative -top-10 left-[5%] shadow-md shadow-gray-500 z-1">
        <img
          className="w-full h-full rounded-full"
          src={
            userGender?.toLowerCase() === "male"
              ? userProfileImage
                ? userProfileImage
                : "https://randomuser.me/api/portraits/men/1.jpg"
              : userProfileImage
              ? userProfileImage
              : "https://randomuser.me/api/portraits/women/18.jpg"
          }
          alt=""
        />
      </div>
      <div className="w-full relative -top-16 flex flex-col items-end justify-end">
        <CustomLabel className="font-display text-lg text-gray-500">
          {userName}
        </CustomLabel>
        <CustomLabel className="font-display text-xs text-gray-400">
          {userRole}
        </CustomLabel>
      </div>
    </div>
  );
};

export default PrivateProfileCardPageComponent;
