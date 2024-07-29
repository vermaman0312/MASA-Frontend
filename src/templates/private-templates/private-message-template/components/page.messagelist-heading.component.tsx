import React from "react";
import CustomToolTip from "../../../../components/custom-tooltip/custom-tooltip.component";
import {
  Archive,
  ArchiveX,
  Inbox,
  Package2,
  Send,
  SquarePen,
  Trash2,
  Users,
} from "lucide-react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

const PrivateMessageListHeadingPageComponent = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-2 border-b p-[0.33rem] scroll-container">
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<Inbox className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Inbox
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<Users className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Social
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<Archive className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Archive
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<ArchiveX className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Junk
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<Send className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Sent
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<SquarePen className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Draft
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<Package2 className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Promotion
          </CustomLabel>
        </CustomToolTip>
      </div>
      <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
        <CustomToolTip
          icon={<Trash2 className="w-4 h-4 cursor-pointer" />}
          className="bg-[#0d1b2a] border-none"
        >
          <CustomLabel className="text-white font-display text-xs">
            Deleted
          </CustomLabel>
        </CustomToolTip>
      </div>
    </div>
  );
};

export default PrivateMessageListHeadingPageComponent;
