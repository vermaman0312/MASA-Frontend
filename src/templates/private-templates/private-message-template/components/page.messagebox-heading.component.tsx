import React from "react";
import CustomAvatar from "../../../../components/custom-avatar/custom-avatar.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import moment from "moment";
import CustomToolTip from "../../../../components/custom-tooltip/custom-tooltip.component";
import {
  CornerUpLeft,
  CornerUpRight,
  EllipsisVertical,
  Trash2,
} from "lucide-react";

const PrivateMessageBoxHeadingPageComponent = () => {
  return (
    <div className="flex items-center justify-between border-b p-[0.1rem]">
      <div className="w-full flex gap-4 p-2">
        <div className="flex items-center justify-center">
          <CustomAvatar
            className="w-6 h-6"
            src="https://github.com/shadcn.png"
            title="Aman Verma"
          />
        </div>
        <div className="border-r flex items-center justify-center">
          <CustomLabel className="font-display mr-2">Aman Verma</CustomLabel>
        </div>
        <div className="flex items-center justify-center border-r">
          <CustomLabel className="font-display text-gray-400 font-light text-xs mr-2">
            {moment(new Date()).fromNow()}
          </CustomLabel>
        </div>
        <div className="flex items-center justify-center border-r">
          <CustomLabel className="font-display text-gray-700 font-medium text-xs mr-2">
            Re: Request about question
          </CustomLabel>
        </div>
        <div className="flex items-center justify-center">
          <CustomLabel className="font-display text-gray-700 font-medium text-xs mr-2">
            5 Attachment are included with this message
          </CustomLabel>
        </div>
      </div>
      <div className="flex gap-4 p-2">
        <div className="flex items-center justify-center">
          <CustomToolTip
            icon={<Trash2 className="w-4 h-4 cursor-pointer" />}
            className="bg-[#0d1b2a] border-none"
          >
            <CustomLabel className="text-white font-display text-xs">
              Delete
            </CustomLabel>
          </CustomToolTip>
        </div>
        <div className="flex items-center justify-center">
          <CustomToolTip
            icon={<CornerUpLeft className="w-4 h-4 cursor-pointer" />}
            className="bg-[#0d1b2a] border-none"
          >
            <CustomLabel className="text-white font-display text-xs">
              Reply
            </CustomLabel>
          </CustomToolTip>
        </div>
        <div className="flex items-center justify-center">
          <CustomToolTip
            icon={<CornerUpRight className="w-4 h-4 cursor-pointer" />}
            className="bg-[#0d1b2a] border-none"
          >
            <CustomLabel className="text-white font-display text-xs">
              Forward
            </CustomLabel>
          </CustomToolTip>
        </div>
        <div className="border-l flex items-center justify-center">
          <EllipsisVertical className="w-4 h-4 cursor-pointer ml-2" />
        </div>
      </div>
    </div>
  );
};

export default PrivateMessageBoxHeadingPageComponent;
