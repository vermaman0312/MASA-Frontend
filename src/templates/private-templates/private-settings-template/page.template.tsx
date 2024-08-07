import PrivateSettingSetup2FAPageTemplate from "./page.setup-2FA.template";
import PrivateSettingEditProfilePageTemplate from "./page.edit-profile.template";
import PrivateSettingNotificationSettingPageTemplate from "./page.notification-setting.template";
import PrivateSettingChangePasswordPageTemplate from "./page.change-password.template";
import PrivateSettingPrivacyPoliciesPageTemplate from "./page.privacy-policies.template";
import PrivateSettingDashboardSettingPageTemplate from "./page.dashboard-setting.template";

type props = {
  menuOption?: string;
};

const PrivateSettingPageTemplate = ({ menuOption }: props) => {
  return (
    <div className="w-full h-full">
      {menuOption === "editProfile" ? (
        <PrivateSettingEditProfilePageTemplate />
      ) : menuOption === "notificationSetting" ? (
        <PrivateSettingNotificationSettingPageTemplate />
      ) : menuOption === "setup2FA" ? (
        <PrivateSettingSetup2FAPageTemplate />
      ) : menuOption === "changePassword" ? (
        <PrivateSettingChangePasswordPageTemplate />
      ) : menuOption === "privacyPolicies" ? (
        <PrivateSettingPrivacyPoliciesPageTemplate />
      ) : (
        <PrivateSettingDashboardSettingPageTemplate />
      )}
    </div>
  );
};

export default PrivateSettingPageTemplate;
