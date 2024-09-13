import React from "react";

type props = {
  onChangeHour?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueHour?: string;
  onKeyDownHour?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabledHour?: boolean;
  onChangeMinute?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueMinute?: string;
  onKeyDownMinute?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabledMinute?: boolean;
  onChangeSecond?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueSecond?: string;
  onKeyDownSecond?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabledSecond?: boolean;
  onClickAM?: () => void;
  disabledAM?: boolean;
  onClickPM?: () => void;
  disabledPM?: boolean;
  buttonValue?: string;
};

const CustomTimePicker2 = ({
  onChangeHour,
  valueHour,
  onKeyDownHour,
  disabledHour,
  onChangeMinute,
  valueMinute,
  onKeyDownMinute,
  disabledMinute,
  onChangeSecond,
  valueSecond,
  onKeyDownSecond,
  disabledSecond,
  onClickAM,
  disabledAM,
  onClickPM,
  disabledPM,
  buttonValue,
}: props) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
          <input
            disabled={disabledHour}
            value={valueHour}
            onChange={onChangeHour}
            onKeyDown={(e) => onKeyDownHour && onKeyDownHour(e)}
            placeholder="00"
            className="w-full h-full bg-transparent flex items-center justify-center text-2xl font-bold font-family outline-none border-none pl-2 text-[#9CA3AF] placeholder:text-gray-700 select-none"
            maxLength={2}
            minLength={2}
          />
        </div>
        <span className="text-[#9CA3AF]">:</span>
        <div className="w-12 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
          <input
            disabled={disabledMinute}
            value={valueMinute}
            onChange={onChangeMinute}
            onKeyDown={(e) => onKeyDownMinute && onKeyDownMinute(e)}
            placeholder="00"
            className="w-full h-full bg-transparent flex items-center justify-center text-2xl font-bold font-family outline-none border-none pl-2 text-[#9CA3AF] placeholder:text-gray-700"
            maxLength={2}
            minLength={2}
          />
        </div>
        <span className="text-[#9CA3AF]">:</span>
        <div className="w-12 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
          <input
            disabled={disabledSecond}
            value={valueSecond}
            onChange={onChangeSecond}
            onKeyDown={(e) => onKeyDownSecond && onKeyDownSecond(e)}
            placeholder="00"
            className="w-full h-full bg-transparent flex items-center justify-center text-2xl font-bold font-family outline-none border-none pl-2 text-[#9CA3AF] placeholder:text-gray-700"
            maxLength={2}
            minLength={2}
          />
        </div>
      </div>
      <div className="w-24 h-12 rounded-lg border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50 flex items-center justify-between p-1">
        <button
          disabled={disabledAM}
          onClick={onClickAM}
          className={`${
            buttonValue === "AM" && "bg-gray-700"
          } w-full h-full rounded-lg text-xs font-display text-[#9CA3AF] transition-all`}
        >
          AM
        </button>
        <button
          disabled={disabledPM}
          onClick={onClickPM}
          className={`${
            buttonValue === "PM" && "bg-gray-700"
          } w-full h-full rounded-lg text-xs font-display text-[#9CA3AF] transition-all`}
        >
          PM
        </button>
      </div>
    </div>
  );
};

export default CustomTimePicker2;
