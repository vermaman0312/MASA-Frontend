import React from "react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import { Users } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PrivateUsersPageLayout from "../../../layouts/private-layouts/private-users-layout/page.common.layout";

const PrivateAuthUsersPage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center">
        <div className="w-full flex items-center gap-2">
          <Users />
          <CustomLabel className="text-xl font-display font-bold">
            Users
          </CustomLabel>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <PrivateUsersPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthUsersPage;
