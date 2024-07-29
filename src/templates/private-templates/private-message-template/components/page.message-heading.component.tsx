import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { EllipsisVertical, Search } from "lucide-react";
import CustomMenuDropdown from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";

type props = {
  isCompose?: boolean;
  onClickAllMessage?: () => void;
  onClickUnRead?: () => void;
  onClickCompose?: () => void;
  isUnread?: boolean;
};

const PrivateMessageHeadingPageComponent = ({
  isCompose,
  onClickAllMessage,
  onClickUnRead,
  onClickCompose,
  isUnread,
}: props) => {
  return (
    <div className="w-full border-b p-2 flex items-center justify-between">
      <div>
        <CustomLabel className="font-display font-bold text-xl">
          {isCompose ? "New Message" : "Inbox"}
        </CustomLabel>
      </div>
      <div className="flex items-center gap-2">
        {!isCompose && (
          <div className="border flex items-center gap-1 p-2 rounded-full">
            <input
              type="text"
              className="outline-none border-none text-xs ml-1 font-display"
              placeholder="Search..."
            />
            <Search className="w-4 h-4" />
          </div>
        )}
        {!isCompose && (
          <div className="p-1 flex items-center justify-between rounded-md bg-gray-200 gap-1 hidden md:flex">
            <CustomLabel
              onClick={onClickAllMessage}
              className={`w-24 flex items-center justify-center font-display text-xs p-1 ${
                !isUnread && "bg-white rounded-md shadow-md"
              } cursor-pointer ${
                !isUnread ? "text-gray-700" : "text-gray-500"
              }`}
            >
              All Message
            </CustomLabel>
            <CustomLabel
              onClick={onClickUnRead}
              className={`w-24 flex items-center justify-center font-display text-xs p-1 ${
                isUnread && "bg-white rounded-md shadow-md"
              } cursor-pointer ${isUnread ? "text-gray-700" : "text-gray-500"}`}
            >
              Unread
            </CustomLabel>
          </div>
        )}
        {!isCompose && (
          <div
            onClick={onClickCompose}
            className="w-24 bg-[#222222] flex items-center justify-center gap-1 p-2 rounded-lg hidden md:flex cursor-pointer"
          >
            <CustomLabel className="font-display text-xs text-white cursor-pointer">
              Compose
            </CustomLabel>
          </div>
        )}
        <div className="md:hidden flex items-center">
          <CustomMenuDropdown
            buttonComponent={<EllipsisVertical />}
            marginRight="mr-4"
            marginTop="mt-4"
          >
            <DropdownMenuItem
              onClick={onClickCompose}
              className="hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <span className="font-display text-xs">Compose</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onClickAllMessage}
              className="hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <span className="font-display text-xs">All Message</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={onClickUnRead}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <span className="font-display text-xs">Unread</span>
            </DropdownMenuItem>
          </CustomMenuDropdown>
        </div>
      </div>
    </div>
  );
};

export default PrivateMessageHeadingPageComponent;
