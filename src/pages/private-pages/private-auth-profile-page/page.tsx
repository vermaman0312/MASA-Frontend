import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateProfilePageLayout from "../../../layouts/private-layouts/private-profile-layout/page.layout";
import { User } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthProfilePage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <User />
          <CustomLabel className="text-xl font-display font-bold">
            Profile
          </CustomLabel>
        </div>
      }
    >
      <div className="w-full mt-5" style={{ height: "calc(100vh - 160px)" }}>
        <PrivateProfilePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthProfilePage;
