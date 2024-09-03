import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { LayoutPanelTop, Rows3 } from "lucide-react";

type props = {
  isGridView: boolean;
  onClickGridView: () => void;
  onClickListView: () => void;
};

const PrivateVMeetOnlineSideOptionSubHeaderPageComponent = ({
  isGridView,
  onClickGridView,
  onClickListView,
}: props) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <CustomLabel className="text-[#9CA3AF] text-xl font-display font-bold">
          Participants
        </CustomLabel>
      </div>
      <div className="w-36 bg-[#374151] bg-opacity-50 p-1 flex items-center justify-between rounded-xl">
        <button
          onClick={onClickGridView}
          className={`w-full flex items-center justify-center p-1 ${
            isGridView ? "bg-[#2D8CFF] text-white" : ""
          } rounded-xl`}
        >
          <LayoutPanelTop
            className={`${
              isGridView ? "text-white" : "text-[#9CA3AF]"
            } w-5 h-5`}
          />
        </button>
        <button
          onClick={onClickListView}
          className={`w-full flex items-center justify-center p-1 ${
            !isGridView ? "bg-[#2D8CFF] text-white" : ""
          } rounded-xl`}
        >
          <Rows3
            className={`${
              !isGridView ? "text-white" : "text-[#9CA3AF]"
            } w-5 h-5`}
          />
        </button>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineSideOptionSubHeaderPageComponent;
