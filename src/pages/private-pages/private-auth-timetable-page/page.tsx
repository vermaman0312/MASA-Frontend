import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateTimeTablePageLayout from "../../../layouts/private-layouts/private-time-table-layout/page.layout";
import { Timer } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import "../../../css/scroll-container.css";

const PrivateAuthTimeTablePage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <Timer />
          <CustomLabel className="text-xl font-display font-bold">
            Time Table
          </CustomLabel>
        </div>
      }
    >
      <div
        className="w-full mt-5 scroll-container"
        style={{ height: "calc(100vh - 160px)" }}
      >
        <PrivateTimeTablePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthTimeTablePage;
