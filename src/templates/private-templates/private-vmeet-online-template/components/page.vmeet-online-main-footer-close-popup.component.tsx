import React from "react";
import { CustomDialogBox } from "../../../../components/custom-dialogbox/custom.dialogBox.component";
import { useNavigate } from "react-router-dom";

type props = {
  isClose: boolean;
  setIsClose: (isClose: boolean) => void;
};

const PrivateVMeetOnlineMainFooterClosePopupPageComponent = ({
  isClose,
  setIsClose,
}: props) => {
  const navigate = useNavigate();
  return (
    <CustomDialogBox
      isOpen={isClose}
      onOpenChange={setIsClose}
      backgroundColor="bg-white"
      title="Leave meeting"
      description="Are you sure to leave meeting?"
    >
      <div className="w-full flex items-center justify-end gap-2">
        <button
          onClick={() => setIsClose(false)}
          className="text-xs font-display border border-gray-300 hover:border-gray-400 bg-gray-200 hover:bg-gray-300 p-2 w-32 h-10 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={() => navigate("/user/auth/v-meet?token=123")}
          className="text-xs font-display bg-[#EF4444] p-2 w-32 h-10 rounded-lg text-white"
        >
          Leave meeting
        </button>
      </div>
    </CustomDialogBox>
  );
};

export default PrivateVMeetOnlineMainFooterClosePopupPageComponent;
