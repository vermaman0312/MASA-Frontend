import {
  Cast,
  ChevronUp,
  Disc,
  Hand,
  Mic,
  MicOff,
  SmilePlus,
  Video,
  VideoOff,
} from "lucide-react";

type props = {
  isMicOn: boolean;
  onClickMic: () => void;
  isCameraOn: boolean;
  onClickCamera: () => void;
  isRecordingOn: boolean;
  onClickRecording: () => void;
  isScreenShareOn: boolean;
  onClickScreenShare: () => void;
  isHandsUp: boolean;
  onClickHandsup: () => void;
  isEmojiOpen: boolean;
  onClickEmoji: () => void;
};

const PrivateVMeetOnlineMainFooterDesktopViewMenuPageComponent = ({
  isMicOn,
  isCameraOn,
  isRecordingOn,
  isScreenShareOn,
  isHandsUp,
  isEmojiOpen,
  onClickMic,
  onClickCamera,
  onClickRecording,
  onClickScreenShare,
  onClickHandsup,
  onClickEmoji,
}: props) => {
  return (
    <div className="md:flex items-center justify-center gap-2 hidden">
      <div
        onClick={onClickMic}
        className={`border-2 ${
          isMicOn
            ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
            : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
        } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
      >
        {isMicOn ? (
          <Mic className="text-white" />
        ) : (
          <MicOff className="text-[#9CA3AF]" />
        )}
        <ChevronUp className={`${isMicOn ? "text-white" : "text-[#9CA3AF]"}`} />
      </div>

      <div
        onClick={onClickCamera}
        className={`border-2 ${
          isCameraOn
            ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
            : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
        } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
      >
        {isCameraOn ? (
          <Video className="text-white" />
        ) : (
          <VideoOff className="text-[#9CA3AF]" />
        )}
        <ChevronUp
          className={`${isCameraOn ? "text-white" : "text-[#9CA3AF]"}`}
        />
      </div>

      <div
        onClick={onClickRecording}
        className={`border-2 ${
          isRecordingOn
            ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
            : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
        } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
      >
        <Disc
          className={`${isRecordingOn ? "text-white" : "text-[#9CA3AF]"}`}
        />
        <ChevronUp
          className={`${isRecordingOn ? "text-white" : "text-[#9CA3AF]"}`}
        />
      </div>

      <div
        onClick={onClickScreenShare}
        className={`border-2 ${
          isScreenShareOn
            ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
            : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
        } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
      >
        <Cast
          className={`${isScreenShareOn ? "text-white" : "text-[#9CA3AF]"}`}
        />
        <ChevronUp
          className={`${isScreenShareOn ? "text-white" : "text-[#9CA3AF]"}`}
        />
      </div>

      <div
        onClick={onClickHandsup}
        className={`border-2 ${
          isHandsUp
            ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
            : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
        } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
      >
        <Hand className={`${isHandsUp ? "text-white" : "text-[#9CA3AF]"}`} />
        <ChevronUp
          className={`${isHandsUp ? "text-white" : "text-[#9CA3AF]"}`}
        />
      </div>

      <div
        onClick={onClickEmoji}
        className={`border-2 ${
          isEmojiOpen
            ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
            : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
        } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
      >
        <SmilePlus
          className={`${isEmojiOpen ? "text-white" : "text-[#9CA3AF]"}`}
        />
        <ChevronUp
          className={`${isEmojiOpen ? "text-white" : "text-[#9CA3AF]"}`}
        />
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineMainFooterDesktopViewMenuPageComponent;
