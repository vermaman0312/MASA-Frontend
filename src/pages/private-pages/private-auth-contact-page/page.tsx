import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateContactPageLayout from "../../../layouts/private-layouts/private-contacts-layout/page.layout";
import { Contact } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import "../../../css/scroll-container.css";

const PrivateAuthContactPage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <Contact />
          <CustomLabel className="text-xl font-display font-bold">
            Contacts
          </CustomLabel>
        </div>
      }
    >
      <div className="w-full mt-5" style={{ height: "calc(100vh - 160px)" }}>
        <PrivateContactPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthContactPage;
