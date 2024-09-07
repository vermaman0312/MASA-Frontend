import { ChevronLeft } from "lucide-react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";

type props = {
  onClickBack?: () => void;
};

const PrivateVMeetOnlineAppFormDetailsPageComponent = ({
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
          Registration Form
        </CustomLabel>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
          Building your immersive portfolio using virtual worlds
        </CustomLabel>
        <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-center">
          ​In this interactive event, we will talk about how virtual worlds can
          be the next medium to deliver immersive portfolio for designers,
          photographer, & story tellers.
        </CustomLabel>
      </div>
      <div
        className="border w-full"
        style={{
          minHeight: "calc(100vh - 330px)",
          maxHeight: "calc(100vh - 200px)",
          overflowY: "auto",
          boxSizing: "inherit"
        }}
      ></div>
    </div>
  );
};

export default PrivateVMeetOnlineAppFormDetailsPageComponent;
