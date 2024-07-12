import React from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomDropdown from "../../../components/custom-dropdown/custom-dropdown.component";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";

const leaveType = ["Full leave", "Half leave", "Quarter leave"];

const PrivateApplicationApplyLeavePageTemplate = () => {
  return (
    <div className="w-full h-full">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Apply new leave
        </CustomLabel>
      </div>
      <div className="mt-5 w-full">
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Select leave type:
          </CustomLabel>
          <CustomDropdown title="Select your leave type" list={leaveType} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="w-full">
            <CustomLabel className="text-xs font-display text-gray-900">
              Requested date:
            </CustomLabel>
            <CustomInputField
              disabled
              type="text"
              value={new Date().toLocaleDateString()}
              className="focus:outline-none focus:border-none active:border-none active:outline-none"
            />
          </div>
          <div className="w-full">
            <CustomLabel className="text-xs font-display text-gray-900">
              User unique ID:
            </CustomLabel>
            <CustomInputField
              disabled
              type="text"
              value="20SOECE11091"
              className="focus:outline-none focus:border-none active:border-none active:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div className="w-full">
            <CustomLabel className="text-xs font-display text-gray-900">
              From date:
            </CustomLabel>
            <CustomInputField
              type="date"
              value={new Date().toLocaleDateString()}
              className="focus:outline-none focus:border-none active:border-none active:outline-none"
            />
          </div>
          <div className="w-full">
            <CustomLabel className="text-xs font-display text-gray-900">
              To date:
            </CustomLabel>
            <CustomInputField
              type="date"
              value="20SOECE11091"
              className="focus:outline-none focus:border-none active:border-none active:outline-none"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <CustomLabel className="text-xs font-display text-gray-900">
            Number of days:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={`10 days`}
            className="focus:outline-none focus:border-none active:border-none active:outline-none"
          />
        </div>
        <div className="w-full mt-5">
          <CustomLabel className="text-xs font-display text-gray-900">
            Reason:
          </CustomLabel>
          <CustomInputField
            type="text"
            value={`10 days`}
            className="focus:outline-none focus:border-none active:border-none active:outline-none"
          />
        </div>
        <div className="w-full mt-5 flex items-center justify-end">
          <button className="border text-xs font-display font-medium text-white p-2 bg-gray-700 rounded-lg">
            Submit request
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateApplicationApplyLeavePageTemplate;
