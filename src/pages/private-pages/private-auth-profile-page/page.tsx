import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateProfilePageLayout from "../../../layouts/private-layouts/private-profile-layout/page.common.layout";
import { User } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthProfilePage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <User />
          <CustomLabel className="text-xl font-display font-bold">
            Profile
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateProfilePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthProfilePage;
