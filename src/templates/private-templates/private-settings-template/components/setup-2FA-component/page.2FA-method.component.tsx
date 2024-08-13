import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import {
  Ellipsis,
  FolderKey,
  KeyRound,
  MessageSquareMore,
  ShieldEllipsis,
  Smartphone,
} from "lucide-react";
import CustomMenuDropdown from "../../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";
import { TResponseBodyApiType } from "../../../../../api/models/api.reasponse.body.model";

type props = {
  data2FA?: TResponseBodyApiType;
  onClickViewPasskey?: () => void;
};

const PrivateSetup2FAMethodPageComponent = ({
  data2FA,
  onClickViewPasskey,
}: props) => {
  return (
    <div className="w-full">
      <div className="rounded-lg">
        <div className="w-full bg-gray-100 rounded-t-lg p-2 border flex items-center justify-between">
          <div>
            <CustomLabel className="font-display">
              Two-facot methods
            </CustomLabel>
          </div>
        </div>
        <div className="w-full p-2 border-b border-l border-r flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="text-gray-500" />
            <CustomLabel className="text-xs font-display text-gray-500">
              Authenticator app
            </CustomLabel>
            {data2FA?.user2FAMethod?.userAuthenticatorApp && (
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Configured
              </CustomLabel>
            )}
          </div>
          <div>
            <CustomMenuDropdown
              disabled={!data2FA?.userIs2FA}
              buttonComponent={
                <Ellipsis className="text-gray-500 cursor-pointer" />
              }
              marginRight="mr-6"
            >
              {data2FA?.user2FAMethod?.userAuthenticatorApp ? (
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
            {data2FA?.user2FAMethod?.userTextSMS && (
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Configured
              </CustomLabel>
            )}
          </div>
          <div>
            <CustomMenuDropdown
              disabled={!data2FA?.userIs2FA}
              buttonComponent={
                <Ellipsis className="text-gray-500 cursor-pointer" />
              }
              marginRight="mr-6"
            >
              {data2FA?.user2FAMethod?.userTextSMS ? (
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
            <FolderKey className="text-gray-500" />
            <CustomLabel className="text-xs font-display text-gray-500">
              Passkey
            </CustomLabel>
            {data2FA?.userPassKey && (
              <CustomLabel className="text-xs font-light font-display text-white bg-blue-400 p-1 pl-4 pr-4 rounded-full flex items-center justify-center">
                Configured
              </CustomLabel>
            )}
          </div>
          <div>
            <CustomMenuDropdown
              disabled={!data2FA?.userPassKey}
              buttonComponent={
                <Ellipsis className="text-gray-500 cursor-pointer" />
              }
              marginRight="mr-6"
            >
              <DropdownMenuItem
                onClick={onClickViewPasskey}
                className="hover:bg-gray-100 cursor-pointer gap-2"
              >
                <span className="font-display text-xs text-blue-500">
                  View passkey
                </span>
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
          {data2FA?.userPassKey && (
            <div>
              <CustomMenuDropdown
                disabled={!data2FA?.userIs2FA}
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
            downloaded or printed in the last one year. Make sure your recovery
            codes are up-to-date by viewing and downloading or printing them
            again.
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
              disabled={!data2FA?.userIs2FA}
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
                <span className="font-display text-xs">View recovery code</span>
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
  );
};

export default PrivateSetup2FAMethodPageComponent;
