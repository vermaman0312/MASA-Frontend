import { Disc, Hand, ShieldCheck } from "lucide-react";
import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

type props = {
  isHandsUp?: boolean;
  isRecordingOn?: boolean;
};

const PrivateVMeetOnlineMainHeaderPageComponent = ({
  isHandsUp,
  isRecordingOn,
}: props) => {
  return (
    <div className="w-full border-b-2 border-[#374151] border-opacity-50 p-4 bg-[#1F2937] bg-opacity-50 flex items-center justify-between gap-4">
      <div className="p-1.5 flex items-center gap-2 text-[#9CA3AF] font-display">
        <ShieldCheck className="text-[#9CA3AF]" />
        Logo
      </div>

      <div className="w-full h-full rounded-xl flex items-center justify-center text-white"></div>

      <div className="flex items-center gap-5">
        {isHandsUp && (
          <div>
            <Hand className="text-[#9CA3AF]" />
          </div>
        )}
        {isRecordingOn && (
          <button className="flex items-center justify-center gap-2 border-2 border-[#374151] border-opacity-50 p-2 w-32 bg-[#374151] bg-opacity-50 rounded-xl">
            <Disc className="w-4 h-4 text-red-500 font-bold animate-pulse" />
            <CustomLabel className="text-[#9CA3AF] font-display font-normal">
              13:50:00
            </CustomLabel>
          </button>
        )}
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineMainHeaderPageComponent;
