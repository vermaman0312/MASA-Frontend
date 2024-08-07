import React from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { ShieldPlus } from "lucide-react";

const PrivateSettingSetup2FAPageTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full mt-3 md:mt-1">
        <CustomLabel className="text-xl font-display">
          Setup Two-factor authentication
        </CustomLabel>
      </div>
      <div className="w-full border border-[#84c5ff] bg-[#d6efff] p-2 rounded-lg flex items-start justify-start gap-2 mt-3">
        <ShieldPlus className="w-6 h-6" />
        <CustomLabel className="text-xs font-display font-light text-justify">
          Because of your contributions on MASA, two-factor authentication will
          be required for your account starting Jan 12, 2024. Thank you for
          helping keep the ecosystem safe! Two-factor authentication adds an
          additional layer of security to your account by requiring more than
          just a password to sign in.
        </CustomLabel>
      </div>
    </div>
  );
};

export default PrivateSettingSetup2FAPageTemplate;
