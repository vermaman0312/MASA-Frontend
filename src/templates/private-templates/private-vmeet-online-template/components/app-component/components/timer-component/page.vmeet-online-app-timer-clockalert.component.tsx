import React, { useState } from "react";
import CustomTimePicker2 from "../../../../../../../components/custom-time-picker/custom-time-picker2.component";
import CustomAnalogClock from "../../../../../../../components/custom-analog-clock/custom-analog-clock.component";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";
import { Pause, Play, Trash2 } from "lucide-react";

const PrivateVMeetOnlineAppTimerClockAlertPageComponent = () => {
  const [alarm, setAlarm] = useState();
  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-2 animate-zoomIn">
      <div className="w-64 h-64 mt-5">
        <CustomAnalogClock border="border-8 border-dotted border-[#374151]" />
      </div>
      <div>
        <CustomTimePicker2 />
      </div>
      <div className="w-full">
        <div className="border-2 border-[#374151] border-opacity-50 p-2 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CustomLabel className="text-xl font-display text-[#6B7280]">
              03:30
            </CustomLabel>
            <CustomLabel className="text-xl font-display text-[#6B7280]">
              PM
            </CustomLabel>
          </div>
          <div className="flex items-center gap-2">
            {alarm ? <Pause /> : <Play />}
            <Trash2 className="text-orange-700 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="w-full rounded-lg text-xs font-display p-2 text-[#9CA3AF] border-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50">
          Set alarm
        </button>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppTimerClockAlertPageComponent;
