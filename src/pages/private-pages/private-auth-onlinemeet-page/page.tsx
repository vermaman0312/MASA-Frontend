import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateOnlineMeetPageLayout from "../../../layouts/private-layouts/private-online-meet-layout/page.layout";
import { Radio } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import "../../../css/scroll-container.css";

const PrivateAuthOnlineMeetPage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <Radio />
          <CustomLabel className="text-xl font-display font-bold">
            V.MEET
          </CustomLabel>
        </div>
      }
    >
      <div
        className="w-full mt-5 scroll-container"
        style={{ height: "calc(100vh - 160px)" }}
      >
        <PrivateOnlineMeetPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthOnlineMeetPage;
