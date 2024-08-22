import { Loader, Smartphone } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import CustomOtpInputField from "../../../../components/custom-otp-input-field/custom-otp-input-field.component";
import { useDispatch, useSelector } from "react-redux";
import {
  publicIsUserOTP2FAError,
  publicUserOTP2FA,
} from "../../../../redux/actions/public-actions/public-authentication-verify-2FA.action";
import { RootState } from "../../../../redux/redux-index";
import { useVerify2FAOTPMutation } from "../../../../api/mutations/public-mutation/authentication/verify-2FA.mutation";
import { TBodyApiType } from "../../../../api/models/api.body.model";

const PublicVerify2FAOTPPageComponent = () => {
  const dispatch = useDispatch();
  const otpDetails = useSelector(
    (state: RootState) => state.publicAuthState.verify2FA
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mutate = useVerify2FAOTPMutation();

  const handleSubmitOtp = useCallback(() => {
    setIsLoading(true);
    if (!otpDetails.userOTP2FA) {
      dispatch(publicIsUserOTP2FAError(true));
      setIsLoading(false);
      return;
    }
    if (otpDetails.userOTP2FA && (otpDetails.userOTP2FA as string).length < 6) {
      dispatch(publicIsUserOTP2FAError(true));
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      mutate.mutate({
        userOTP: otpDetails.userOTP2FA,
      } as TBodyApiType);
      setIsLoading(false);
    }, 3000);
  }, [dispatch, mutate, otpDetails.userOTP2FA]);
  
  return (
    <div className="w-full mt-5 flex flex-col items-center justify-center p-2 gap-5">
      <div className="w-full md:w-[50%] bg-gray-100 border rounded-lg p-2">
        <div className="w-full flex items-center justify-center">
          <Smartphone className="w-8 h-8 text-gray-400" />
        </div>
        <div className="w-full flex items-center justify-center mt-3">
          <CustomLabel className="font-display text-xl text-gray-500">
            Authentication Code
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center mt-3 p-2">
          <CustomOtpInputField
            onChange={(event) => {
              dispatch(publicUserOTP2FA(event.target.value));
              dispatch(publicIsUserOTP2FAError(false));
            }}
            isOtpError={otpDetails.isUserOTP2FAError as boolean}
          />
        </div>
        <div className="w-full flex items-center justify-center mt-3 p-2">
          <button
            onClick={handleSubmitOtp}
            className="bg-gray-900 text-white p-2 w-full rounded-lg font-display flex items-center justify-center"
          >
            {isLoading ? <Loader className="animate-spin" /> : <>Verify Code</>}
          </button>
        </div>
        <div className="w-full flex items-center justify-start mt-3 p-2">
          <CustomLabel className="font-display text-xs font-light text-gray-500">
            Open your two-factor authenticator (TOTP) app or browser extension
            to view your authentication code.
          </CustomLabel>
        </div>
      </div>
      <div className="w-full flex items-center justify-center"></div>
    </div>
  );
};

export default PublicVerify2FAOTPPageComponent;
