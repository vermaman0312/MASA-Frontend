import {
  Cast,
  ChevronUp,
  Disc,
  EllipsisVertical,
  Hand,
  Mic,
  MicOff,
  ShieldCheck,
  SmilePlus,
  Video,
  VideoOff,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomVMeetLoader from "../../../components/custom-loader/custom-vmeet-loader";
import CustomNewtworkCheck from "../../../components/custom-network-check/custom-network-check.component";
import { useNavigate } from "react-router-dom";
import { CustomDialogBox } from "../../../components/custom-dialogbox/custom.dialogBox.component";

const PrivateAuthVMeetOnlinePage = () => {
  const navigate = useNavigate();
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

          <div className="w-full h-full rounded-xl"></div>

          {isRecordingOn && (
            <div>
              <button className="flex items-center justify-center gap-2 border-2 border-[#374151] border-opacity-50 p-2 w-32 bg-[#374151] bg-opacity-50 rounded-xl">
                <Disc className="w-4 h-4 text-red-500 font-bold animate-pulse" />
                <CustomLabel className="text-[#9CA3AF] font-display font-normal">
                  13:50:00
                </CustomLabel>
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <CustomLabel className="text-white font-display text-4xl">
            Main Container
          </CustomLabel>
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
              <EllipsisVertical className="text-[#9CA3AF] cursor-pointer" />
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
              onClick={() => setIsScreenShareOn((prev) => !prev)}
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
              className={`border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50 flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
            >
              <Hand className="text-[#9CA3AF]" />
              <ChevronUp className="text-[#9CA3AF]" />
            </div>

            <div
              className={`border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50 flex items-center justify-center gap-2 p-2 rounded-xl cursor-pointer`}
            >
              <SmilePlus className="text-[#9CA3AF]" />
              <ChevronUp className="text-[#9CA3AF]" />
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

      <div className="hidden md:flex w-[30%] h-full"></div>

      {isSlowNetwork && <CustomNewtworkCheck />}

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
