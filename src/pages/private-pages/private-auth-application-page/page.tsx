import React from "react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateApplicationPageLayout from "../../../layouts/private-layouts/private-application-layout/page.common.layout";
import { AppWindowMac } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthApplicationPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AppWindowMac />
          <CustomLabel className="text-xl font-display font-bold">
            Applications
          </CustomLabel>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <PrivateApplicationPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthApplicationPage;
