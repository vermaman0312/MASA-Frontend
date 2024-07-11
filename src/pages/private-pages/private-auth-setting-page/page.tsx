import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateSettingPageLayout from "../../../layouts/private-layouts/private-setting-layout/page.common.layout";
import { Settings } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthSettingPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings />
          <CustomLabel className="text-xl font-display font-bold">
            Settings
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateSettingPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthSettingPage;
