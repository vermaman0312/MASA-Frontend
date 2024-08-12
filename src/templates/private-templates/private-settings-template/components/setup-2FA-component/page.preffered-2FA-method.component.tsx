import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import CustomDropdown from "../../../../../components/custom-dropdown/custom-dropdown.component";

type props = {
  preffered2FAMethod: string;
};

const PrivateSetup2FAPreffered2FAMethodPageComponent = ({
  preffered2FAMethod,
}: props) => {
  return (
    <div className="w-full border border-gray-200 rounded-lg p-2">
      <div>
        <CustomLabel className="text-md font-display text-gray-700">
          Preferred 2FA method
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="text-xs font-display font-normal text-gray-400">
          Set your preferred method to use for two-factor authentication when
          signing into Masa.
        </CustomLabel>
      </div>
      <div className="mt-2">
        <CustomDropdown
          title="Select preffered 2FA method"
          list={[
            "Google authenticator app",
            "Microsoft authenticator app",
            "SMS/Text",
          ]}
          value={preffered2FAMethod}
        />
      </div>
    </div>
  );
};

export default PrivateSetup2FAPreffered2FAMethodPageComponent;
