import { LayoutDashboard } from "lucide-react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateDashboardPageLayout from "../../../layouts/private-layouts/private-dashboard-layout/page.student.layout";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthDashboardPage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard />
          <CustomLabel className="text-xl font-display font-bold">
            Dashboard
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateDashboardPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthDashboardPage;
