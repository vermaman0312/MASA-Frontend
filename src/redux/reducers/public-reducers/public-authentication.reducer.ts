import {
  USER_EMAIL_ADDRESS,
  USER_PASSWORD,
  PUBLIC_AUTH_LOGIN_REQUEST,
  PUBLIC_AUTH_LOGIN_SUCCESS,
  PUBLIC_AUTH_LOGIN_FAILURE,
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
      userPassword: null,
    },
    loginState: {
      loading: false,
      data: null,
      error: null,
    },
  },
};

export const publicAuthState = (
  state = publicAuthenticationInitialState,
  action: Action
) => {
  switch (action.type) {
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
    case PUBLIC_AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          loginState: {
            ...state.loginDetails.loginState,
            loading: true,
            data: null,
            error: null,
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
            error: null,
          },
        },
      };
    case PUBLIC_AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loginDetails: {
          ...state.loginDetails,
          loginState: {
            ...state.loginDetails.loginState,
            loading: false,
            data: null,
            error: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
