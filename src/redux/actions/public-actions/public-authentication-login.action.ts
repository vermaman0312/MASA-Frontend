import {
  USER_EMAIL_ADDRESS,
  USER_PASSWORD,
  PUBLIC_AUTH_LOGIN_REQUEST,
  PUBLIC_AUTH_LOGIN_SUCCESS,
  PUBLIC_AUTH_LOGIN_FAILURE,
} from "../../constants/public-constants/public-authentication.constant";

export const userEmailAddress = (userEmailAddress: string | null) => {
  return {
    type: USER_EMAIL_ADDRESS,
    payload: userEmailAddress,
  };
};
export const userPassword = (userPassword: string | null) => {
  return {
    type: USER_PASSWORD,
    payload: userPassword,
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
