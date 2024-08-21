import React from "react";
import CustomToast from "../../../components/custom-toast/custom-toast.component";
import CustomToastBody from "../../../components/custom-toast/custom-toast-body";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PublicAuthPostPageTemplate = () => {
  return (
    <div className="w-full bg-[#0d1b2a] flex flex-col items-center justify-between">
      <div
        onClick={() => CustomToast({ body: <CustomToastBody /> })}
        className="w-full flex items-center justify-start p-4 text-white cursor-pointer font-display"
      >
        Logo
      </div>
      <div className="w-full flex flex-col items-center justify-center p-4 text-white">
        <CustomLabel className="text-3xl font-medium font-display text-white">
          Management and Strategic Automation System
        </CustomLabel>
      </div>
      <div className="w-full flex items-center justify-center p-4 text-white">
        <CustomLabel className="text-xs font-light font-display text-white text-center">
          Copy right 2024 ⓒ MASA
        </CustomLabel>
      </div>
    </div>
  );
};

export default PublicAuthPostPageTemplate;
