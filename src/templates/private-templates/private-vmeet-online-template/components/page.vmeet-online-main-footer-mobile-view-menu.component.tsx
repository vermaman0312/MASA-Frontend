import CustomMenuDropdown from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import {
  Cast,
  Disc,
  EllipsisVertical,
  Hand,
  Mic,
  MicOff,
  Video,
  VideoOff,
} from "lucide-react";
import { DropdownMenuItem } from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";

type props = {
  isMicOn: boolean;
  isCameraOn: boolean;
  isRecordingOn: boolean;
  isScreenShareOn: boolean;
  isHandsUp: boolean;
  onClickMic: () => void;
  onClickCamera: () => void;
  onClickRecording: () => void;
  onClickScreenShare: () => void;
  onClickHandsup: () => void;
};

const PrivateVMeetOnlineMainFooterMobileViewMenuPageComponent = ({
  isMicOn,
  isCameraOn,
  isRecordingOn,
  isScreenShareOn,
  isHandsUp,
  onClickMic,
  onClickCamera,
  onClickRecording,
  onClickScreenShare,
  onClickHandsup,
}: props) => {
  return (
    <CustomMenuDropdown
      buttonComponent={
        <EllipsisVertical className="text-[#9CA3AF] cursor-pointer" />
      }
      marginRight="mr-6"
      backgroundColor="bg-[#374151] bg-opacity-50"
      border="border-2 border-[#374151] border-opacity-50"
      textColor="text-white"
    >
      <DropdownMenuItem
        onClick={onClickMic}
        className="hover:bg-gray-100 cursor-pointer"
      >
        {isMicOn ? (
          <Mic className="text-white mr-2 h-4 w-4" />
        ) : (
          <MicOff className="text-[#9CA3AF] mr-2 h-4 w-4" />
        )}
        <span
          className={`font-display text-xs ${
            isMicOn ? "text-white" : "text-[#9CA3AF]"
          }`}
        >
          {isMicOn ? "Mute mic" : "Unmute mic"}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={onClickCamera}
        className="hover:bg-gray-100 cursor-pointer"
      >
        {isCameraOn ? (
          <Video className="text-white mr-2 h-4 w-4" />
        ) : (
          <VideoOff className="text-[#9CA3AF] mr-2 h-4 w-4" />
        )}
        <span
          className={`font-display text-xs ${
            isCameraOn ? "text-white" : "text-[#9CA3AF]"
          }`}
        >
          {isCameraOn ? "Turn of camera" : "Turn on camera"}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={onClickRecording}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <Disc
          className={`${
            isRecordingOn ? "text-red-500 animate-pulse" : "text-[#9CA3AF]"
          } mr-2 h-4 w-4`}
        />
        <span
          className={`font-display text-xs ${
            isRecordingOn ? "text-white" : "text-[#9CA3AF]"
          }`}
        >
          {isRecordingOn ? "Stop recording" : "Start recording"}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={onClickScreenShare}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <Cast
          className={`${
            isScreenShareOn ? "text-white" : "text-[#9CA3AF]"
          } mr-2 h-4 w-4`}
        />
        <span
          className={`font-display text-xs ${
            isScreenShareOn ? "text-white" : "text-[#9CA3AF]"
          }`}
        >
          {isScreenShareOn ? "Stop share screen" : "Start share screen"}
        </span>
      </DropdownMenuItem>

      <DropdownMenuItem
        onClick={onClickHandsup}
        className="hover:bg-gray-100 cursor-pointer"
      >
        <Hand
          className={`${
            isHandsUp ? "text-white" : "text-[#9CA3AF]"
          } mr-2 h-4 w-4`}
        />
        <span
          className={`font-display text-xs ${
            isHandsUp ? "text-white" : "text-[#9CA3AF]"
          }`}
        >
          {isHandsUp ? "Hands down" : "Hands up"}
        </span>
      </DropdownMenuItem>
    </CustomMenuDropdown>
  );
};

export default PrivateVMeetOnlineMainFooterMobileViewMenuPageComponent;
