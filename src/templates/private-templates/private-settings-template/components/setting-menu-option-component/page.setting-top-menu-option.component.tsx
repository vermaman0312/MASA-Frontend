import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";

type props = {
  option?: string;
  onClickDashboardSetting?: () => void;
  onClickEditProfile?: () => void;
  onClickNotificationSetting?: () => void;
  onClickSetup2FA?: () => void;
  onClickChangePassword?: () => void;
  onClickPrivacyPolicies?: () => void;
};

const PrivateSettingTopMenuOptionPageComponent = ({
  option,
  onClickDashboardSetting,
  onClickEditProfile,
  onClickNotificationSetting,
  onClickSetup2FA,
  onClickChangePassword,
  onClickPrivacyPolicies,
}: props) => {
  return (
    <div className="w-full md:hidden overflow-x-auto scroll-container flex items-center justify-start gap-2">
      <CustomLabel
        onClick={onClickDashboardSetting}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "dashboardSetting"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Dashboard setting
      </CustomLabel>
      <CustomLabel
        onClick={onClickEditProfile}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "editProfile"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Edit profile
      </CustomLabel>
      <CustomLabel
        onClick={onClickNotificationSetting}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "notificationSetting"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Notification setting
      </CustomLabel>
      <CustomLabel
        onClick={onClickSetup2FA}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "setup2FA"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Setup 2FA
      </CustomLabel>
      <CustomLabel
        onClick={onClickChangePassword}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "changePassword"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Change password
      </CustomLabel>
      <CustomLabel
        onClick={onClickPrivacyPolicies}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "privacyPolicies"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Privacy policies
      </CustomLabel>
    </div>
  );
};

export default PrivateSettingTopMenuOptionPageComponent;
