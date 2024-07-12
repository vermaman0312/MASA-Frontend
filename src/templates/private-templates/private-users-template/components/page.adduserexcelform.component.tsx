import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import CustomFileInputField from "../../../../components/custom-file-input-field/custom-file-input-field.component";

const PrivateUserAddFormExcelPageComponent = () => {
  return (
    <div className="w-full h-full flex flex-col p-5">
      <div className="w-full">
        <CustomLabel className="text-xl font-display text-gray-900">
          Excel Information
        </CustomLabel>
      </div>
      <div className="mt-5 w-full h-full">
        <div>
          <CustomFileInputField placeholder="excel" />
        </div>
        <div className="w-full mt-5">
          <button className="w-full md:w-32 text-md font-display text-white bg-gray-900 p-2 rounded-lg">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateUserAddFormExcelPageComponent;
