import { ChevronLeft, Timer } from "lucide-react";
import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";
import PrivateVMeetOnlineAppTimerClockTimerPageComponent from "./page.vmeet-online-app-timer-clocktimer.component";
import PrivateVMeetOnlineAppTimerClockAlertPageComponent from "./page.vmeet-online-app-timer-clockalert.component";
import PrivateVMeetOnlineAppTimerClickStopWatchPageComponent from "./page.vmeet-online-app-timer-clockstopwatch.component";
import PrivateVMeetOnlineAppTimerClockPageComponent from "./page.vmeet-online-app-timer-clock.component";

type props = {
  onClickBack: () => void;
};

const PrivateVMeetOnlineAppTimerPageComponent = ({ onClickBack }: props) => {
  const [buttonTimer, setButtonTimer] = useState<string>("timer");

  const handleSelectButton = useCallback(
    (value: string) => {
      setButtonTimer(value);
    },
    [setButtonTimer]
  );

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2 p-4">
        <ChevronLeft
          onClick={onClickBack}
          className="w-5 h-5 text-[#6B7280] cursor-pointer"
        />
        <CustomLabel className="text-lg text-[#6B7280] font-display">
          Timer
        </CustomLabel>
      </div>
      <div
        className="w-full scroll-container flex flex-col items-center justify-start p-4"
        style={{
          height: "calc(100vh - 140px)",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <div>
          <Timer className="w-24 h-24 text-[#6B7280]" />
        </div>
        <div className="w-full mt-5 flex flex-col items-center justify-center">
          <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-center">
            A timer is a device or software feature that measures and tracks the
            passage of time, often used to trigger events or actions after a
            specified duration. It helps in managing and scheduling tasks by
            providing accurate time intervals.
          </CustomLabel>
        </div>
        <div className="w-full mt-3 flex items-center justify-center gap-2">
          <button
            onClick={() => handleSelectButton("timer")}
            className={`w-full ${
              buttonTimer === "timer"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-[#6B7280]"
            } p-2 text-xs font-display rounded-lg`}
          >
            Timer
          </button>
          <button
            onClick={() => handleSelectButton("alert")}
            className={`w-full ${
              buttonTimer === "alert"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-[#6B7280]"
            } p-2 text-xs font-display rounded-lg`}
          >
            Alert
          </button>
          <button
            onClick={() => handleSelectButton("stopwatch")}
            className={`w-full ${
              buttonTimer === "stopwatch"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-[#6B7280]"
            } p-2 text-xs font-display rounded-lg`}
          >
            Stopwatch
          </button>
          <button
            onClick={() => handleSelectButton("clock")}
            className={`w-full ${
              buttonTimer === "clock"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-[#6B7280]"
            } p-2 text-xs font-display rounded-lg`}
          >
            Clock
          </button>
        </div>

        <div className="w-full mt-5 h-full">
          {buttonTimer === "alert" ? (
            <PrivateVMeetOnlineAppTimerClockAlertPageComponent />
          ) : buttonTimer === "stopwatch" ? (
            <PrivateVMeetOnlineAppTimerClickStopWatchPageComponent />
          ) : buttonTimer === "clock" ? (
            <PrivateVMeetOnlineAppTimerClockPageComponent />
          ) : (
            <PrivateVMeetOnlineAppTimerClockTimerPageComponent />
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppTimerPageComponent;
