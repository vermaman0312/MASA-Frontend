import { TResponseApiType } from "../../../api/models/api.response.model";
import {
  // Verify 2FA
  PUBLIC_USER_OTP_2FA,
  IS_PUBLIC_USER_OTP_2FA_ERROR,
  PUBLIC_VERIFY_2FA_REQUEST,
  PUBLIC_VERIFY_2FA_SUCCESS,
} from "../../constants/public-constants/public-authentication.constant";

export const publicUserOTP2FA = (publicUserOTP2FA: string | null) => {
  return {
    type: PUBLIC_USER_OTP_2FA,
    payload: publicUserOTP2FA,
  };
};
export const publicIsUserOTP2FAError = (publicIsUserOTP2FAError: boolean) => {
  return {
    type: IS_PUBLIC_USER_OTP_2FA_ERROR,
    payload: publicIsUserOTP2FAError,
  };
};
export const publicVerify2FARequest = () => {
  return {
    type: PUBLIC_VERIFY_2FA_REQUEST,
  };
};
export const publicVerify2FASuccess = (data: TResponseApiType) => {
  return {
    type: PUBLIC_VERIFY_2FA_SUCCESS,
    payload: data,
  };
};
