import React from "react";
import { CustomDialogBox } from "../../../../components/custom-dialogbox/custom.dialogBox.component";
import { CustomInputField } from "../../../../components/custom-input-field/custom-input-field.component";

type props = {
  isOpen?: boolean;
  setIsOpen: (value: boolean) => void;
};

const PrivateVMeetOnlineInvitePopupPageComponent = ({
  isOpen,
  setIsOpen,
}: props) => {
  return (
    <CustomDialogBox
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      backgroundColor="bg-white"
      title="Invite Meeting"
      description="Enter the email address or username to attend the meeting!"
    >
      <div className="w-full flex flex-col gap-5">
        <div>
          <CustomInputField
            placeholder="example@example.com | username"
            type="text"
          />
        </div>
        <div className="w-full flex items-center justify-end gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-xs font-display border border-gray-300 hover:border-gray-400 bg-gray-200 hover:bg-gray-300 p-2 w-32 h-10 rounded-lg"
          >
            Cancel
          </button>
          <button className="text-xs font-display bg-blue-500 p-2 w-32 h-10 rounded-lg text-white">
            Invite
          </button>
        </div>
      </div>
    </CustomDialogBox>
  );
};

export default PrivateVMeetOnlineInvitePopupPageComponent;
