import { ChevronRight } from "lucide-react";
import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
type props = {
  appName: string;
  appDescription: string;
  appIcon: React.ReactNode;
  onClick?: () => void;
};

const PrivateVMeetOnlineAppActiveAppDetailsComponent = ({
  appName,
  appDescription,
  appIcon,
  onClick,
}: props) => {
  return (
    <div
      onClick={onClick}
      className="w-full flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center justify-center gap-4">
        <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
          {appIcon}
        </div>
        <div className="flex flex-col">
          <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
            {appName}
          </CustomLabel>
          <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
            {appDescription}
          </CustomLabel>
        </div>
      </div>
      <div>
        <ChevronRight className="text-[#9CA3AF]" />
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppActiveAppDetailsComponent;
