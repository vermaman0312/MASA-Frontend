import { Notebook } from "lucide-react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateNotePageLayout from "../../../layouts/private-layouts/private-notes-layout/page.student.layout";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthNotesPage = () => {
  return (
    <CustomSideBar>
      <div className="flex flex-col items-start justify-between">
        <div className="flex items-center gap-2">
          <Notebook />
          <CustomLabel className="text-xl font-display font-bold">
            Notes
          </CustomLabel>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <PrivateNotePageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthNotesPage;
