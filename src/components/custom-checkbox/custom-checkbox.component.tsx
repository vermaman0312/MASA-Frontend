import { Checkbox } from "./custom-checkbox.ui";

type props = {
  title?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: boolean;
  isError?: boolean;
  checkColor?: string;
  titleColor?: string;
  borderColor?: string;
};

const CustomCheckBox = ({
  title,
  onChange,
  value,
  isError,
  checkColor,
  titleColor,
  borderColor,
}: props) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onCheckedChange={(checked: boolean) =>
          onChange &&
          onChange({
            target: { checked },
          } as React.ChangeEvent<HTMLInputElement>)
        }
        checked={value}
        defaultChecked={value}
        className={`${
          isError ? "border-red-500" : borderColor ? borderColor : undefined
        } ${checkColor && checkColor}`}
      />
      <label
        htmlFor="terms"
        className={`text-sm font-display ${
          isError && "text-red-500"
        } font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none ${
          titleColor && titleColor
        }`}
      >
        {title}
      </label>
    </div>
  );
};

export default CustomCheckBox;
