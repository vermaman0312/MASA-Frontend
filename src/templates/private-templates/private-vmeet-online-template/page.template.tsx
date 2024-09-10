import React, { useCallback } from "react";
import PrivateVMeetOnlineMainHeaderPageComponent from "./components/page.vmeeting-online-main-header.component";
import PrivateVMeetOnlineScreeSharingVideoPageComponent from "./components/page.vmeet-online-screensharing-video.component";
import PrivateVMeetOnlineMainFooterPageComponent from "./components/page.vmeet-online.main-footer.component";
import PrivateVMeetOnlineSideOptionHeaderPageComponent from "./components/page.vmeet-online-side-option-header.component";
import { getMediaStreams } from "../../../utils/media-utils/get-media.utils";
import PrivateVMeetOnlineParticipantsPageComponent from "./components/page.vmeet-online-participants.component";
import PrivateVMeetOnlineAppsPageComponent from "./components/page.vmeet-online-apps.component";
import PrivateVMeetOnlinePublicChatPageComponent from "./components/page.vmeet-online-public-chat.component";
import PrivateVMeetOnlineAppWhiteboardPageComponent from "./components/app-component/page.vmeet-online-app-whiteboard.component";

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
  isInviteOpen: boolean;
  setIsInviteOpen: (value: boolean) => void;
  emoji: string;
  setEmoji: (emoji: string) => void;
  mediaRecorderRef: React.RefObject<MediaRecorder>;
  chunksRef: React.RefObject<Blob[]>;
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
  isInviteOpen,
  setIsInviteOpen,
  emoji,
  setEmoji,
  mediaRecorderRef,
  chunksRef,
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
      isScreenShareOn,
      setIsEmojiOpen,
      setIsHandsUp,
      setIsMicOn,
      setIsScreenShareOn,
    ]
  );

  const handleOnClickHeaderOption = useCallback(
    (value: string) => {
      setMenuOptions(value as string);
    },
    [setMenuOptions]
  );

  // Start and stop recording
  const handleStartStop = async () => {
    if (isRecordingOn) {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        setIsRecordingOn(false);
      }
    } else {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        (mediaRecorderRef as any).current = new MediaRecorder(stream);
        (chunksRef as any).current = [];
        (mediaRecorderRef as any).current.ondataavailable = (event: BlobEvent) => {
          if (event.data.size > 0) {
            (chunksRef as any).current.push(event.data);
          }
        };
        (mediaRecorderRef as any).current.onstop = () => {
          const blob = new Blob((chunksRef as any).current, { type: 'video/mp4' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'recording.mp4';
          a.click();
          URL.revokeObjectURL(url);
        };
        (mediaRecorderRef as any).current.start();
        setIsRecordingOn(true);
      } catch (err) {
        console.error('Error starting screen recording:', err);
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="border-r-2 border-[#374151] border-opacity-50 w-full h-full flex flex-col items-center justify-between">
        <div className="w-full">
          <PrivateVMeetOnlineMainHeaderPageComponent
            isHandsUp={isHandsUp}
            isRecordingOn={isRecordingOn}
            emoji={emoji}
          />
        </div>
        <div className="w-full h-full">
          {isScreenShareOn ? (
            <PrivateVMeetOnlineScreeSharingVideoPageComponent
              videoRef={videoScreenRef}
              stream={streamScreen}
            />
          ) : (
            // <PrivateVMeetOnlineAppWhiteboardPageComponent />
            null
          )}
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
            onClickRecording={handleStartStop}
            onClickScreenShare={() => handleOnClick("screenShare")}
            onClickHandsup={() => handleOnClick("handsUp")}
            onClickEmoji={() => handleOnClick("emoji")}
            isClose={isClose}
            setIsClose={setIsClose}
            emoji={emoji}
            setEmoji={setEmoji}
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

        <div className="w-full h-full">
          {menuOptions === "chat" ? (
            <PrivateVMeetOnlinePublicChatPageComponent />
          ) : menuOptions === "apps" ? (
            <PrivateVMeetOnlineAppsPageComponent />
          ) : (
            <PrivateVMeetOnlineParticipantsPageComponent
              isGridView={isGridView}
              onClickGridView={() => setIsGridView(true)}
              onClickListView={() => setIsGridView(false)}
              onClickInvite={() => setIsInviteOpen(true)}
              isOpen={isInviteOpen}
              setIsOpen={setIsInviteOpen}
              isMicOn={isMicOn}
              isCameraOn={isCameraOn}
              videoCamRef={videoCamRef}
              streamWebCam={streamWebCam}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlinePageTemplate;
