import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateContactPageLayout from "../../../layouts/private-layouts/private-contacts-layout/page.student.layout";
import { Contact } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import "../../../css/scroll-container.css";

const PrivateAuthContactPage = () => {
  return (
    <CustomSideBar>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Contact />
          <CustomLabel className="text-xl font-display font-bold">
            Contacts
          </CustomLabel>
        </div>
      </div>
      <div className="w-full h-full mt-5 scroll-container">
        <PrivateContactPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthContactPage;
