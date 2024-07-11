import React from "react";
import { CustomDialogBox } from "../../../../components/custom-dialogbox/custom.dialogBox.component";
import { Eye, EyeOff, Plus } from "lucide-react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

type props = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onClickAddNote?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitAddNot?: () => void;
  onClickUnhide?: () => void;
  onClickHide?: () => void;
  isHidden?: boolean;
};

const PrivateNotesHeadingPageComponent = ({
  isOpen,
  onOpenChange,
  onClickAddNote,
  onChange,
  onSubmitAddNot,
  onClickUnhide,
  onClickHide,
  isHidden,
}: props) => {
  return (
    <div className="w-full flex flex-col items-end justify-end">
      <div className="flex items-center gap-2">
        <div>
          <CustomDialogBox
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            buttonComponent={
              <button
                onClick={onClickAddNote}
                className="p-1 text-xs rounded-full w-24 font-display flex items-center justify-center gap-1"
              >
                <Plus className="w-4 h-4 text-[#0d1b2a] cursor-pointer" />
                <CustomLabel className="text-xs font-display text-[#0d1b2a] cursor-pointer">
                  Add note
                </CustomLabel>
              </button>
            }
            title="Give your title"
            description="Please give the title of notes and continue."
            backgroundColor="bg-[#3F7DFB]"
            borderRadius="rounded-xl"
            textColor="text-white"
            descriptionColor="text-white"
          >
            <div className="w-full border-2 p-2 rounded-full flex items-center">
              <input
                type="text"
                placeholder="Enter the title"
                onChange={onChange}
                className="w-full bg-transparent outline-none border-none active:outline-none active:border-none h-8 placeholder:text-white text-white font-display ml-2 mr-1"
              />
              <button
                onClick={onSubmitAddNot}
                className="w-28 p-1 rounded-full text-xs font-display h-8 text-white bg-[#0d1b2a]"
              >
                Create
              </button>
            </div>
          </CustomDialogBox>
        </div>
        <div className="flex items-center">
          <button
            onClick={onClickUnhide}
            className={`border border-gray-400 ${
              !isHidden && "bg-gray-400"
            } p-1 text-xs rounded-l-full w-12 font-display flex items-center justify-center gap-1`}
          >
            <Eye
              className={`w-4 h-4 ${
                !isHidden ? "text-white" : "text-gray-400"
              } cursor-pointer`}
            />
          </button>
          <button
            onClick={onClickHide}
            className={`border border-gray-400 ${
              isHidden && "bg-gray-400"
            } p-1 text-xs rounded-r-full w-12 font-display flex items-center justify-center gap-1`}
          >
            <EyeOff
              className={`w-4 h-4 ${
                isHidden ? "text-white" : "text-gray-400"
              } cursor-pointer`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateNotesHeadingPageComponent;
