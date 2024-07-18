import React from "react";
import CustomDropdown from "../../../../components/custom-dropdown/custom-dropdown.component";

type props = {
  items?: Array<string>;
  onChangeDropdown?: (value: number | string) => void;
  dropdownValue?: string;
  isDropdownError?: boolean;
  onClickRequest?: () => void;
  onClickNewRequest?: () => void;
  isNewRequest?: boolean;
};

const PrivateChangeTimeTableHeaderOptionPageComponent = ({
  items,
  onChangeDropdown,
  dropdownValue,
  isDropdownError,
  onClickRequest,
  onClickNewRequest,
  isNewRequest,
}: props) => {
  return (
    <div className="w-full mt-5 flex flex-wrap items-center justify-end gap-2">
      {isNewRequest && (
        <div className="w-full md:w-64">
          <CustomDropdown
            title="Select change time table type"
            list={items}
            onChange={(value) => onChangeDropdown && onChangeDropdown(value)}
            value={dropdownValue}
            isError={isDropdownError}
          />
        </div>
      )}
      <div>
        <div className="w-64 bg-gray-300 p-1 rounded-lg flex items-center justify-between">
          <button
            onClick={onClickRequest}
            className={`text-xs font-display font-medium p-2 w-full ${
              !isNewRequest && "bg-white"
            } rounded-lg transition-all`}
          >
            Requests
          </button>
          <button
            onClick={onClickNewRequest}
            className={`text-xs font-display font-medium p-2 w-full ${
              isNewRequest && "bg-white"
            } rounded-lg transition-all`}
          >
            New Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateChangeTimeTableHeaderOptionPageComponent;
