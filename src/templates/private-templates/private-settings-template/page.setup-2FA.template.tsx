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
import { useDetails2FAMutation } from "../../../api/mutations/private-mutation/settings/details-2FA.mutation";
import { useEffect } from "react";
import { TBodyApiType } from "../../../api/models/api.body.model";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-index";
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import CustomMenuDropdown from "../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";

const PrivateSettingSetup2FAPageTemplate = () => {
  const mutate = useDetails2FAMutation();
  useEffect(() => {
    mutate.mutate({
      verifyToken: "123",
      token: localStorage.getItem("token"),
    } as TBodyApiType);
  }, []);
  const details2FA = useSelector(
    (state: RootState) => state.privateSettingState.setup2FA.getDetails2FA
  );
  const data2FA = (details2FA as TStateResponseApiType).data?.Data;
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
          <CustomDropdown
            title="Select preffered 2FA method"
            list={[
              "Google authenticator app",
              "Microsoft authenticator app",
              "SMS/Text",
            ]}
            value={data2FA?.userPreffered2FAApp}
          />
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
              {(data2FA?.user2FAMethod?.includes("Google authenticator app") ||
                data2FA?.user2FAMethod?.includes(
                  "Microsoft authenticator app"
                )) && (
                <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                  Configured
                </CustomLabel>
              )}
            </div>
            <div>
              <CustomMenuDropdown
                buttonComponent={
                  <Ellipsis className="text-gray-500 cursor-pointer" />
                }
                marginRight="mr-6"
              >
                {data2FA?.user2FAMethod?.includes("authenticator app") ? (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs text-red-500">
                      Disable
                    </span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs text-blue-500">
                      Enable
                    </span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <span className="font-display text-xs">Edit</span>
                </DropdownMenuItem>
              </CustomMenuDropdown>
            </div>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquareMore className="text-gray-500" />
              <CustomLabel className="text-xs font-display text-gray-500">
                SMS/Text Messages
              </CustomLabel>
              {data2FA?.user2FAMethod?.includes("SMS/Text") && (
                <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                  Configured
                </CustomLabel>
              )}
            </div>
            <div>
              <CustomMenuDropdown
                buttonComponent={
                  <Ellipsis className="text-gray-500 cursor-pointer" />
                }
                marginRight="mr-6"
              >
                {data2FA?.user2FAMethod?.includes("SMS/Text") ? (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs text-red-500">
                      Disable
                    </span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs text-blue-500">
                      Enable
                    </span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <span className="font-display text-xs">Edit</span>
                </DropdownMenuItem>
              </CustomMenuDropdown>
            </div>
          </div>
          <div className="w-full p-2 border-b border-l border-r flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldEllipsis className="text-gray-500" />
              <CustomLabel className="text-xs font-display text-gray-500">
                Security keys
              </CustomLabel>
              {data2FA?.userSecurityKey && (
                <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                  Configured
                </CustomLabel>
              )}
            </div>
            {data2FA?.userPassKey && data2FA?.userPassKey?.length > 0 && (
              <div>
                <CustomMenuDropdown
                  buttonComponent={
                    <Ellipsis className="text-gray-500 cursor-pointer" />
                  }
                  marginRight="mr-6"
                >
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs">
                      View security code
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs">
                      Download security code
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <span className="font-display text-xs">
                      Change security code
                    </span>
                  </DropdownMenuItem>
                </CustomMenuDropdown>
              </div>
            )}
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
              {data2FA?.userRecoveryCode && (
                <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                  Configured
                </CustomLabel>
              )}
            </div>
            <div>
              <CustomMenuDropdown
                buttonComponent={
                  <Ellipsis className="text-gray-500 cursor-pointer" />
                }
                marginRight="mr-6"
              >
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <span className="font-display text-xs">
                    Generate recovery code
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <span className="font-display text-xs">
                    View recovery code
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <span className="font-display text-xs">
                    Download recovery code
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <span className="font-display text-xs">
                    Change recovery code
                  </span>
                </DropdownMenuItem>
              </CustomMenuDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateSettingSetup2FAPageTemplate;
