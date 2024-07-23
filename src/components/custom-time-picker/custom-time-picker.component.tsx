import React, { ChangeEvent } from "react";

type Props = {
  title?: string;
  onChange?: (time: string | undefined) => void;
  value?: string;
  isError?: boolean;
};

const CustomTimePicker = ({ title, onChange, value, isError }: Props) => {
  const formatDateForTimeInput = (timeValue: string | undefined): string => {
    return timeValue ?? "";
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value || undefined;
    onChange?.(time);
  };

  return (
    <div className={`w-full p-1 border-2 rounded-lg`}>
      <input
        type="time"
        onChange={handleInputChange}
        value={formatDateForTimeInput(value)}
        className={`border-none outline-none active:border-none active:outline-none focus:border-none focus:outline-none w-full rounded-lg p-2 ${
          isError ? "text-red-500" : ""
        }`}
      />
    </div>
  );
};

export default CustomTimePicker;
