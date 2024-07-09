import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateEditProfilePageLayout from "../../../layouts/private-layouts/private-edit-profile-layout/page.student.layout";
import { FilePenLine } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthEditProfilePage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FilePenLine />
          <CustomLabel className="text-xl font-display font-bold">
            Edit Profile
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateEditProfilePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthEditProfilePage;
