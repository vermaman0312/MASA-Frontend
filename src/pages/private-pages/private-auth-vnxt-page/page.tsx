import React from "react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateVNXTPageLayout from "../../../layouts/private-layouts/private-vnxt-layout/page.common.layout";
import { GalleryVertical } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthVNXTPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GalleryVertical />
          <CustomLabel className="text-xl font-display font-bold">
            V.NXT
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateVNXTPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthVNXTPage;
