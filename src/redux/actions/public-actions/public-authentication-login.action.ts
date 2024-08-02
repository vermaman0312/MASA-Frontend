import {
  USER_EMAIL_ADDRESS,
  USER_PASSWORD,
  IS_USER_EMAIL_ADDRESS_ERROR,
  IS_USER_PASSWORD_ERROR,
  PUBLIC_AUTH_LOGIN_REQUEST,
  PUBLIC_AUTH_LOGIN_SUCCESS,
  PUBLIC_AUTH_LOGIN_FAILURE,
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
export const userLoginSuccess = (data: string) => {
  return {
    type: PUBLIC_AUTH_LOGIN_SUCCESS,
    payload: data,
  };
};
export const userLoginFailure = (error: string) => {
  return {
    type: PUBLIC_AUTH_LOGIN_FAILURE,
    payload: error,
  };
};
