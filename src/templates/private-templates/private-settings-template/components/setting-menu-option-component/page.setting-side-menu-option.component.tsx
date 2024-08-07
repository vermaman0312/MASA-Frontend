import {
  Bell,
  ChevronRight,
  Edit,
  Fingerprint,
  LayoutDashboard,
  RectangleEllipsis,
  Vote,
} from "lucide-react";
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

const PrivateSettingSideMenuOptionPageComponent = ({
  option,
  onClickDashboardSetting,
  onClickEditProfile,
  onClickNotificationSetting,
  onClickSetup2FA,
  onClickChangePassword,
  onClickPrivacyPolicies,
}: props) => {
  return (
    <div className="h-full hidden md:flex flex-col gap-2 w-[20rem]">
      <div
        onClick={onClickDashboardSetting}
        className={`w-full flex items-start justify-between gap-4 p-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer`}
      >
        <div className="w-full flex items-center justify-start gap-4">
          <LayoutDashboard className="w-4 h-4 text-gray-600" />
          <CustomLabel className="cursor-pointer text-gray-600">
            Dashboard setting
          </CustomLabel>
        </div>
        {option === "dashboardSetting" && (
          <div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
      <div
        onClick={onClickEditProfile}
        className={`w-full flex items-start justify-between gap-4 p-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer`}
      >
        <div className="w-full flex items-center justify-start gap-4">
          <Edit className="w-4 h-4 text-gray-600" />
          <CustomLabel className="cursor-pointer text-gray-600">
            Edit profile
          </CustomLabel>
        </div>
        {option === "editProfile" && (
          <div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
      <div
        onClick={onClickNotificationSetting}
        className={`w-full flex items-start justify-between gap-4 p-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer`}
      >
        <div className="w-full flex items-center justify-start gap-4">
          <Bell className="w-4 h-4 text-gray-600" />
          <CustomLabel className="cursor-pointer text-gray-600">
            Notification setting
          </CustomLabel>
        </div>
        {option === "notificationSetting" && (
          <div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
      <div
        onClick={onClickSetup2FA}
        className={`w-full flex items-start justify-between gap-4 p-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer`}
      >
        <div className="w-full flex items-center justify-start gap-4">
          <Fingerprint className="w-4 h-4 text-gray-600" />
          <CustomLabel className="cursor-pointer text-gray-600">
            Setup 2FA
          </CustomLabel>
        </div>
        {option === "setup2FA" && (
          <div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
      <div
        onClick={onClickChangePassword}
        className={`w-full flex items-start justify-between gap-4 p-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer`}
      >
        <div className="w-full flex items-center justify-start gap-4">
          <RectangleEllipsis className="w-4 h-4 text-gray-600" />
          <CustomLabel className="cursor-pointer text-gray-600">
            Change password
          </CustomLabel>
        </div>
        {option === "changePassword" && (
          <div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
      <div
        onClick={onClickPrivacyPolicies}
        className={`w-full flex items-start justify-between gap-4 p-2 hover:bg-gray-200 rounded-lg transition-all cursor-pointer`}
      >
        <div className="w-full flex items-center justify-start gap-4">
          <Vote className="w-4 h-4 text-gray-600" />
          <CustomLabel className="cursor-pointer text-gray-600">
            Privacy policies
          </CustomLabel>
        </div>
        {option === "privacyPolicies" && (
          <div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateSettingSideMenuOptionPageComponent;
