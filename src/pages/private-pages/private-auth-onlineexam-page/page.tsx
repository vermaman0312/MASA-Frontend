import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateOnlineExamPageLayout from "../../../layouts/private-layouts/private-online-exam-layout/page.student.layout";
import { Layers3 } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthOnlineExamPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers3 />
          <CustomLabel className="text-xl font-display font-bold">
            Online Exam
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateOnlineExamPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthOnlineExamPage;
