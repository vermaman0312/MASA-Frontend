import { useDispatch, useSelector } from "react-redux";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import CustomOtpInputField from "../../../../../components/custom-otp-input-field/custom-otp-input-field.component";
import { RootState } from "../../../../../redux/redux-index";
import { TStateResponseApiType } from "../../../../../api/models/api.state.response.model";
import { useGenerateQRSetup2FAMutation } from "../../../../../api/mutations/private-mutation/settings/setup-2FA-generate-QR-code.mutation";
import { useCallback, useRef, useState } from "react";
import { TBodyApiType } from "../../../../../api/models/api.body.model";
import { Loader } from "lucide-react";
import CustomDialogBox2 from "../../../../../components/custom-dialogbox/customDialogBox2.component";
import { useSetup2FAUpdate2FAMutation } from "../../../../../api/mutations/private-mutation/settings/setup.-2FA-update-2FA.mutation";
import { toast } from "react-toastify";
import { useVerifyOTPMutation } from "../../../../../api/mutations/private-mutation/settings/setup-2FA-verifyOTP.mutation";
import {
  isUserOTP2FAErrorAction,
  userOTP2FAAction,
} from "../../../../../redux/actions/private-actions/private.settings.action";
import { customGetCookies } from "../../../../../utils/custom-cookies/custom-cookies.util";

const Private2FAGeneratingQRCodeVerifyOTPPageComponent = () => {
  const { userToken, deviceToken } = customGetCookies("userAuthToken");
  const dispatch = useDispatch();
  const textRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const otpDetails = useSelector(
    (state: RootState) => state.privateSettingState.setup2FA.verify2FA.verify2FA
  );
  const [isSetKeyOpen, setIsSetupKeyOpen] = useState<boolean>(false);
  const generatedData = useSelector(
    (state: RootState) =>
      state.privateSettingState.setup2FA.verify2FA.generatedQR
  );
  const data2Fa = (generatedData as TStateResponseApiType).data?.Data;
  const mutate = useGenerateQRSetup2FAMutation();
  const update2FAMutate = useSetup2FAUpdate2FAMutation();
  const verifyMutate = useVerifyOTPMutation();
  const handleGenerateQRCode = useCallback(() => {
    mutate.mutate({
      deviceToken: deviceToken,
      token: userToken,
    } as TBodyApiType);
  }, [deviceToken, mutate, userToken]);

  const handleUpdate2FA = useCallback(() => {
    update2FAMutate.mutate({
      deviceToken: deviceToken,
      token: userToken,
      userIs2FA: false,
    } as TBodyApiType);
  }, [deviceToken, update2FAMutate, userToken]);

  const handleCopy = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast("Setup key has been copied");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  const handleVerifyOtp = useCallback(() => {
    setIsLoading(true);
    if (!otpDetails.userOTP) {
      dispatch(isUserOTP2FAErrorAction(true));
      setIsLoading(false);
      return;
    }
    if (otpDetails.userOTP && (otpDetails.userOTP as string)?.length < 6) {
      dispatch(isUserOTP2FAErrorAction(true));
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      verifyMutate.mutate({
        deviceToken: deviceToken,
        token: userToken,
        userOTP: otpDetails.userOTP,
      } as TBodyApiType);
      setIsLoading(false);
    }, 5000);
  }, [deviceToken, dispatch, otpDetails.userOTP, userToken, verifyMutate]);

  return (
    <div className="border w-full rounded-lg p-2 flex flex-col items-start">
      <div>
        <CustomLabel className="font-display text-lg text-gray-500">
          Setup authenticator app
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Authenticator apps and browser extensions like 1Password, Authy,
          Microsoft Authenticator, etc. generate one-time passwords that are
          used as a second factor to verify your identity when prompted during
          sign-in.
        </CustomLabel>
      </div>
      <div className="mt-5">
        <CustomLabel className="font-display font-seminbold text-gray-500">
          Scan the QR code
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Use an authenticator app or browser extension to scan. Learn more
          about enabling 2FA.{" "}
          {!data2Fa?.qrImage && <span>Having problem,</span>}{" "}
          {!data2Fa?.qrImage && (
            <span
              onClick={handleGenerateQRCode}
              className="cursor-pointer text-blue-500"
            >
              generated QR Code
            </span>
          )}
        </CustomLabel>
      </div>
      {data2Fa?.qrImage && (
        <div className="border rounded-lg p-1 mt-5 w-full md:w-auto flex items-center justify-center">
          <img
            src={data2Fa?.qrImage}
            alt=""
            style={{ width: "250px", height: "100%" }}
          />
        </div>
      )}
      {mutate.isLoading && (
        <div className="border rounded-lg p-1 mt-5 w-full md:w-[260px] h-[250px] flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      )}
      <div className="mt-5">
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Unable to scan? You can use the{" "}
          <span
            onClick={() => {
              !data2Fa?.qrKey && handleGenerateQRCode();
              setIsSetupKeyOpen(true);
            }}
            className="text-blue-500 cursor-pointer underline"
          >
            setup key
          </span>{" "}
          to manually configure your authenticator app.
        </CustomLabel>
      </div>
      <div className="mt-5">
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Verify the code from the app
        </CustomLabel>
      </div>
      <div className="w-full md:w-[30%]">
        <CustomOtpInputField
          onChange={(event) => {
            dispatch(userOTP2FAAction(event?.target.value));
            dispatch(isUserOTP2FAErrorAction(false));
          }}
          isOtpError={otpDetails.isUserOTPError as boolean}
        />
      </div>
      <div className="w-full mt-5 flex items-center justify-end gap-5">
        <button
          onClick={handleUpdate2FA}
          className="text-xs font-display p-2 border rounded-lg w-32 bg-red-100 border-red-300"
        >
          Cancel
        </button>
        <button
          onClick={handleVerifyOtp}
          className="text-xs font-display p-2 border rounded-lg w-32 bg-blue-100 border-blue-300 flex items-center justify-center"
        >
          {isLoading ? <Loader className="animate-spin w-4 h-4" /> : "Continue"}
        </button>
      </div>

      <div>
        <CustomDialogBox2
          isOpen={isSetKeyOpen}
          title="Setup key"
          onClose={() => setIsSetupKeyOpen(false)}
        >
          <div
            ref={textRef}
            onClick={handleCopy}
            className="border p-2 rounded-lg cursor-pointer"
          >
            {data2Fa?.qrKey}
          </div>
          <div className="mt-5 w-full flex items-center justify-end">
            <button
              onClick={handleCopy}
              className="text-xs p-2 border w-36 font-display rounded-lg border-blue-400 bg-blue-100"
            >
              Copy setup key
            </button>
          </div>
        </CustomDialogBox2>
      </div>
    </div>
  );
};

export default Private2FAGeneratingQRCodeVerifyOTPPageComponent;
