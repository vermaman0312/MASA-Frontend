import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateTimeTablePageLayout from "../../../layouts/private-layouts/private-time-table-layout/page.student.layout";
import { Timer } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthTimeTablePage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Timer />
          <CustomLabel className="text-xl font-display font-bold">
            Time Table
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateTimeTablePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthTimeTablePage;
