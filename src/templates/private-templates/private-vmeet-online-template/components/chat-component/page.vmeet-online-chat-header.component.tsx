import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { EllipsisVertical, LockKeyhole, Trash2 } from "lucide-react";
import CustomMenuDropdown from "../../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";

const PrivateVMeetOnlineChatHeaderPageComponent = () => {
  return (
    <div className="w-full bg-[#1F2937] bg-opacity-50 p-4 flex items-center justify-between">
      <CustomLabel className="text-md font-semibold font-display text-[#9CA3AF]">{`Chat ${`(${5})`}`}</CustomLabel>
      <CustomMenuDropdown
        buttonComponent={
          <EllipsisVertical className="text-[#9CA3AF] cursor-pointer" />
        }
        marginRight="mr-6"
        backgroundColor="bg-[#374151]"
        border="border-none"
      >
        <DropdownMenuItem
          onClick={() => alert("Clear chat")}
          className="hover:bg-[#374151] hover:bg-opacity-50 cursor-pointer gap-2 flex p-1.5 rounded-lg hover:text-white"
        >
          <Trash2 className="w-4 h-4 text-[#9CA3AF]" />
          <span className="font-display text-xs text-[#9CA3AF]">
            Clear Chat
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => alert("Clear chat")}
          className="hover:bg-[#374151] hover:bg-opacity-50 cursor-pointer gap-2 flex p-1.5 rounded-lg hover:text-white"
        >
          <LockKeyhole className="w-4 h-4 text-[#9CA3AF]" />
          <span className="font-display text-xs text-[#9CA3AF]">
            Lock chat
          </span>
        </DropdownMenuItem>
      </CustomMenuDropdown>
    </div>
  );
};

export default PrivateVMeetOnlineChatHeaderPageComponent;
