import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateSettingPageLayout from "../../../layouts/private-layouts/private-setting-layout/page.layout";
import { Settings } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthSettingPage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <Settings />
          <CustomLabel className="text-xl font-display font-bold">
            Settings
          </CustomLabel>
        </div>
      }
    >
      <div className="w-full mt-5" style={{ height: "calc(100vh - 160px)" }}>
        <PrivateSettingPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthSettingPage;
