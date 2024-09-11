import { ChevronLeft } from "lucide-react";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";
import PrivateVMeetOnlineAppSmartNotesTextEditorPageComponent from "./page.vmeet-online-app.smart-notes-text-editor.component";

type props = {
  onClickBack: () => void;
};

const PrivateVMeetOnlineAppSmartNotesPageComponent = ({
  onClickBack,
}: props) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2 p-4">
        <ChevronLeft
          onClick={onClickBack}
          className="w-5 h-5 text-[#6B7280] cursor-pointer"
        />
        <CustomLabel className="text-lg text-[#6B7280] font-display">
          Smart Notes
        </CustomLabel>
      </div>
      <div
        className="w-full scroll-container bg-gray-700"
        style={{
          height: "calc(100vh - 140px)",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <PrivateVMeetOnlineAppSmartNotesTextEditorPageComponent />
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppSmartNotesPageComponent;
