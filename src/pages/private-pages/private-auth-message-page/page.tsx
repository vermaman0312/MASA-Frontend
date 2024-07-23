import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateMessagePageLayout from "../../../layouts/private-layouts/private-message-layout/page.common.layout";
import { MessageCircleMore } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthMessagePage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <MessageCircleMore />
          <CustomLabel className="text-xl font-display font-bold">
            Message
          </CustomLabel>
        </div>
      }
    >
      <div className="w-full mt-5" style={{ height: "calc(100vh - 160px)" }}>
        <PrivateMessagePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthMessagePage;
