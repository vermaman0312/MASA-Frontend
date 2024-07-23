import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import CustomSearchBox from "../../../../../components/custom-searchbox/custom-searchbox.component";

type props = {
  loggedInUserRole?: string;
  userName?: string;
  userUniqueId?: string;
  onClickMyApproval?: () => void;
  onClickApproval?: () => void;
  optionValue?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue?: string;
  onCancel?: () => void;
};

const PrivateApprovalHeadingOptionPageComponent = ({
  loggedInUserRole,
  userName,
  userUniqueId,
  onClickMyApproval,
  onClickApproval,
  optionValue,
  onChange,
  inputValue,
  onCancel,
}: props) => {
  return (
    <div className="w-full flex flex-col items-end justify-end">
      <div className="w-full flex flex-col items-end justify-end">
        <CustomLabel className="font-display text-lg font-medium text-gray-900">
          {userName}
        </CustomLabel>
        <CustomLabel className="font-display text-sm font-medium text-gray-900">
          {userUniqueId}
        </CustomLabel>
      </div>
      <div className="mt-3">
        <div className="flex flex-col md:flex-row items-end justify-end gap-5">
          {loggedInUserRole?.toLowerCase() !== "student" && (
            <div>
              <div className="bg-gray-200 p-1 flex items-center justify-between w-64 rounded-lg">
                <button
                  onClick={onClickMyApproval}
                  className={`w-full ${
                    optionValue ? "bg-white" : "bg-transparent"
                  } p-1 text-xs font-display font-medium text-gray-900 rounded-lg transition-all`}
                >
                  My Approval
                </button>
                <button
                  onClick={onClickApproval}
                  className={`w-full ${
                    !optionValue ? "bg-white" : "bg-transparent"
                  } p-1 text-xs font-display font-medium text-gray-900 rounded-lg transition-all`}
                >
                  Approval
                </button>
              </div>
            </div>
          )}
          <div>
            <CustomSearchBox
              placeholder="Search..."
              onChange={onChange}
              value={inputValue}
              onCancel={onCancel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateApprovalHeadingOptionPageComponent;
