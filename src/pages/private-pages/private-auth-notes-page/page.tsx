import { Notebook } from "lucide-react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateNotePageLayout from "../../../layouts/private-layouts/private-notes-layout/page.layout";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthNotesPage = () => {
  return (
    <CustomSideBar
      headerChildren={
        <div className="flex items-center gap-2">
          <Notebook />
          <CustomLabel className="text-xl font-display font-bold">
            Notes
          </CustomLabel>
        </div>
      }
    >
      <div
        className="w-full mt-5"
        style={{ width: "100%", height: "calc(100vh - 160px)" }}
      >
        <PrivateNotePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthNotesPage;
