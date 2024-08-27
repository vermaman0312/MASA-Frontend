import React from "react";
import CustomDialogBox2 from "../../../../../components/custom-dialogbox/customDialogBox2.component";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { CustomDatePicker } from "../../../../../components/custom-datepicker/custom-datepicker.component";
import CustomTimePicker from "../../../../../components/custom-time-picker/custom-time-picker.component";
import { Textarea } from "../../../../../components/custom-textarea/custom-textarea.component";

type props = {
  isOpen?: boolean;
  onClose?: () => void;
  selectedFromDate?: Date | string;
  selectedToDate?: Date | string;
  selectedFromTime?: string;
  selectedToTime?: string;
  onChangeTextArea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaValue?: string;
  onClick?: () => void;
};

const PrivateVMeetBookingCalenderFormPageComponent = ({
  isOpen,
  onClose,
  selectedFromDate,
  selectedToDate,
  selectedFromTime,
  selectedToTime,
  onChangeTextArea,
  textAreaValue,
  onClick,
}: props) => {
  return (
    <CustomDialogBox2 isOpen={isOpen} onClose={onClose} title="Booking Details">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-full">
          <CustomLabel
            className="font-medium text-xs font-display text-[#0d1b2a]"
            htmlFor="email"
          >
            From Date:
          </CustomLabel>
          <CustomDatePicker selected={selectedFromDate} />
        </div>
        <div className="w-full">
          <CustomLabel
            className="font-medium text-xs font-display text-[#0d1b2a]"
            htmlFor="email"
          >
            To Date:
          </CustomLabel>
          <CustomDatePicker selected={selectedToDate} />
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-full">
          <CustomLabel
            className="font-medium text-xs font-display text-[#0d1b2a]"
            htmlFor="email"
          >
            From Time:
          </CustomLabel>
          <CustomTimePicker value={selectedFromTime} />
        </div>
        <div className="w-full">
          <CustomLabel
            className="font-medium text-xs font-display text-[#0d1b2a]"
            htmlFor="email"
          >
            To Time:
          </CustomLabel>
          <CustomTimePicker value={selectedToTime} />
        </div>
      </div>

      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Reason:
        </CustomLabel>
        <Textarea
          className="border-2 rounded-lg p-2 text-xs font-display h-32"
          style={{ maxHeight: "200px" }}
          onChange={onChangeTextArea}
          value={textAreaValue}
        />
      </div>

      <div className="mt-5 w-full flex items-center justify-end">
        <button
          onClick={onClick}
          className="text-xs text-white font-display bg-gray-700 p-2 w-full rounded-lg"
        >
          Book calender
        </button>
      </div>
    </CustomDialogBox2>
  );
};

export default PrivateVMeetBookingCalenderFormPageComponent;
