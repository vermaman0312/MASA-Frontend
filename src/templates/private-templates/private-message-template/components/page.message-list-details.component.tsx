import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../../components/custom-context-menu/custom-context-menu.ui";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import moment from "moment";
import {
  BringToFront,
  MousePointer2,
  Save,
  SquareCheck,
  SquareLibrary,
  Trash2,
} from "lucide-react";

type props = {
  isMessageSelected?: Array<string>;
  onClick?: () => void;
};

const PrivateMessageListDetailsPageComponent = ({
  isMessageSelected,
  onClick,
}: props) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="border w-full rounded-lg p-2 bg-gray-100">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isMessageSelected && isMessageSelected[0] && (
                  <SquareCheck className="w-5 h-5 text-[#0d1b2a] rounded-md" />
                )}
                <CustomLabel className="font-display text-md text-gray-600">
                  Aman Verma
                </CustomLabel>
                <div className="w-2 h-2 bg-blue-700 rounded-full" />
              </div>
              <CustomLabel className="font-display text-xs font-light text-gray-400">
                {moment(new Date()).fromNow()}
              </CustomLabel>
            </div>
            <div className="w-full flex items-center justify-between">
              <CustomLabel className="font-display text-xs text-gray-600">
                Parent Meeting
              </CustomLabel>
            </div>
            <div className="w-full flex items-center justify-between mt-3">
              <CustomLabel className="font-display text-xs font-light text-gray-600 truncate-2-lines">
                Dear parent, good morning, I want to inform you that, tommorow
                we have meeting at 12 pm. so kindly request to you please come
                to school. thankyou for your understanding.
              </CustomLabel>
            </div>
            <div className="w-full flex items-center flex-wrap justify-start gap-2 mt-3">
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Meeting
                </CustomLabel>
              </button>
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Important
                </CustomLabel>
              </button>
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Work
                </CustomLabel>
              </button>
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Tasksheet
                </CustomLabel>
              </button>
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Attendance
                </CustomLabel>
              </button>
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Complaint
                </CustomLabel>
              </button>
              <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                <CustomLabel className="text-xs text-white font-light font-display p-1">
                  Announcement
                </CustomLabel>
              </button>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-[10rem] hover:border-none focus:border-none">
          <ContextMenuItem
            inset
            className="w-full flex items-center justify-between"
          >
            <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
              Select
            </CustomLabel>
            <MousePointer2 className="w-4 h-4 text-gray-500" />
          </ContextMenuItem>
          <ContextMenuItem
            inset
            className="w-full flex items-center justify-between"
          >
            <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
              Mark as read
            </CustomLabel>
            <SquareLibrary className="w-4 h-4 text-gray-500" />
          </ContextMenuItem>
          <ContextMenuItem
            inset
            className="w-full flex items-center justify-between"
          >
            <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
              Move to archive
            </CustomLabel>
            <BringToFront className="w-4 h-4 text-gray-500" />
          </ContextMenuItem>
          <ContextMenuItem
            inset
            className="w-full flex items-center justify-between"
          >
            <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
              Move to junk
            </CustomLabel>
            <BringToFront className="w-4 h-4 text-gray-500" />
          </ContextMenuItem>
          <ContextMenuItem
            inset
            className="w-full flex items-center justify-between"
          >
            <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
              Save
            </CustomLabel>
            <Save className="w-4 h-4 text-gray-500" />
          </ContextMenuItem>
          <ContextMenuItem
            inset
            className="w-full flex items-center justify-between text-red-500"
          >
            <CustomLabel className="text-xs font-display cursor-pointer text-red-500">
              Delete
            </CustomLabel>
            <Trash2 className="w-4 h-4 text-red-500" />
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};

export default PrivateMessageListDetailsPageComponent;
