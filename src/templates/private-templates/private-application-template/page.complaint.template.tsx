import React from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateApplicationComplaintPageTemplate = () => {
  return (
    <div className="w-full h-full">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Complaint
        </CustomLabel>
      </div>
      <div className="w-full mt-5"></div>
    </div>
  );
};

export default PrivateApplicationComplaintPageTemplate;
