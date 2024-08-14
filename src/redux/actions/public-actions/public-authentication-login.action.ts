import { TResponseApiType } from "../../../api/models/api.response.model";
import {
  // Login
  USER_EMAIL_ADDRESS,
  USER_PASSWORD,
  IS_USER_EMAIL_ADDRESS_ERROR,
  IS_USER_PASSWORD_ERROR,
  PUBLIC_AUTH_LOGIN_REQUEST,
  PUBLIC_AUTH_LOGIN_SUCCESS,
  // Check 2FA
  IS_2FA_AUTHENTICATION,
} from "../../constants/public-constants/public-authentication.constant";

export const userEmailAddressAction = (userEmailAddress: string | null) => {
  return {
    type: USER_EMAIL_ADDRESS,
    payload: userEmailAddress,
  };
};
export const isUserEmailAddressErrorAction = (
  isUserEmailAddressErrorAction: boolean
) => {
  return {
    type: IS_USER_EMAIL_ADDRESS_ERROR,
    payload: isUserEmailAddressErrorAction,
  };
};
export const userPasswordAction = (userPassword: string | null) => {
  return {
    type: USER_PASSWORD,
    payload: userPassword,
  };
};
export const isUserPasswordErrorAction = (
  isUserPasswordErrorAction: boolean
) => {
  return {
    type: IS_USER_PASSWORD_ERROR,
    payload: isUserPasswordErrorAction,
  };
};

export const userLoginRequest = () => {
  return {
    type: PUBLIC_AUTH_LOGIN_REQUEST,
  };
};
export const userLoginSuccess = (data: TResponseApiType) => {
  return {
    type: PUBLIC_AUTH_LOGIN_SUCCESS,
    payload: data,
  };
};

// Check 2FA
export const user2FAAction = (user2FAAction: boolean) => {
  return {
    type: IS_2FA_AUTHENTICATION,
    payload: user2FAAction,
  };
};
