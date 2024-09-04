import { Search, X } from "lucide-react";

type props = {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  onCancel?: () => void;
  onKeyDown?: () => void;
  border?: string;
  borderRadius?: string;
  iconColor?: string;
  textColor?: string;
};

const CustomSearchBox = ({
  placeholder,
  onChange,
  value,
  type,
  onCancel,
  onKeyDown,
  border,
  borderRadius,
  iconColor,
  textColor,
}: props) => {
  return (
    <div
      className={`w-full ${border ? border : "border"} ${
        borderRadius ? borderRadius : "rounded-full"
      } flex items-center gap-2 p-2`}
    >
      <input
        type={type}
        className={`border-none w-full h--full outline-none text-xs font-display bg-transparent ${
          textColor && textColor
        }`}
        placeholder={placeholder}
        onChange={(event) => onChange && onChange(event)}
        onKeyDown={onKeyDown}
        value={value}
      />
      {value ? (
        <X onClick={onCancel} className={`w-4 h-4 ${iconColor && iconColor}`} />
      ) : (
        <Search className={`w-4 h-4 ${iconColor && iconColor}`} />
      )}
    </div>
  );
};

export default CustomSearchBox;
