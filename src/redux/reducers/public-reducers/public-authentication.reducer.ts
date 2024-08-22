import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import {
  // Login
  USER_EMAIL_ADDRESS,
  USER_PASSWORD,
  IS_USER_EMAIL_ADDRESS_ERROR,
  IS_USER_PASSWORD_ERROR,
  PUBLIC_AUTH_LOGIN_REQUEST,
  PUBLIC_AUTH_LOGIN_SUCCESS,
  // Verify 2FA
  PUBLIC_USER_OTP_2FA,
  IS_PUBLIC_USER_OTP_2FA_ERROR,
  PUBLIC_VERIFY_2FA_REQUEST,
  PUBLIC_VERIFY_2FA_SUCCESS,
  // Check 2FA
  IS_2FA_AUTHENTICATION,
} from "../../constants/public-constants/public-authentication.constant";

type Action = {
  type: string;
  action: string;
  payload: string;
};

const publicAuthenticationInitialState = {
  loginDetails: {
    formData: {
      userEmailAddress: null,
      isUserEmailAddressError: false,
      userPassword: null,
      isUserPasswordError: false,
    },
    loginState: {
      loading: false,
      data: null,
    } as TStateResponseApiType,
  },
  verify2FA: {
    userOTP2FA: null,
    isUserOTP2FAError: false,
    verifyOTP: {
      loading: false,
      data: null,
    } as TStateResponseApiType,
  },
  is2FAOn: false,
};

export const publicAuthState = (
  state = publicAuthenticationInitialState,
  action: Action
) => {
  switch (action.type) {
    // Login state
    case USER_EMAIL_ADDRESS:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          formData: {
            ...state.loginDetails.formData,
            userEmailAddress: action.payload,
          },
        },
      };
    case IS_USER_EMAIL_ADDRESS_ERROR:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          formData: {
            ...state.loginDetails.formData,
            isUserEmailAddressError: action.payload,
          },
        },
      };
    case USER_PASSWORD:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          formData: {
            ...state.loginDetails.formData,
            userPassword: action.payload,
          },
        },
      };
    case IS_USER_PASSWORD_ERROR:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          formData: {
            ...state.loginDetails.formData,
            isUserPasswordError: action.payload,
          },
        },
      };
    case PUBLIC_AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          loginState: {
            ...state.loginDetails.loginState,
            loading: true,
            data: null,
          },
        },
      };
    case PUBLIC_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          loginState: {
            ...state.loginDetails.loginState,
            loading: false,
            data: action.payload,
          },
        },
      };
    // Verify 2FA
    case PUBLIC_USER_OTP_2FA:
      return {
        ...state,
        verify2FA: {
          ...state.verify2FA,
          userOTP2FA: action.payload,
        },
      };
    case IS_PUBLIC_USER_OTP_2FA_ERROR:
      return {
        ...state,
        verify2FA: {
          ...state.verify2FA,
          isUserOTP2FAError: action.payload,
        },
      };
    case PUBLIC_VERIFY_2FA_REQUEST:
      return {
        ...state,
        verify2FA: {
          ...state.verify2FA,
          verifyOTP: {
            ...state.verify2FA.verifyOTP,
            loading: true,
            data: null,
          },
        },
      };
    case PUBLIC_VERIFY_2FA_SUCCESS:
      return {
        ...state,
        verify2FA: {
          ...state.verify2FA,
          verifyOTP: {
            ...state.verify2FA.verifyOTP,
            loading: false,
            data: action.payload,
          },
        },
      };
    // Check 2FA state
    case IS_2FA_AUTHENTICATION:
      return {
        ...state,
        is2FAOn: action.payload,
      };
    default:
      return state;
  }
};
