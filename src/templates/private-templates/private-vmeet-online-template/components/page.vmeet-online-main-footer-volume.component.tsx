import { Volume, Volume1, Volume2, VolumeX } from "lucide-react";
import React from "react";

type props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

const PrivateVMeetOnlineMainFooterVolumePageComponent = ({
  value,
  onChange,
}: props) => {
  return (
    <div className="border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50 flex items-center justify-center gap-2 p-2 rounded-xl">
      {value === 0 ? (
        <VolumeX className="text-[#9CA3AF]" />
      ) : value > 0 && value < 30 ? (
        <Volume className="text-[#9CA3AF]" />
      ) : value >= 30 && value < 70 ? (
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PrivateVMeetOnlineMainFooterVolumePageComponent;
