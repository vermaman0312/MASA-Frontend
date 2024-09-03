import { LayoutPanelLeft, MessageCircleMore, UsersRound } from "lucide-react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

type props = {
  menuOptions: string;
  onClickParticipants: () => void;
  onClickApps: () => void;
  onClickChat: () => void;
};

const PrivateVMeetOnlineSideOptionHeaderPageComponent = ({
  menuOptions,
  onClickParticipants,
  onClickApps,
  onClickChat,
}: props) => {
  return (
    <div className="w-full border-b-2 border-[#374151] border-opacity-50 p-3.5 flex items-center justify-center gap-4">
      <div className="bg-[#374151] bg-opacity-50 flex items-center justify-between p-1 rounded-xl w-full">
        <button
          onClick={onClickParticipants}
          className={`w-full ${
            menuOptions === "participants"
              ? "bg-[#2D8CFF] text-white"
              : "text-[#9CA3AF]"
          } p-2 flex items-center justify-center gap-2 rounded-xl`}
        >
          <UsersRound className="w-4 h-4" />
          <CustomLabel
            className={`text-xs font-display ${
              menuOptions === "participants" ? "text-white" : "text-[#9CA3AF]"
            } font-normal cursor-pointer`}
          >
            Participants
          </CustomLabel>
        </button>
        <button
          onClick={onClickApps}
          className={`w-full ${
            menuOptions === "apps"
              ? "bg-[#2D8CFF] text-white"
              : "text-[#9CA3AF]"
          } p-2 flex items-center justify-center gap-2 rounded-xl`}
        >
          <LayoutPanelLeft className="w-4 h-4" />
          <CustomLabel
            className={`text-xs font-display ${
              menuOptions === "apps" ? "text-white" : "text-[#9CA3AF]"
            } font-normal cursor-pointer`}
          >
            Apps
          </CustomLabel>
        </button>
        <button
          onClick={onClickChat}
          className={`w-full ${
            menuOptions === "chat"
              ? "bg-[#2D8CFF] text-white"
              : "text-[#9CA3AF]"
          } p-2 flex items-center justify-center gap-2 rounded-xl`}
        >
          <MessageCircleMore className="w-4 h-4" />
          <CustomLabel
            className={`text-xs font-display ${
              menuOptions === "chat" ? "text-white" : "text-[#9CA3AF]"
            } font-normal cursor-pointer`}
          >
            Chat
          </CustomLabel>
        </button>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineSideOptionHeaderPageComponent;
