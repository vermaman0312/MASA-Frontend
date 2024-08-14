import { TResponseApiType } from "../../../api/models/api.response.model";
import {
  // Dashboard setting

  // Edit profile

  // Notification setting

  // Setup 2FA
  //Get details of 2FA
  GET_DETAILS_2FA_REQUEST,
  GET_DETAILS_2FA_SUCCESS,
  GET_DETAILS_2FA_FAILURE,
  // Passkey
  UPDATE_PASSKEY_REQUEST,
  UPDATE_PASSKEY_SUCCESS,
  UPDATE_PASSKEY_FAILURE,
  // UserIs2FA
  USER_IS_2FA,
  UPDATE_USER_IS_2FA_REQUEST,
  UPDATE_USER_IS_2FA_SUCCESS,
  UPDATE_USER_IS_2FA_FAILURE,
  // Verify 2FA => Generate QR Code
  GENERATE_QR_CODE_REQUEST,
  GENERATE_QR_CODE_SUCCESS,
  GENERATE_QR_CODE_FAILURE,
  // Verify 2FA => OTP INPUT
  USER_OTP_2FA,
  VERIFY_2FA_OTP_REQUEST,
  VERIFY_2FA_OTP_SUCCESS,
  VERIFY_2FA_OTP_FAILURE,
  // Preffered 2FA method
  PREFFERED_2FA_METHOD_OPTION,
  UPDATE_PREFFERED_2FA_METHOD_REQUEST,
  UPDATE_PREFFERED_2FA_METHOD_SUCCESS,
  UPDATE_PREFFERED_2FA_METHOD_FAILURE,
  // Method 2FA => User Authenticator app
  UPDATE_2FA_USER_AUTHENTICATOR_APP_REQUEST,
  UPDATE_2FA_USER_AUTHENTICATOR_APP_SUCCESS,
  UPDATE_2FA_USER_AUTHENTICATOR_APP_FAILURE,
  // Method 2FA => SMS/Text
  UPDATE_2FA_USER_SMS_TEXT_REQUEST,
  UPDATE_2FA_USER_SMS_TEXT_SUCCESS,
  UPDATE_2FA_USER_SMS_TEXT_FAILURE,
  // Method 2FA => Security keys
  UPDATE_2FA_USER_SECURITY_KEY_REQUEST,
  UPDATE_2FA_USER_SECURITY_KEY_SUCCESS,
  UPDATE_2FA_USER_SECURITY_KEY_FAILURE,
  // Method 2FA => Recovery code
  UPDATE_2FA_USER_RECOVERY_CODE_REQUEST,
  UPDATE_2FA_USER_RECOVERY_CODE_SUCCESS,
  UPDATE_2FA_USER_RECOVERY_CODE_FAILURE,

  // Change password

  // Privacy policies
} from "../../constants/private-constants/private.settings.constant";

// Dashboard setting

// Edit profile

// Notification setting

