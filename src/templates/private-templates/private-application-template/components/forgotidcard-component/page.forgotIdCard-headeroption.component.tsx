import React from "react";
import CustomSearchBox from "../../../../../components/custom-searchbox/custom-searchbox.component";

type props = {
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  onCancel?: () => void;
  role?: string;
  onClickRequest?: () => void;
  option?: boolean;
  onClickNewRequest?: () => void;
};

const PrivateForgotIdCardHeaderOptionPageComponent = ({
  onChangeSearch,
  searchValue,
  onCancel,
  role,
  onClickRequest,
  option,
  onClickNewRequest,
}: props) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-end gap-2">
      <div>
        <CustomSearchBox
          onChange={onChangeSearch}
          value={searchValue}
          onCancel={onCancel}
        />
      </div>
      <div>
        <div className="bg-gray-300 p-1 flex items-center justify-between rounded-lg">
          {role && role.toLowerCase() !== "student" && (
            <button
              onClick={onClickRequest}
              className={`w-32 ${
                !option && "bg-white"
              } text-xs font-display p-1 rounded-lg text-gray-700 font-medium transition-all`}
            >
              Requests
            </button>
          )}
          <button
            onClick={onClickNewRequest}
            className={`w-32 ${
              option && "bg-white"
            } text-xs font-display p-1 rounded-lg text-gray-700 font-medium transition-all`}
          >
            New Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateForgotIdCardHeaderOptionPageComponent;
