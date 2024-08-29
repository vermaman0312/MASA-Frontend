import {
  Disc,
  EllipsisVertical,
  ShieldCheck,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomVMeetLoader from "../../../components/custom-loader/custom-vmeet-loader";

const PrivateAuthVMeetOnlinePage = () => {
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [rangeValue, setRangeValue] = useState<number>(50);

  const handleChangeRange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRangeValue(parseInt(event.target.value));
    },
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 5000);
  }, []);

  if (pageLoading) {
    return <CustomVMeetLoader />;
  }

  return (
    <div className="w-screen h-screen flex bg-[#101826]">
      <div className="border-r-2 border-[#374151] border-opacity-50 w-full h-full flex flex-col items-center justify-between">
        <div className="w-full border-b-2 border-[#374151] border-opacity-50 p-4 bg-[#1F2937] bg-opacity-50 flex items-center justify-between">
          <div>
            <ShieldCheck className="text-[#9CA3AF]" />
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 border-2 border-[#374151] border-opacity-50 p-2 w-32 bg-[#374151] bg-opacity-50 rounded-xl">
              <Disc className="w-4 h-4 text-red-500 font-bold animate-pulse" />
              <CustomLabel className="text-[#9CA3AF] font-display font-normal">
                13:50:00
              </CustomLabel>
            </button>
          </div>
        </div>

        <div className=""></div>

        <div className="w-full border-t-2 border-[#374151] border-opacity-50 bg-[#1F2937] bg-opacity-50 p-4 flex items-center justify-between">
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
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="hidden md:flex w-[30%] h-full"></div>
    </div>
  );
};

export default PrivateAuthVMeetOnlinePage;
