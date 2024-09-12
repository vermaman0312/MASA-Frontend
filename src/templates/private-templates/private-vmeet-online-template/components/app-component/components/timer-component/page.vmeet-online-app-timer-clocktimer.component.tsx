import React, { useCallback, useEffect, useState } from "react";
import "../../../../../../../css/scroll-container.css";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";

interface timeType {
  hour?: string;
  minute?: string;
  second?: string;
  ampm?: string;
}

const PrivateVMeetOnlineAppTimerClockTimerPageComponent = () => {
  const [timer, setTimer] = useState<timeType>({
    hour: "",
    minute: "",
    second: "",
    ampm: "AM",
  });
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isCounting, setIsCounting] = useState<boolean>(false);

  const handleChangeHour = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (/^\d{0,2}$/.test(String(event.target.value))) {
        setTimer((prevState) => ({
          ...prevState,
          hour: String(event.target.value),
        }));
      }
    },
    []
  );
  const handleChangeMinute = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (/^\d{0,2}$/.test(String(event.target.value))) {
        setTimer((prevState) => ({
          ...prevState,
          minute: String(event.target.value),
        }));
      }
    },
    []
  );
  const handleChangeSecond = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (/^\d{0,2}$/.test(String(event.target.value))) {
        setTimer((prevState) => ({
          ...prevState,
          second: String(event.target.value),
        }));
      }
    },
    []
  );
  const handleSetAMPM = useCallback((value: string) => {
    setTimer((prevState) => ({
      ...prevState,
      ampm: value,
    }));
  }, []);
  const handleKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLInputElement>,
      type: "hour" | "minute" | "second"
    ) => {
      let rawValue = timer[type];
      if (typeof rawValue !== "string") {
        rawValue = String(rawValue);
      }
      const parsedValue = parseInt(rawValue, 10);
      let newValue = isNaN(parsedValue) ? 0 : parsedValue;
      if (isNaN(newValue)) {
        newValue = 0;
      }
      if (event.key === "ArrowUp") {
        if (type === "hour") {
          newValue = (newValue + 1) % 13;
          if (newValue === 0) newValue = 1;
        } else if (type === "minute" || type === "second") {
          newValue = (newValue + 1) % 61;
        }
      } else if (event.key === "ArrowDown") {
        if (type === "hour") {
          newValue = (newValue - 1 + 13) % 13;
          if (newValue === 0) newValue = 12;
        } else if (type === "minute" || type === "second") {
          newValue = (newValue - 1 + 61) % 61;
          if (newValue === 0) newValue = 60;
        }
      }
      setTimer((prevState) => ({
        ...prevState,
        [type]: newValue.toString().padStart(2, "0"),
      }));
      event.preventDefault();
    },
    [timer]
  );

  // Convert time inputs to a Date object
  const getTargetTime = useCallback(() => {
    const now = new Date();
    const targetHour = timer.hour ? parseInt(timer.hour, 10) : 0;
    const targetMinute = timer.minute ? parseInt(timer.minute, 10) : 0;
    const targetSecond = timer.second ? parseInt(timer.second, 10) : 0;

    const isPM = timer.ampm === "PM" && targetHour < 12;
    const isAM = timer.ampm === "AM" && targetHour === 12;

    const targetDate = new Date(now);
    targetDate.setHours(
      isPM ? targetHour + 12 : isAM ? 0 : targetHour,
      targetMinute,
      targetSecond
    );

    return targetDate;
  }, [timer.ampm, timer.hour, timer.minute, timer.second]);

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const targetDate = getTargetTime();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setIsCounting(false);
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }, [getTargetTime]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isCounting) {
      timerId = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [calculateTimeLeft, isCounting]);

  const startCountdown = () => {
    setIsCounting(true);
  };

  // Clear All timer
  const handleClearTime = useCallback(() => {
    setTimeLeft(null);
    setTimer({
      hour: "",
      minute: "",
      second: "",
      ampm: "AM",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-start justify-center animate-zoomIn">
      <div className="w-full flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
            <input
              disabled={timeLeft?.hours ? true : false}
              value={timer?.hour}
              onChange={handleChangeHour}
              onKeyDown={(e) => handleKeyDown(e, "hour")}
              placeholder="00"
              className="w-full h-full bg-transparent flex items-center justify-center text-2xl font-bold font-family outline-none border-none pl-2 text-[#9CA3AF] placeholder:text-gray-700 select-none"
              maxLength={2}
              minLength={2}
            />
          </div>
          <span className="text-[#9CA3AF]">:</span>
          <div className="w-12 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
            <input
              disabled={timeLeft?.minutes ? true : false}
              value={timer?.minute}
              onChange={handleChangeMinute}
              onKeyDown={(e) => handleKeyDown(e, "minute")}
              placeholder="00"
              className="w-full h-full bg-transparent flex items-center justify-center text-2xl font-bold font-family outline-none border-none pl-2 text-[#9CA3AF] placeholder:text-gray-700"
              maxLength={2}
              minLength={2}
            />
          </div>
          <span className="text-[#9CA3AF]">:</span>
          <div className="w-12 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
            <input
              disabled={timeLeft?.seconds ? true : false}
              value={timer?.second}
              onChange={handleChangeSecond}
              onKeyDown={(e) => handleKeyDown(e, "second")}
              placeholder="00"
              className="w-full h-full bg-transparent flex items-center justify-center text-2xl font-bold font-family outline-none border-none pl-2 text-[#9CA3AF] placeholder:text-gray-700"
              maxLength={2}
              minLength={2}
            />
          </div>
        </div>
        <div className="w-24 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50 flex items-center justify-between p-1">
          <button
            disabled={
              timeLeft?.hours || timeLeft?.minutes || timeLeft?.seconds
                ? true
                : false
            }
            onClick={() => handleSetAMPM("AM")}
            className={`${
              timer.ampm === "AM" && "bg-gray-700"
            } w-full h-full rounded-lg text-xs font-display text-[#9CA3AF] transition-all`}
          >
            AM
          </button>
          <button
            disabled={
              timeLeft?.hours || timeLeft?.minutes || timeLeft?.seconds
                ? true
                : false
            }
            onClick={() => handleSetAMPM("PM")}
            className={`${
              timer.ampm === "PM" && "bg-gray-700"
            } w-full h-full rounded-lg text-xs font-display text-[#9CA3AF] transition-all`}
          >
            PM
          </button>
        </div>
      </div>

      <div className="w-full h-full p-10 mt-5 flex items-center justify-center">
        <div
          className={`w-64 h-64 border-8 border-dotted rounded-full p-4 flex items-center justify-center gap-2 ${
            timeLeft?.hours.toString().padStart(2, "0") === "00" &&
            timeLeft?.minutes.toString().padStart(2, "0") < "05" &&
            "border-orange-500"
          } ${
            timeLeft?.hours.toString().padStart(2, "0") === "00" &&
            timeLeft?.minutes.toString().padStart(2, "0") <= "02" &&
            "border-red-600"
          }`}
        >
          <CustomLabel
            className={`text-4xl font-display font-bold text-[#9CA3AF] ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") < "05" &&
              "text-orange-500"
            } ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") <= "02" &&
              "text-red-600"
            }`}
          >
            {timeLeft?.hours.toString().padStart(2, "0") ?? "00"}
          </CustomLabel>
          <span
            className={`text-4xl text-[#9CA3AF] font-display ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") < "05" &&
              "text-orange-500"
            } ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") <= "02" &&
              "text-red-600"
            }`}
          >
            :
          </span>
          <CustomLabel
            className={`text-4xl font-display font-bold text-[#9CA3AF] ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") < "05" &&
              "text-orange-500"
            } ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") <= "02" &&
              "text-red-600"
            }`}
          >
            {timeLeft?.minutes.toString().padStart(2, "0") ?? "00"}
          </CustomLabel>
          <span
            className={`text-4xl text-[#9CA3AF] font-display ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") < "05" &&
              "text-orange-500"
            } ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") <= "02" &&
              "text-red-600"
            }`}
          >
            :
          </span>
          <CustomLabel
            className={`text-4xl font-display font-bold text-[#9CA3AF] ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") < "05" &&
              "text-orange-500"
            } ${
              timeLeft?.hours.toString().padStart(2, "0") === "00" &&
              timeLeft?.minutes.toString().padStart(2, "0") <= "02" &&
              "text-red-600"
            }`}
          >
            {timeLeft?.seconds.toString().padStart(2, "0") ?? "00"}
          </CustomLabel>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <button
          disabled={timer.hour || timer.minute || timer.second ? false : true}
          onClick={startCountdown}
          className="w-full rounded-lg text-xs font-display p-2 text-[#9CA3AF] border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50"
        >
          Start Timer
        </button>
        <button
          onClick={handleClearTime}
          className="w-full rounded-lg text-xs font-display p-2 text-white border-2 border-[#f92e3b] border-opacity-50 bg-[#f92e3b]"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppTimerClockTimerPageComponent;
