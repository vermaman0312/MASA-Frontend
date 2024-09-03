import React, { useCallback } from "react";
import PrivateVMeetOnlineMainHeaderPageComponent from "./components/page.vmeeting-online-main-header.component";
import PrivateVMeetOnlineScreeSharingVideoPageComponent from "./components/page.vmeet-online-screensharing-video.component";
import PrivateVMeetOnlineMainFooterPageComponent from "./components/page.vmeet-online.main-footer.component";
import PrivateVMeetOnlineSideOptionHeaderPageComponent from "./components/page.vmeet-online-side-option-header.component";
import PrivateVMeetOnlineSideOptionSubHeaderPageComponent from "./components/page.vmeet-online-side-option-subheader.component";
import PrivateVMeetOnlineSideOptionUsersOptionsPageComponent from "./components/page.vmeet-online-side-option-users-option.component";
import PrivateVMeetOnlineUserListDetailsPageComponent from "./components/page.vmeet-online-user-list-details.component";

type props = {
  videoRef: React.RefObject<HTMLVideoElement>;
  stream: MediaStream | null;
  setStream: (stream: MediaStream | null) => void;
  rangeValue: number;
  setRangeValue: (rangeValue: number) => void;
  isClose: boolean;
  setIsClose: (isClose: boolean) => void;
  isMicOn: boolean;
  setIsMicOn: (isMicOn: boolean) => void;
  isCameraOn: boolean;
  setIsCameraOn: (isCameraOn: boolean) => void;
  isRecordingOn: boolean;
  setIsRecordingOn: (isRecordingOn: boolean) => void;
  isScreenShareOn: boolean;
  setIsScreenShareOn: (isScreenShareOn: boolean) => void;
  isHandsUp: boolean;
  setIsHandsUp: (isHandsUp: boolean) => void;
  isEmojiOpen: boolean;
  setIsEmojiOpen: (isEmojiOpen: boolean) => void;
  menuOptions: string;
  setMenuOptions: (menuOptions: string) => void;
  isGridView: boolean;
  setIsGridView: (isGridView: boolean) => void;
};

const PrivateVMeetOnlinePageTemplate = ({
  videoRef,
  stream,
  setStream,
  rangeValue,
  setRangeValue,
  isClose,
  setIsClose,
  isMicOn,
  setIsMicOn,
  isCameraOn,
  setIsCameraOn,
  isRecordingOn,
  setIsRecordingOn,
  isScreenShareOn,
  setIsScreenShareOn,
  isHandsUp,
  setIsHandsUp,
  isEmojiOpen,
  setIsEmojiOpen,
  menuOptions,
  setMenuOptions,
  isGridView,
  setIsGridView,
}: props) => {
  const handleChangeRange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRangeValue(parseInt(event.target.value));
    },
    [setRangeValue]
  );

  const startScreenShare = async () => {
    try {
      const capturedStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setStream(capturedStream);
    } catch (error) {
      console.error("Error capturing screen:", error);
    }
  };

  const stopScreenShare = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const handleOnClick = useCallback(
    (type: string) => {
      switch (type) {
        case "mic":
          setIsMicOn(!isMicOn);
          break;
        case "camera":
          setIsCameraOn(!isCameraOn);
          break;
        case "recording":
          setIsRecordingOn(!isRecordingOn);
          break;
        case "screenShare":
          setIsScreenShareOn(!isScreenShareOn);
          break;
        case "handsUp":
          setIsHandsUp(!isHandsUp);
          break;
        case "emoji":
          setIsEmojiOpen(!isEmojiOpen);
          break;
        default:
          break;
      }
    },
    [
      isCameraOn,
      isEmojiOpen,
      isHandsUp,
      isMicOn,
      isRecordingOn,
      isScreenShareOn,
      setIsCameraOn,
      setIsEmojiOpen,
      setIsHandsUp,
      setIsMicOn,
      setIsRecordingOn,
      setIsScreenShareOn,
    ]
  );

  const handleOnClickHeaderOption = useCallback(
    (value: string) => {
      setMenuOptions(value as string);
    },
    [setMenuOptions]
  );

  return (
    <div className="w-full h-full flex items-center">
      <div className="border-r-2 border-[#374151] border-opacity-50 w-full h-full flex flex-col items-center justify-between">
        <div className="w-full">
          <PrivateVMeetOnlineMainHeaderPageComponent
            isHandsUp={isHandsUp}
            isRecordingOn={isRecordingOn}
          />
        </div>
        <div className="w-full">
          <PrivateVMeetOnlineScreeSharingVideoPageComponent
            videoRef={videoRef}
            stream={stream}
          />
        </div>
        <div className="w-full">
          <PrivateVMeetOnlineMainFooterPageComponent
            onChangeVolume={handleChangeRange}
            valueVolume={rangeValue}
            isMicOn={isMicOn}
            isCameraOn={isCameraOn}
            isRecordingOn={isRecordingOn}
            isScreenShareOn={isScreenShareOn}
            isHandsUp={isHandsUp}
            isEmojiOpen={isEmojiOpen}
            onClickMic={() => handleOnClick("mic")}
            onClickCamera={() => handleOnClick("camera")}
            onClickRecording={() => handleOnClick("recording")}
            onClickScreenShare={() => handleOnClick("screenShare")}
            onClickHandsup={() => handleOnClick("handsUp")}
            onClickEmoji={() => handleOnClick("emoji")}
            isClose={isClose}
            setIsClose={setIsClose}
          />
        </div>
      </div>

      <div className="hidden md:flex w-[30%] h-full flex-col bg-[#1F2937] bg-opacity-50">
        <div>
          <PrivateVMeetOnlineSideOptionHeaderPageComponent
            menuOptions={menuOptions}
            onClickParticipants={() =>
              handleOnClickHeaderOption("participants")
            }
            onClickApps={() => handleOnClickHeaderOption("apps")}
            onClickChat={() => handleOnClickHeaderOption("chat")}
          />
        </div>
        <div className="p-4 w-full h-full flex flex-col gap-2">
          <div>
            <PrivateVMeetOnlineSideOptionSubHeaderPageComponent
              isGridView={isGridView}
              onClickGridView={() => setIsGridView(true)}
              onClickListView={() => setIsGridView(false)}
            />
          </div>

          <div>
            <PrivateVMeetOnlineSideOptionUsersOptionsPageComponent />
          </div>

          <div className="mt-3">
            <PrivateVMeetOnlineUserListDetailsPageComponent
              isMicOn={isMicOn}
              isCameraOn={isCameraOn}
              userName="Jenny Ferr"
              isRole="HOST"
              onClickMakeHost={() => alert("Host")}
              onClickMakeCoHost={() => alert("Co-host")}
              onClickMic={() => alert("Mic on")}
              onClickKick={() => alert("Kick")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlinePageTemplate;
