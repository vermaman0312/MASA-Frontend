import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { EllipsisVertical } from "lucide-react";

const PrivateVMeetOnlineChatHeaderPageComponent = () => {
  return (
    <div className="w-full bg-[#1F2937] bg-opacity-50 p-4 flex items-center justify-between">
      <CustomLabel className="text-md font-semibold font-display text-[#9CA3AF]">{`Chat ${`(${5})`}`}</CustomLabel>
      <EllipsisVertical className="text-[#9CA3AF] cursor-pointer" />
    </div>
  );
};

export default PrivateVMeetOnlineChatHeaderPageComponent;
