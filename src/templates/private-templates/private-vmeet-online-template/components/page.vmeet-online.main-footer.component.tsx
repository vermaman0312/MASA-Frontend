import React from "react";
import PrivateVMeetOnlineMainFooterVolumePageComponent from "./page.vmeet-online-main-footer-volume.component";
import PrivateVMeetOnlineMainFooterMobileViewMenuPageComponent from "./page.vmeet-online-main-footer-mobile-view-menu.component";
import PrivateVMeetOnlineMainFooterDesktopViewMenuPageComponent from "./page.vmeet-online-main-footer-desktop-view-menu.component";
import PrivateVMeetOnlineMainFooterClosePopupPageComponent from "./page.vmeet-online-main-footer-close-popup.component";

type props = {
  onChangeVolume: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueVolume: number;
  isMicOn: boolean;
  isCameraOn: boolean;
  isRecordingOn: boolean;
  isScreenShareOn: boolean;
  isHandsUp: boolean;
  isEmojiOpen: boolean;
  onClickMic: () => void;
  onClickCamera: () => void;
  onClickRecording: () => void;
  onClickScreenShare: () => void;
  onClickHandsup: () => void;
  onClickEmoji: () => void;
  isClose: boolean;
  setIsClose: (isClose: boolean) => void;
};

const PrivateVMeetOnlineMainFooterPageComponent = ({
  valueVolume,
  onChangeVolume,
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
  isClose,
  setIsClose,
}: props) => {
  return (
    <div className="w-full border-t-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50 p-4 flex items-center justify-between gap-2 flex-wrap">
      <div className="flex items-center justify-between gap-5 w-full md:w-auto">
        <div>
          <PrivateVMeetOnlineMainFooterVolumePageComponent
            onChange={onChangeVolume}
            value={valueVolume}
          />
        </div>

        <div className="md:hidden">
          <PrivateVMeetOnlineMainFooterMobileViewMenuPageComponent
            isMicOn={isMicOn}
            isCameraOn={isCameraOn}
            isRecordingOn={isRecordingOn}
            isScreenShareOn={isScreenShareOn}
            isHandsUp={isHandsUp}
            onClickMic={onClickMic}
            onClickCamera={onClickCamera}
            onClickRecording={onClickRecording}
            onClickScreenShare={onClickScreenShare}
            onClickHandsup={onClickHandsup}
          />
        </div>
      </div>
      <div>
        <PrivateVMeetOnlineMainFooterDesktopViewMenuPageComponent
          isMicOn={isMicOn}
          isCameraOn={isCameraOn}
          isRecordingOn={isRecordingOn}
          isScreenShareOn={isScreenShareOn}
          isHandsUp={isHandsUp}
          isEmojiOpen={isEmojiOpen}
          onClickMic={onClickMic}
          onClickCamera={onClickCamera}
          onClickRecording={onClickRecording}
          onClickScreenShare={onClickScreenShare}
          onClickHandsup={onClickHandsup}
          onClickEmoji={onClickEmoji}
        />
      </div>
      <div>
        <div className="hidden md:flex">
          <button
            onClick={() => setIsClose(true)}
            className="text-xs font-display text-white bg-[#EF4444] p-2 rounded-xl h-10 w-32"
          >
            Leave meeting
          </button>
        </div>
        <div>
          <PrivateVMeetOnlineMainFooterClosePopupPageComponent isClose={isClose} setIsClose={setIsClose} />
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineMainFooterPageComponent;
