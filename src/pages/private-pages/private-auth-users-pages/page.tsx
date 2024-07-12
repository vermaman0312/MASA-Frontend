import React from "react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import { Users } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PrivateUsersPageLayout from "../../../layouts/private-layouts/private-users-layout/page.layout";

const PrivateAuthUsersPage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="w-full flex items-center gap-2">
          <Users />
          <CustomLabel className="text-xl font-display font-bold">
            Users
          </CustomLabel>
        </div>
      }
    >
      <div className="w-full mt-5" style={{ height: "calc(100vh - 160px)" }}>
        <PrivateUsersPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthUsersPage;
