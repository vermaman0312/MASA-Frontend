import React, { useCallback, useEffect } from "react";
import PrivateVMeetOnlineMainHeaderPageComponent from "./components/page.vmeeting-online-main-header.component";
import PrivateVMeetOnlineScreeSharingVideoPageComponent from "./components/page.vmeet-online-screensharing-video.component";
import PrivateVMeetOnlineMainFooterPageComponent from "./components/page.vmeet-online.main-footer.component";
import PrivateVMeetOnlineSideOptionHeaderPageComponent from "./components/page.vmeet-online-side-option-header.component";
import PrivateVMeetOnlineSideOptionSubHeaderPageComponent from "./components/page.vmeet-online-side-option-subheader.component";
import PrivateVMeetOnlineSideOptionUsersOptionsPageComponent from "./components/page.vmeet-online-side-option-users-option.component";
import PrivateVMeetOnlineUserListDetailsPageComponent from "./components/page.vmeet-online-user-list-details.component";
import { getMediaStreams } from "../../../utils/media-utils/get-media.utils";

type StreamWebCamState = {
  video: MediaStream | null;
  audio: MediaStream | null;
};

type props = {
  videoScreenRef: React.RefObject<HTMLVideoElement>;
  videoCamRef: React.RefObject<HTMLVideoElement>;
  streamScreen: StreamWebCamState | null;
  setStreamScreen: (stream: StreamWebCamState | null) => void;
  streamWebCam: StreamWebCamState | null;
  setStreamWebCam: (stream: StreamWebCamState | null) => void;
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
  videoScreenRef,
  videoCamRef,
  streamScreen,
  setStreamScreen,
  streamWebCam,
  setStreamWebCam,
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
  const getMedia = useCallback(async () => {
    const { audio, video } = await getMediaStreams();
    return { audio, video };
  }, []);
  const handleChangeRange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRangeValue(parseInt(event.target.value));
    },
    [setRangeValue]
  );

  // Screen sharing
  // const startScreenShare = async () => {
  //   try {
  //     const capturedStream = await navigator.mediaDevices.getDisplayMedia({
  //       video: true,
  //     });
  //     setStreamScreen(capturedStream);
  //   } catch (error) {
  //     console.error("Error capturing screen:", error);
  //   }
  // };

  // const stopScreenShare = () => {
  //   if (streamScreen) {
  //     streamScreen.getTracks().forEach((track) => track.stop());
  //     setStreamScreen(null);
  //   }
  // };

  // Webcam
  const startCamera = async () => {
    try {
      setStreamWebCam({
        video: (await getMedia()).video,
        audio: (await getMedia()).audio,
      });
      setIsCameraOn(true);
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const stopCamera = () => {
    setStreamWebCam(null);
    setIsCameraOn(false);
  };

  const handleButtonClickCamera = () => {
    if (isCameraOn) {
      stopCamera();
    } else {
      startCamera();
    }
  };
  const handleButtonClickMic = () => {
    setIsMicOn(!isMicOn);
  };

  const handleOnClick = useCallback(
    (type: string) => {
      switch (type) {
        case "mic":
          setIsMicOn(!isMicOn);
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
      isEmojiOpen,
      isHandsUp,
      isMicOn,
      isRecordingOn,
      isScreenShareOn,
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
            videoRef={videoScreenRef}
            stream={streamScreen}
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
            onClickCamera={handleButtonClickCamera}
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

          <div className="mt-3 flex flex-col gap-2">
            <PrivateVMeetOnlineUserListDetailsPageComponent
              isMicOn={isMicOn}
              isCameraOn={isCameraOn}
              userName="Jenny Ferr"
              userProfileImageVideo="https://randomuser.me/api/portraits/women/2.jpg"
              isRole="HOST"
              videoCamRef={videoCamRef}
              streamWebCam={streamWebCam}
              onClickMakeHost={() => alert("Host")}
              onClickMakeCoHost={() => alert("Co-host")}
              onClickMic={() => alert("Mic on")}
              onClickKick={() => alert("Kick")}
            />
            <PrivateVMeetOnlineUserListDetailsPageComponent
              isMicOn={isMicOn}
              isCameraOn={isCameraOn}
              userName="Jenny Ferr"
              userProfileImageVideo="https://randomuser.me/api/portraits/women/18.jpg"
              isRole="CO-HOST"
              videoCamRef={videoCamRef}
              streamWebCam={streamWebCam}
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
