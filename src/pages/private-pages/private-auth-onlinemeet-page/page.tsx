import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateOnlineMeetPageLayout from "../../../layouts/private-layouts/private-online-meet-layout/page.common.layout";
import { Radio } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthOnlineMeetPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio />
          <CustomLabel className="text-xl font-display font-bold">
            Online Meet
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateOnlineMeetPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthOnlineMeetPage;
