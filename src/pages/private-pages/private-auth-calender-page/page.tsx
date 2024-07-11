import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateCalenderPageLayout from "../../../layouts/private-layouts/private-calender-layout/page.common.layout";
import { CalendarDays } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthCalenderPage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays />
          <CustomLabel className="text-xl font-display font-bold">
            Calender
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateCalenderPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthCalenderPage;
