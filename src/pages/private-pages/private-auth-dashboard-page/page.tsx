import { LayoutDashboard } from "lucide-react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateDashboardPageLayout from "../../../layouts/private-layouts/private-dashboard-layout/page.common.layout";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { useGetDeviceDetailsMutation } from "../../../api/mutations/private-mutation/authentication-device-details.private.mutation";
import { useEffect } from "react";

const PrivateAuthDashboardPage = () => {
  const token = localStorage.getItem("token");
  const deviceDetails = useGetDeviceDetailsMutation();

  useEffect(() => {
    deviceDetails.mutate({ verifyToken: "123", token: token as string });
  }, []);

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
