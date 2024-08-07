import "../../../css/scroll-container.css";
import { useState } from "react";
import PrivateSettingSideMenuOptionPageComponent from "../../../templates/private-templates/private-settings-template/components/setting-menu-option-component/page.setting-side-menu-option.component";
import PrivateSettingTopMenuOptionPageComponent from "../../../templates/private-templates/private-settings-template/components/setting-menu-option-component/page.setting-top-menu-option.component";
import PrivateSettingPageTemplate from "../../../templates/private-templates/private-settings-template/page.template";

const PrivateSettingPageLayout = () => {
  const [settingMenu, setSettingMenu] = useState<string>("dashboardSetting");
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-2">
        {/* SIDE MENU OPTION */}
        <PrivateSettingSideMenuOptionPageComponent
          option={settingMenu}
          onClickDashboardSetting={() => setSettingMenu("dashboardSetting")}
          onClickEditProfile={() => setSettingMenu("editProfile")}
          onClickNotificationSetting={() =>
            setSettingMenu("notificationSetting")
          }
          onClickSetup2FA={() => setSettingMenu("setup2FA")}
          onClickChangePassword={() => setSettingMenu("changePassword")}
          onClickPrivacyPolicies={() => setSettingMenu("privacyPolicies")}
        />
        {/* TOP MENU OPTION */}
        <PrivateSettingTopMenuOptionPageComponent
          option={settingMenu}
          onClickDashboardSetting={() => setSettingMenu("dashboardSetting")}
          onClickEditProfile={() => setSettingMenu("editProfile")}
          onClickNotificationSetting={() =>
            setSettingMenu("notificationSetting")
          }
          onClickSetup2FA={() => setSettingMenu("setup2FA")}
          onClickChangePassword={() => setSettingMenu("changePassword")}
          onClickPrivacyPolicies={() => setSettingMenu("privacyPolicies")}
        />
        <div className="w-full h-full scroll-container">
          <PrivateSettingPageTemplate menuOption={settingMenu} />
        </div>
      </div>
    </div>
  );
};

export default PrivateSettingPageLayout;
