import { Search, X } from "lucide-react";

type props = {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  onCancel?: () => void;
};

const CustomSearchBox = ({
  placeholder,
  onChange,
  value,
  type,
  onCancel,
}: props) => {
  return (
    <div className="w-full border rounded-full flex items-center gap-2 p-2">
      <input
        type={type}
        className="border-none w-full h--full outline-none text-xs font-display"
        placeholder={placeholder}
        onChange={(event) => onChange && onChange(event)}
        value={value}
      />
      {value ? (
        <X onClick={onCancel} className="w-4 h-4" />
      ) : (
        <Search className="w-4 h-4" />
      )}
    </div>
  );
};

export default CustomSearchBox;
