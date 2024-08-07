import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import {
  Ellipsis,
  KeyRound,
  MessageSquareMore,
  ShieldEllipsis,
  ShieldPlus,
  Smartphone,
} from "lucide-react";
import CustomDropdown from "../../../components/custom-dropdown/custom-dropdown.component";

const PrivateSettingSetup2FAPageTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
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
          <CustomDropdown />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2 p-8">
        <KeyRound className="text-gray-500" />
        <CustomLabel className="font-display text-md text-gray-500 text-center">
          Passwordless sign-in with passkeys
        </CustomLabel>
        <CustomLabel className="font-display text-xs font-light text-gray-400 text-center">
          Passkeys are webauthn credentials that validate your identity using
          touch, facial recognition, a device password, or a PIN. They can be
          used as a password replacement or as a 2FA method. Passkeys can be
          used for sign-in as a simple and secure alternative to your password
          and two-factor credentials.
        </CustomLabel>
        <CustomLabel className="font-display text-xs font-normal text-gray-500 text-center mt-3">
          This browser or device is reporting partial passkey support, but you
          may be able to use a passkey from a nearby device.
        </CustomLabel>
        <button className="border text-xs p-2 rounded-lg font-display mt-3">
          Add passkey
        </button>
      </div>

      <div className="w-full p-2">
        <div className="rounded-lg">
          <div className="w-full bg-gray-100 rounded-t-lg p-2 border">
            <CustomLabel className="font-display">
              Two-facot methods
            </CustomLabel>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="text-gray-500" />
              <CustomLabel className="text-xs font-display text-gray-500">
                Authenticator app
              </CustomLabel>
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Configured
              </CustomLabel>
            </div>
            <div>
              <Ellipsis className="text-gray-500" />
            </div>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquareMore className="text-gray-500" />
              <CustomLabel className="text-xs font-display text-gray-500">
                Text/SMS Messages
              </CustomLabel>
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Configured
              </CustomLabel>
            </div>
            <div>
              <Ellipsis className="text-gray-500" />
            </div>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldEllipsis className="text-gray-500" />
              <CustomLabel className="text-xs font-display text-gray-500">
                Security keys
              </CustomLabel>
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Configured
              </CustomLabel>
            </div>
            <div>
              <Ellipsis className="text-gray-500" />
            </div>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between bg-gray-100">
            <CustomLabel className="font-display">Recovery options</CustomLabel>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between bg-yellow-100">
            <CustomLabel className="font-display font-light text-xs">
              Your two-factor authentication recovery codes have not been
              downloaded or printed in the last one year. Make sure your
              recovery codes are up-to-date by viewing and downloading or
              printing them again.
            </CustomLabel>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between rounded-b-lg">
            <div className="flex items-center gap-2">
              <KeyRound className="text-gray-500" />
              <CustomLabel className="text-xs font-display text-gray-500">
                Recovery codes
              </CustomLabel>
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Viewed
              </CustomLabel>
            </div>
            <div>
              <Ellipsis className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSettingSetup2FAPageTemplate;
