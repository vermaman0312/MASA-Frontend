import { useEffect, useRef, useState } from "react";
import PrivateVMeetOnlinePageTemplate from "../../../templates/private-templates/private-vmeet-online-template/page.template";
import PrivateVMeetOnlineNetworkCheckPageComponent from "../../../templates/private-templates/private-vmeet-online-template/components/page.vmeet-online-network-check.component";
import CustomVMeetLoader from "../../../components/custom-loader/custom-vmeet-loader";

type StreamWebCamState = {
  video: MediaStream | null;
  audio: MediaStream | null;
};

const PrivateVMeetOnlinePageLayout = () => {
  const videoScreenRef = useRef<HTMLVideoElement | null>(null);
  const videoCamRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [streamScreen, setStreamScreen] = useState<StreamWebCamState | null>(
    null
  );
  const [streamWebCam, setStreamWebCam] = useState<StreamWebCamState | null>(
    null
  );
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [rangeValue, setRangeValue] = useState<number>(50);
  const [isSlowNetwork, setIsSlowNetwork] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const [isMicOn, setIsMicOn] = useState<boolean>(false);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const [isRecordingOn, setIsRecordingOn] = useState<boolean>(false);
  const [isScreenShareOn, setIsScreenShareOn] = useState<boolean>(false);
  const [isHandsUp, setIsHandsUp] = useState<boolean>(false);
  const [isEmojiOpen, setIsEmojiOpen] = useState<boolean>(false);
  const [menuOptions, setMenuOptions] = useState<string>("participants");
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [isInviteOpen, setIsInviteOpen] = useState<boolean>(false);
  const [emoji, setEmoji] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  if (pageLoading) {
    return <CustomVMeetLoader />;
  }

  return (
    <div className="w-full h-full">
      <PrivateVMeetOnlinePageTemplate
        videoScreenRef={videoScreenRef}
        videoCamRef={videoCamRef}
        streamScreen={streamScreen}
        setStreamScreen={setStreamScreen}
        streamWebCam={streamWebCam}
        setStreamWebCam={setStreamWebCam}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        isClose={isClose}
        setIsClose={setIsClose}
        isMicOn={isMicOn}
        setIsMicOn={setIsMicOn}
        isCameraOn={isCameraOn}
        setIsCameraOn={setIsCameraOn}
        isRecordingOn={isRecordingOn}
        setIsRecordingOn={setIsRecordingOn}
        isScreenShareOn={isScreenShareOn}
        setIsScreenShareOn={setIsScreenShareOn}
        isHandsUp={isHandsUp}
        setIsHandsUp={setIsHandsUp}
        isEmojiOpen={isEmojiOpen}
        setIsEmojiOpen={setIsEmojiOpen}
        menuOptions={menuOptions}
        setMenuOptions={setMenuOptions}
        isGridView={isGridView}
        setIsGridView={setIsGridView}
        isInviteOpen={isInviteOpen}
        setIsInviteOpen={setIsInviteOpen}
        emoji={emoji}
        setEmoji={setEmoji}
        mediaRecorderRef={mediaRecorderRef}
        chunksRef={chunksRef}
      />

      {/* <PrivateVMeetOnlineNetworkCheckPageComponent
        isSlowNetwork={isSlowNetwork}
        setIsSlowNetwork={setIsSlowNetwork}
      /> */}
    </div>
  );
};

export default PrivateVMeetOnlinePageLayout;