// Setup 2FA
// Get details of 2FA
export const getDetails2FARequest = () => {
  return {
    type: GET_DETAILS_2FA_REQUEST,
  };
};
export const getDetails2FASuccess = (data: TResponseApiType) => {
  return {
    type: GET_DETAILS_2FA_SUCCESS,
    payload: data,
  };
};
export const getDetails2FAFailure = (error: TResponseApiType) => {
  return {
    type: GET_DETAILS_2FA_FAILURE,
    payload: error,
  };
};
// Passkey
export const updatePasskeyRequest = () => {
  return {
    type: UPDATE_PASSKEY_REQUEST,
  };
};
export const updatePasskeySuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_PASSKEY_SUCCESS,
    payload: data,
  };
};
export const updatePasskeyFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_PASSKEY_FAILURE,
    payload: error,
  };
};
// UserIs2FA
export const userIs2FAAction = (userIs2FA: boolean) => {
  return {
    type: USER_IS_2FA,
    payload: userIs2FA,
  };
};
export const updateUserIs2FARequest = () => {
  return {
    type: UPDATE_USER_IS_2FA_REQUEST,
  };
};
export const updateUserIs2FASuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_USER_IS_2FA_SUCCESS,
    payload: data,
  };
};
export const updateUserIs2FAFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_USER_IS_2FA_FAILURE,
    payload: error,
  };
};
// Verify 2FA => Generate QR Code
export const generateQRCodeRequest = () => {
  return {
    type: GENERATE_QR_CODE_REQUEST,
  };
};
export const generateQRCodeSuccess = (data: TResponseApiType) => {
  return {
    type: GENERATE_QR_CODE_SUCCESS,
    payload: data,
  };
};
export const generateQRCodeFailure = (error: TResponseApiType) => {
  return {
    type: GENERATE_QR_CODE_FAILURE,
    payload: error,
  };
};
// Verify 2FA => OTP INPUT
export const userOTP2FAAction = (userOTP: string | null) => {
  return {
    type: USER_OTP_2FA,
    payload: userOTP,
  };
};
export const verify2FAOTPRequest = () => {
  return {
    type: VERIFY_2FA_OTP_REQUEST,
  };
};
export const verify2FAOTPSuccess = (data: TResponseApiType) => {
  return {
    type: VERIFY_2FA_OTP_SUCCESS,
    payload: data,
  };
};
export const verify2FAOTPFailure = (error: TResponseApiType) => {
  return {
    type: VERIFY_2FA_OTP_FAILURE,
    payload: error,
  };
};
// Preffered 2FA method
export const preffered2FAMethodOptionAction = (
  preffered2FAMethodOption: string | null
) => {
  return {
    type: PREFFERED_2FA_METHOD_OPTION,
    payload: preffered2FAMethodOption,
  };
};
export const updatePreffered2FAMethodRequest = () => {
  return {
    type: UPDATE_PREFFERED_2FA_METHOD_REQUEST,
  };
};
export const updatePreffered2FAMethodSuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_PREFFERED_2FA_METHOD_SUCCESS,
    payload: data,
  };
};
export const updatePreffered2FAMethodFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_PREFFERED_2FA_METHOD_FAILURE,
    payload: error,
  };
};
// Method 2FA => User Authenticator app
export const update2FAUserAuthenticatorAppRequest = () => {
  return {
    type: UPDATE_2FA_USER_AUTHENTICATOR_APP_REQUEST,
  };
};
export const update2FAUserAuthenticatorAppSuccess = (
  data: TResponseApiType
) => {
  return {
    type: UPDATE_2FA_USER_AUTHENTICATOR_APP_SUCCESS,
    payload: data,
  };
};
export const update2FAUserAuthenticatorAppFailure = (
  error: TResponseApiType
) => {
  return {
    type: UPDATE_2FA_USER_AUTHENTICATOR_APP_FAILURE,
    payload: error,
  };
};
// Method 2FA => SMS/Text
export const update2FAUserTextSMSRequest = () => {
  return {
    type: UPDATE_2FA_USER_SMS_TEXT_REQUEST,
  };
};
export const update2FAUserTextSMSSuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_2FA_USER_SMS_TEXT_SUCCESS,
    payload: data,
  };
};
export const update2FAUserTextSMSFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_2FA_USER_SMS_TEXT_FAILURE,
    payload: error,
  };
};
// Method 2FA => Security keys
export const update2FAUserSecurityKeyRequest = () => {
  return {
    type: UPDATE_2FA_USER_SECURITY_KEY_REQUEST,
  };
};
export const update2FAUserSecurityKeySuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_2FA_USER_SECURITY_KEY_SUCCESS,
    payload: data,
  };
};
export const update2FAUserSecurityKeyFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_2FA_USER_SECURITY_KEY_FAILURE,
    payload: error,
  };
};
// Method 2FA => Recovery code
export const update2FAUserRecoveryCodeRequest = () => {
  return {
    type: UPDATE_2FA_USER_RECOVERY_CODE_REQUEST,
  };
};
export const update2FAUserRecoveryCodeSuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_2FA_USER_RECOVERY_CODE_SUCCESS,
    payload: data,
  };
};
export const update2FAUserRecoveryCodeFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_2FA_USER_RECOVERY_CODE_FAILURE,
    payload: error,
  };
};
// Change password

// Privacy policies
