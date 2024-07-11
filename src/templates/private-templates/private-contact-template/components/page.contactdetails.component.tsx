import React from "react";
import { getRandomColor } from "../../../../themes/color";
import CustomAvatar from "../../../../components/custom-avatar/custom-avatar.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

type props = {
  key?: number;
  firstName?: string;
  lastName?: string;
  userProfileImage?: string;
  role?: string;
  emailAddress?: string;
  phoneNumber?: string;
  buttonTitle?: string;
  onClick?: () => void;
};

const PrivateContactCardDetailPageComponent = ({
  key,
  firstName,
  lastName,
  userProfileImage,
  role,
  emailAddress,
  phoneNumber,
  buttonTitle,
  onClick,
}: props) => {
  return (
    <div
      key={key}
      className="w-full rounded-lg shadow-md flex items-center justify-center flex-col cursor-pointer p-4"
      style={{ background: getRandomColor() }}
    >
      <div>
        <CustomAvatar
          src={userProfileImage ?? "https://github.com/shadcn.png"}
          title={`${firstName} ${lastName}`}
        />
      </div>
      <div className="w-full truncate flex items-center justify-center mt-2">
        <CustomLabel className="font-display text-xs font-bold cursor-pointer">
          {`${firstName} ${lastName}`}
        </CustomLabel>
      </div>
      <div className="w-full truncate flex items-center justify-center">
        <CustomLabel className="font-display text-xs font-medium cursor-pointer text-blue-600">
          {role ? role : "Student"}
        </CustomLabel>
      </div>
      <div className="w-full truncate flex items-center justify-center">
        <CustomLabel className="font-display text-xs font-light cursor-pointer truncate">
          <a
            href={`mailto:${emailAddress}`}
            className="font-display text-xs font-light cursor-pointer truncate hover:text-blue-600"
          >
            {emailAddress}
          </a>
        </CustomLabel>
      </div>
      <div className="w-full truncate flex items-center justify-center">
        <CustomLabel className="font-display text-xs font-light cursor-pointer">
          <a
            href={`tel:${phoneNumber}`}
            className="font-display text-xs font-light cursor-pointer hover:text-blue-600"
          >
            {phoneNumber}
          </a>
        </CustomLabel>
      </div>
      <div className="mt-2">
        <button
          onClick={onClick}
          className="text-xs border w-24 p-2 rounded-xl font-display bg-[#0d1b2a] text-white"
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default PrivateContactCardDetailPageComponent;
