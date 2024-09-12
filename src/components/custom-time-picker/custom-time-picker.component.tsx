import { ChangeEvent } from "react";

type Props = {
  title?: string;
  onChange?: (time: string | undefined) => void;
  value?: string;
  isError?: boolean;
  padding?: string;
  borderColor?: string;
  backgroundColor?: string;
};

const CustomTimePicker = ({
  title,
  onChange,
  value,
  isError,
  padding,
  borderColor,
  backgroundColor,
}: Props) => {
  const formatDateForTimeInput = (timeValue: string | undefined): string => {
    return timeValue ?? "";
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const time = event.target.value || undefined;
    onChange?.(time);
  };

  return (
    <div className={`w-full p-1 rounded-lg`}>
      <input
        type="time"
        onChange={handleInputChange}
        value={formatDateForTimeInput(value)}
        className={`outline-none active:outline-none focus:outline-none w-full rounded-lg ${
          backgroundColor && backgroundColor
        } ${borderColor ? borderColor : "border-none"} ${
          padding ? padding : "p-1"
        } ${isError ? "text-red-500" : ""} text-white`}
      />
    </div>
  );
};

export default CustomTimePicker;
