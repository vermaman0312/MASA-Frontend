import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateApplicationPageLayout from "../../../layouts/private-layouts/private-application-layout/page.layout";
import { AppWindowMac } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthApplicationPage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <AppWindowMac />
          <CustomLabel className="text-xl font-display font-bold">
            Applications
          </CustomLabel>
        </div>
      }
    >
      <div className="w-full mt-5" style={{ height: "calc(100vh - 160px)" }}>
        <PrivateApplicationPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthApplicationPage;
