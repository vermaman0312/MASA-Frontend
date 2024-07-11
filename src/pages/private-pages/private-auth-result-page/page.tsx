import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateResultPageLayout from "../../../layouts/private-layouts/private-result-layout/page.common.layout";
import { RectangleEllipsis } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthResultPage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RectangleEllipsis />
          <CustomLabel className="text-xl font-display font-bold">
            Results
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateResultPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthResultPage;
