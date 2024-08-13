import { Loader, Lock } from "lucide-react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { useState } from "react";

type props = {
  onClick?: () => void;
};

const Private2FAEnablePageComponent = ({ onClick }: props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="w-full border rounded-lg p-4 flex flex-col items-center justify-center gap-2">
      <Lock className="text-gray-500" />
      <CustomLabel className="text-lg font-display text-gray-500 mt-5">
        Two-factor authentication is not enabled yet.
      </CustomLabel>
      <CustomLabel className="text-xs font-display text-gray-500">
        Two-factor authentication adds an additional layer of security to your
        account by requiring more than just a password to sign in.
      </CustomLabel>
      <button
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            onClick && onClick();
          }, 3000);
        }}
        className="text-xs font-display p-2 bg-blue-100 rounded-lg border border-blue-300 mt-5 flex items-center justify-center h-12 w-64"
      >
        {isLoading ? (
          <Loader className="animate-spin" />
        ) : (
          "Enable two-factor authentication"
        )}
      </button>
    </div>
  );
};

export default Private2FAEnablePageComponent;
