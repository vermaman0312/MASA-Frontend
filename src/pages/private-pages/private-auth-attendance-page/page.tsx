import React from "react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateAttendancePageLayout from "../../../layouts/private-layouts/private-attendance-layout/page.common.layout";
import { PersonStanding } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthAttendancePage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PersonStanding />
          <CustomLabel className="text-xl font-display font-bold">
            Attendance
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateAttendancePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthAttendancePage;
