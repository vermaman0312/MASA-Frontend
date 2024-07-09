import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateTasksheetPageLayout from "../../../layouts/private-layouts/private-tasksheet-layout/page.student.layout";
import { ClipboardList } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthTasksheetPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ClipboardList />
          <CustomLabel className="text-xl font-display font-bold">
            Tasksheet
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateTasksheetPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthTasksheetPage;
