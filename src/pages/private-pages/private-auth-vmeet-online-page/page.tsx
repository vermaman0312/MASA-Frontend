import {
  Cast,
  ChevronUp,
  Disc,
  EllipsisVertical,
  Hand,
  LayoutPanelLeft,
  MessageCircleMore,
  Mic,
  MicOff,
  ShieldCheck,
  SmilePlus,
  UsersRound,
  Video,
  VideoOff,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomVMeetLoader from "../../../components/custom-loader/custom-vmeet-loader";
import CustomNewtworkCheck from "../../../components/custom-network-check/custom-network-check.component";
import { useNavigate } from "react-router-dom";
import { CustomDialogBox } from "../../../components/custom-dialogbox/custom.dialogBox.component";
import CustomMenuDropdown from "../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";
import AudioVisualizer from "../../../components/custom-voice-recognition-animation/custom-voice-recognition-animation.component";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../components/custom-context-menu/custom-context-menu.ui";

const PrivateAuthVMeetOnlinePage = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
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

  const handleChangeRange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRangeValue(parseInt(event.target.value));
    },
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const checkNetworkStatus = () => {
      if ((navigator as any).connection) {
        const connection =
          (navigator as any).connection ||
          (navigator as any).mozConnection ||
          (navigator as any).webkitConnection;
        const { effectiveType } = connection;
        setIsSlowNetwork(effectiveType === "2g" || effectiveType === "3g");
      } else {
        setIsSlowNetwork(false);
      }
    };
    checkNetworkStatus();
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;
    if (connection) {
      connection.addEventListener("change", checkNetworkStatus);
    }
    const intervalId = setInterval(checkNetworkStatus, 2000);
    return () => {
      if (connection) {
        connection.removeEventListener("change", checkNetworkStatus);
      }
      clearInterval(intervalId);
    };
  }, []);

  //==========================Screen sharing video
  const startScreenShare = async () => {
    try {
      // Request screen capture
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

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  //==========================

  if (pageLoading) {
    return <CustomVMeetLoader />;
  }

  return (
    <div className="w-screen h-screen flex bg-[#101826]">
      <div className="border-r-2 border-[#374151] border-opacity-50 w-full h-full flex flex-col items-center justify-between">
        <div className="w-full border-b-2 border-[#374151] border-opacity-50 p-4 bg-[#1F2937] bg-opacity-50 flex items-center justify-between gap-4">
          <div className="p-1.5">
            <ShieldCheck className="text-[#9CA3AF]" />
          </div>

          <div className="w-full h-full rounded-xl">
            {isMicOn && <AudioVisualizer height="h-8" isMicOn={isMicOn} />}
          </div>

          <div className="flex items-center gap-5">
            {isHandsUp && (
              <div>
                <Hand className="text-[#9CA3AF]" />
              </div>
            )}
            {isRecordingOn && (
              <button className="flex items-center justify-center gap-2 border-2 border-[#374151] border-opacity-50 p-2 w-32 bg-[#374151] bg-opacity-50 rounded-xl">
                <Disc className="w-4 h-4 text-red-500 font-bold animate-pulse" />
                <CustomLabel className="text-[#9CA3AF] font-display font-normal">
                  13:50:00
                </CustomLabel>
              </button>
            )}
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-2">
          {/* <video
            ref={videoRef}
            className="border-2 border-[#374151] border-opacity-50 p-1 rounded-xl md:w-[85rem]"
            autoPlay
            playsInline
          /> */}
        </div>

        <div className="w-full border-t-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50 p-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center justify-between gap-5 w-full md:w-auto">
            <div className="border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50 flex items-center justify-center gap-2 p-2 rounded-xl">
              {rangeValue === 0 ? (
                <VolumeX className="text-[#9CA3AF]" />
              ) : rangeValue > 0 && rangeValue < 30 ? (
                <Volume className="text-[#9CA3AF]" />
              ) : rangeValue >= 30 && rangeValue < 70 ? (
                <Volume1 className="text-[#9CA3AF]" />
              ) : (
                <Volume2 className="text-[#9CA3AF]" />
              )}

              <input
                type="range"
                min="0"
                max="100"
                step="10"
                className="cursor-pointer"
                value={rangeValue}
                onChange={handleChangeRange}
              />
            </div>

            <div className="md:hidden">
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
                  onClick={() => setIsMicOn((prev) => !prev)}
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
                  onClick={() => setIsCameraOn((prev) => !prev)}
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
                  onClick={() => setIsRecordingOn((prev) => !prev)}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  <Disc
                    className={`${
                      isRecordingOn
                        ? "text-red-500 animate-pulse"
                        : "text-[#9CA3AF]"
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
                  onClick={() => setIsScreenShareOn((prev) => !prev)}
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
                    {isScreenShareOn
                      ? "Stop share screen"
                      : "Start share screen"}
                  </span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => setIsHandsUp((prev) => !prev)}
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
            </div>
          </div>

          <div className="md:flex items-center justify-center gap-2 hidden">
            <div
              onClick={() => setIsMicOn((prev) => !prev)}
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
              <ChevronUp
                className={`${isMicOn ? "text-white" : "text-[#9CA3AF]"}`}
              />
            </div>

            <div
              onClick={() => setIsCameraOn((prev) => !prev)}
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
              onClick={() => setIsRecordingOn((prev) => !prev)}
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
              onClick={() => {
                setIsScreenShareOn((prev) => !prev);
                startScreenShare();
              }}
              className={`border-2 ${
                isScreenShareOn
                  ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
                  : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
              } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
            >
              <Cast
                className={`${
                  isScreenShareOn ? "text-white" : "text-[#9CA3AF]"
                }`}
              />
              <ChevronUp
                className={`${
                  isScreenShareOn ? "text-white" : "text-[#9CA3AF]"
                }`}
              />
            </div>

            <div
              onClick={() => setIsHandsUp((prev) => !prev)}
              className={`border-2 ${
                isHandsUp
                  ? "border-[#2D8CFF] border-opacity-50 bg-[#2D8CFF]"
                  : "border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50"
              } flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
            >
              <Hand
                className={`${isHandsUp ? "text-white" : "text-[#9CA3AF]"}`}
              />
              <ChevronUp
                className={`${isHandsUp ? "text-white" : "text-[#9CA3AF]"}`}
              />
            </div>

            <div
              onClick={() => setIsEmojiOpen((prev) => !prev)}
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

          <div className="hidden md:flex">
            <button
              onClick={() => setIsClose(true)}
              className="text-xs font-display text-white bg-[#EF4444] p-2 rounded-xl h-10 w-32"
            >
              Leave meeting
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-[30%] h-full flex-col bg-[#1F2937] bg-opacity-50">
        <div className="w-full border-b-2 border-[#374151] border-opacity-50 p-3.5 flex items-center justify-center gap-4">
          <div className="bg-[#374151] bg-opacity-50 flex items-center justify-between p-1 rounded-xl w-full">
            <button
              onClick={() => setMenuOptions("participants")}
              className={`w-full ${
                menuOptions === "participants"
                  ? "bg-[#2D8CFF] text-white"
                  : "text-[#9CA3AF]"
              } p-2 flex items-center justify-center gap-2 rounded-xl`}
            >
              <UsersRound className="w-4 h-4" />
              <CustomLabel
                className={`text-xs font-display ${
                  menuOptions === "participants"
                    ? "text-white"
                    : "text-[#9CA3AF]"
                } font-normal cursor-pointer`}
              >
                Participants
              </CustomLabel>
            </button>
            <button
              onClick={() => setMenuOptions("apps")}
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
              onClick={() => setMenuOptions("chat")}
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

        <div className="p-4 w-full h-full flex flex-col gap-2">
          <div>
            <ContextMenu>
              <ContextMenuTrigger className="w-full flex items-center justify-between gap-2 rounded-xl cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-lg"
                      src={`https://randomuser.me/api/portraits/women/2.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-[#D1D5DB] whitespace-no-wrap font-display font-normal text-lg">
                      {`Rina Jonson`}
                    </p>
                    <p className="text-[#6B7280] whitespace-no-wrap font-display font-normal text-md">
                      {`HOD`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#2D8CFF] bg-opacity-10 flex items-center justify-center p-1 px-4 rounded-xl border-2 border-[#2D8CFF] border-opacity-10">
                    <CustomLabel className="text-xs font-display text-[#2D8CFF] font-light">
                      HOST
                    </CustomLabel>
                  </div>
                  <div>
                    {isMicOn ? (
                      <Mic className="text-white" />
                    ) : (
                      <MicOff className="text-[#9CA3AF]" />
                    )}
                  </div>
                  <div>
                    {isCameraOn ? (
                      <Video className="text-white" />
                    ) : (
                      <VideoOff className="text-[#9CA3AF]" />
                    )}
                  </div>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-[5rem] hover:border-none focus:border-none">
                <ContextMenuItem
                  inset
                  className="w-full flex items-center justify-between"
                >
                  <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                    See Profile
                  </CustomLabel>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>

          <div>
            <ContextMenu>
              <ContextMenuTrigger className="w-full flex items-center justify-between gap-2 rounded-xl cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-lg"
                      src={`https://randomuser.me/api/portraits/women/2.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-[#D1D5DB] whitespace-no-wrap font-display font-normal text-lg">
                      {`Jenny Ferr`}
                    </p>
                    <p className="text-[#6B7280] whitespace-no-wrap font-display font-normal text-md">
                      {`Assistant Professor`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#2D8CFF] bg-opacity-10 flex items-center justify-center p-1 px-4 rounded-xl border-2 border-[#2D8CFF] border-opacity-10">
                    <CustomLabel className="text-xs font-display text-[#2D8CFF] font-light">
                      CO-HOST
                    </CustomLabel>
                  </div>
                  <div>
                    {isMicOn ? (
                      <Mic className="text-white" />
                    ) : (
                      <MicOff className="text-[#9CA3AF]" />
                    )}
                  </div>
                  <div>
                    {isCameraOn ? (
                      <Video className="text-white" />
                    ) : (
                      <VideoOff className="text-[#9CA3AF]" />
                    )}
                  </div>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-[5rem] hover:border-none focus:border-none">
                <ContextMenuItem
                  inset
                  className="w-full flex items-center justify-between"
                >
                  <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                    See Profile
                  </CustomLabel>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </div>
      </div>

      {/* {isSlowNetwork && <CustomNewtworkCheck />} */}

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
    </div>
  );
};

export default PrivateAuthVMeetOnlinePage;
