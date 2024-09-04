import React, { useEffect } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../../components/custom-context-menu/custom-context-menu.ui";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
import PrivateVMeetOnlineAudioVisualizationPageComponent from "./page.vmeet-online-audio-visualization.component";

type StreamWebCamState = {
  video: MediaStream | null;
  audio: MediaStream | null;
};

type props = {
  isMicOn: boolean;
  isCameraOn: boolean;
  onClickMakeHost?: () => void;
  onClickMakeCoHost?: () => void;
  onClickMic?: () => void;
  onClickKick?: () => void;
  userName: string;
  userProfileImageVideo: string;
  isRole?: string;
  videoCamRef: React.RefObject<HTMLVideoElement>;
  streamWebCam: StreamWebCamState | null;
};

const PrivateVMeetOnlineUserCardDetailsPageComponent = ({
  isMicOn,
  isCameraOn,
  onClickMakeHost,
  onClickMakeCoHost,
  onClickMic,
  onClickKick,
  userName,
  userProfileImageVideo,
  isRole,
  videoCamRef,
  streamWebCam,
}: props) => {
  useEffect(() => {
    if (videoCamRef.current && streamWebCam?.video) {
      videoCamRef.current.srcObject = streamWebCam.video;
    }
  }, [streamWebCam?.video, videoCamRef]);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full flex items-center justify-between gap-2 rounded-xl cursor-pointer bg-[#374151] bg-opacity-50">
        <div className="w-full flex flex-col items-start">
          <div className="w-full h-32">
            {streamWebCam && streamWebCam.video ? (
              <video
                ref={videoCamRef}
                className="w-full h-full rounded-lg border border-gray-500"
                autoPlay
              ></video>
            ) : (
              <img
                className="w-full h-full rounded-lg"
                src={userProfileImageVideo}
                alt=""
              />
            )}
          </div>
          <div className="w-full p-2">
            <div>
              <p className="text-[#D1D5DB] whitespace-no-wrap font-display font-normal text-md">
                {userName}
              </p>
            </div>
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="text-[#2D8CFF] whitespace-no-wrap font-display font-normal text-xs">
                  {isRole}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  {isMicOn ? (
                    <Mic className="text-white w-5 h-5" />
                  ) : (
                    <MicOff className="text-[#9CA3AF] w-5 h-5" />
                  )}
                </div>
                <div>
                  {isCameraOn ? (
                    <Video className="text-white w-5 h-5" />
                  ) : (
                    <VideoOff className="text-[#9CA3AF] w-5 h-5" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 border-t-2 border-gray-500 w-full h-10">
            {isMicOn && (
              <div className="flex items-center justify-center w-full rounded-xl">
                <PrivateVMeetOnlineAudioVisualizationPageComponent
                  height="h-6"
                  isMicOn={isMicOn}
                  mediaStream={streamWebCam?.audio}
                />
              </div>
            )}
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-[10rem] hover:border-none focus:border-none border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50">
        <ContextMenuItem
          inset
          onClick={onClickMakeHost}
          className="w-full flex items-center justify-between bg-[#374151] bg-opacity-0 hover:bg-[#374151]"
        >
          <CustomLabel className="text-xs font-display cursor-pointer text-[#9CA3AF]">
            Make a host
          </CustomLabel>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={onClickMakeCoHost}
          className="w-full flex items-center justify-between bg-[#374151] bg-opacity-0 hover:bg-[#374151]"
        >
          <CustomLabel className="text-xs font-display cursor-pointer text-[#9CA3AF]">
            Make a co-host
          </CustomLabel>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={onClickMic}
          className="w-full flex items-center justify-between bg-[#374151] bg-opacity-0 hover:bg-[#374151]"
        >
          <CustomLabel className="text-xs font-display cursor-pointer text-[#9CA3AF]">
            {isMicOn ? "Mute mic" : "Unmute mic"}
          </CustomLabel>
        </ContextMenuItem>
        <ContextMenuItem
          inset
          onClick={onClickKick}
          className="w-full flex items-center justify-between bg-[#374151] bg-opacity-0 hover:bg-[#374151]"
        >
          <CustomLabel className="text-xs font-display cursor-pointer text-[#9CA3AF]">
            Kickout from meeting
          </CustomLabel>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default PrivateVMeetOnlineUserCardDetailsPageComponent;
