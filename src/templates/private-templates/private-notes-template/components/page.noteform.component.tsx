import { ArrowLeft, EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import moment from "moment";
import CustomMenuDropdown from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";
import CustomMarkDown from "../../../../components/custom-markdown/custom-markdown.component";
import MDEditor from "@uiw/react-md-editor";

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
    <div className="w-full h-full">
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
        <div>
          <CustomMenuDropdown
            buttonComponent={<EllipsisVertical />}
            marginRight="mr-6"
          >
            <DropdownMenuItem
              onClick={() => setIsEdited(true)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <span className="font-display text-xs">Edit Note</span>
            </DropdownMenuItem>
          </CustomMenuDropdown>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mt-5" />
      <div className="mt-5">
        {!value || isEdited ? (
          <CustomMarkDown value={value} setValue={setValue} height={550} />
        ) : (
          <MDEditor.Markdown
            source={value}
            className="font-display"
            style={{
              whiteSpace: "pre-wrap",
              fontSize: 12,
              fontFamily: "Poppins",
            }}
          />
        )}
      </div>
      {isEdited && (
        <div className="mt-5 p-2 w-full flex items-center justify-end">
          <button
            onClick={() => {
              onClick && onClick();
              setIsEdited(false);
            }}
            className="p-2 w-full md:w-16 bg-gray-900 rounded-lg text-xs text-white font-display"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default PrivateNoteFormPageComponent;
