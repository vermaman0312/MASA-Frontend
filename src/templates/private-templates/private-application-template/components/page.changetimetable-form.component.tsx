import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../../components/custom-input-field/custom-input-field.component";
import { Textarea } from "../../../../components/custom-textarea/custom-textarea.component";
import { CustomDatePicker } from "../../../../components/custom-datepicker/custom-datepicker.component";

type props = {
  requestedDateTime?: Date;
  onChangeFromDateTime?: (value: Date) => void;
  fromDateTimeValue?: Date;
  isFromDateTimeError?: boolean;
  onChangeToDateTime?: (value: Date) => void;
  toDateTimeValue?: Date;
  isToDateTimeError?: boolean;
  onChangeReason?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  reasonValue?: string;
  isReasonError?: boolean;
  onClick?: () => void;
};

const PrivateChangeTimeTableFormPageComponent = ({
  requestedDateTime,
  onChangeFromDateTime,
  fromDateTimeValue,
  isFromDateTimeError,
  onChangeToDateTime,
  toDateTimeValue,
  isToDateTimeError,
  onChangeReason,
  reasonValue,
  isReasonError,
  onClick,
}: props) => {
  return (
    <div className="w-full">
      <div>
        <CustomLabel className="text-xs font-display text-gray-900">
          Requested date and time:
        </CustomLabel>
        <CustomInputField
          disabled
          type="text"
          value={requestedDateTime?.toLocaleString()}
          className="focus:outline-none focus:border-none active:border-none active:outline-none"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <div className="mt-5">
          <CustomLabel className="text-xs font-display text-gray-900">
            From time:
          </CustomLabel>
          <CustomDatePicker
            title="Select date"
            disabled={(date: Date) => date < new Date()}
            onSelect={(date) =>
              onChangeFromDateTime && onChangeFromDateTime(date as Date)
            }
            selected={fromDateTimeValue}
            isError={isFromDateTimeError}
          />
        </div>
        <div className="mt-5">
          <CustomLabel className="text-xs font-display text-gray-900">
            To time:
          </CustomLabel>
          <CustomDatePicker
            title="Select date"
            disabled={(date: Date) => date < (fromDateTimeValue || new Date())}
            onSelect={(date) =>
              onChangeToDateTime && onChangeToDateTime(date as Date)
            }
            selected={toDateTimeValue}
            isError={isToDateTimeError}
          />
        </div>
      </div>
      <div className="mt-5">
        <CustomLabel className="text-xs font-display text-gray-900">
          Reason:
        </CustomLabel>
        <Textarea
          placeholder="write a reason here..."
          onChange={(event) => onChangeReason && onChangeReason(event)}
          value={reasonValue}
          className={`border rounded-lg h-40 scroll-container p-2 text-xs font-display ${
            isReasonError && "border-red-500 placeholder:text-red-500"
          }`}
        />
      </div>
      <div className="w-full mt-5 flex items-center justify-end">
        <button
          onClick={onClick}
          className="bg-gray-900 w-full md:w-32 p-2 rounded-lg text-xs text-white font-display"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PrivateChangeTimeTableFormPageComponent;
