import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import moment from "moment";
import CustomMarkDown from "../../../../components/custom-markdown/custom-markdown.component";

type props = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  title?: string;
  timeStamp?: Date;
  setValue?: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: any
  ) => void;
  value?: string;
  onClick?: () => void;
  onClickBack?: () => void;
};

const PrivateNoteFormPageComponent = ({
  onClickBack,
  title,
  timeStamp,
  setValue,
  value,
  onClick,
}: props) => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div className="flex items-start md:items-center justify-between gap-3">
        <div className="flex items-start md:items-center gap-5">
          <div
            onClick={onClickBack}
            className="p-2 bg-gray-300 rounded-lg cursor-pointer"
          >
            <ArrowLeft />
          </div>
          <div className="flex flex-col">
            <CustomLabel className="text-3xl font-display text-[#0d1b2a]">
              {title}
            </CustomLabel>
            <CustomLabel className="font-display text-xs text-gray-400 font-light">
              {moment(timeStamp).fromNow()}
            </CustomLabel>
          </div>
        </div>
      </div>
      <div
        className="mt-5 w-full h-full"
        style={{ height: "calc(100vh - 410px)" }}
      >
        <CustomMarkDown value={value} setValue={setValue} />
      </div>
      <div className="mt-10 p-2 w-full flex items-center justify-end">
        <button
          onClick={() => {
            onClick && onClick();
          }}
          className="p-2 w-full md:w-32 bg-gray-900 rounded-lg text-xs text-white font-display"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PrivateNoteFormPageComponent;
