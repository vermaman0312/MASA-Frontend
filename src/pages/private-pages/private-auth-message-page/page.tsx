import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateMessagePageLayout from "../../../layouts/private-layouts/private-message-layout/page.common.layout";
import { MessageCircleMore } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthMessagePage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircleMore />
          <CustomLabel className="text-xl font-display font-bold">
            Message
          </CustomLabel>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <PrivateMessagePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthMessagePage;
