import { KeyRound, Loader } from "lucide-react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { useCallback, useState } from "react";

type props = {
  setIsOpen?: (value: boolean) => void;
};

const PrivateSetup2FAPasswordlessSignInPasskeyPageComponent = ({
  setIsOpen,
}: props) => {
  const [isMainLoading, setIsMainLoading] = useState<boolean>(false);

  const handleAddPasskey = useCallback(() => {
    setIsMainLoading(true);
    setTimeout(() => {
      setIsMainLoading(false);
      setIsOpen && setIsOpen(true);
    }, 3000);
  }, [setIsOpen]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 p-8">
      <KeyRound className="text-gray-500" />
      <CustomLabel className="font-display text-md text-gray-500 text-center">
        Passwordless sign-in with passkeys
      </CustomLabel>
      <CustomLabel className="font-display text-xs font-light text-gray-400 text-center">
        Passkeys are webauthn credentials that validate your identity using
        touch, facial recognition, a device password, or a PIN. They can be used
        as a password replacement or as a 2FA method. Passkeys can be used for
        sign-in as a simple and secure alternative to your password and
        two-factor credentials.
      </CustomLabel>
      <CustomLabel className="font-display text-xs font-normal text-gray-500 text-center mt-3">
        This browser or device is reporting partial passkey support, but you may
        be able to use a passkey from a nearby device.
      </CustomLabel>
      <button
        onClick={handleAddPasskey}
        className="border w-32 h-12  text-xs p-2 rounded-lg font-display mt-3 flex items-center justify-center"
      >
        {isMainLoading ? <Loader className="animate-spin" /> : "Add passkey"}
      </button>
    </div>
  );
};

export default PrivateSetup2FAPasswordlessSignInPasskeyPageComponent;
