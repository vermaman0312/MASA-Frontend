import { Action } from "../TReducerType";
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
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";

const privateSettingStateInitialState = {
  dashboardSetting: {},
  editProfile: {},
  setup2FA: {
    getDetails2FA: {
      loading: false,
      error: null,
      data: null,
    } as TStateResponseApiType,
    passkey: {
      loading: false,
      error: null,
      data: null,
    } as TStateResponseApiType,
    userIs2FA: {
      userIs2FA: null,
      userIs2FAState: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
    },
    verify2FA: {
      generatedQR: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
      verify2FA: {
        userOTP: null,
        verifyOTP: {
          loading: false,
          error: null,
          data: null,
        } as TStateResponseApiType,
      },
    },
    preffered2FAMethod: {
      preffered2FAMethodOption: null,
      preffered2FAMethod: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
    },
    method2FA: {
      userAuthenticatorApp: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
      userTextSMS: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
      userSecurityKey: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
      userRecoveryCode: {
        loading: false,
        error: null,
        data: null,
      } as TStateResponseApiType,
    },
  },

  changePassword: {},
  privacyPolicies: {},
};

export const privateSettingState = (
  state = privateSettingStateInitialState,
  action: Action
) => {
  switch (action.type) {
    // Dashboard setting

    // Edit profile

    // Notification setting

    // Setup 2FA
    // Get 2FA details
    case GET_DETAILS_2FA_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          getDetails2FA: {
            ...state.setup2FA.getDetails2FA,
            loading: true,
            error: null,
            data: null,
          },
        },
      };
    case GET_DETAILS_2FA_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          getDetails2FA: {
            ...state.setup2FA.getDetails2FA,
            loading: false,
            error: null,
            data: action.payload,
          },
        },
      };
    case GET_DETAILS_2FA_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          getDetails2FA: {
            ...state.setup2FA.getDetails2FA,
            loading: false,
            error: action.payload,
            data: null,
          },
        },
      };
    // Passkey
    case UPDATE_PASSKEY_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          passkey: {
            ...state.setup2FA.passkey,
            loading: true,
            error: null,
            data: null,
          },
        },
      };
    case UPDATE_PASSKEY_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          passkey: {
            ...state.setup2FA.passkey,
            loading: false,
            error: null,
            data: action.payload,
          },
        },
      };
    case UPDATE_PASSKEY_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          passkey: {
            ...state.setup2FA.passkey,
            loading: false,
            error: action.payload,
            data: null,
          },
        },
      };
    // UserIs2FA
    case USER_IS_2FA:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          userIs2FA: {
            ...state.setup2FA.userIs2FA,
            userIs2FA: action.payload,
          },
        },
      };
    case UPDATE_USER_IS_2FA_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          userIs2FA: {
            ...state.setup2FA.userIs2FA,
            userIs2FAState: {
              ...state.setup2FA.userIs2FA.userIs2FAState,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case UPDATE_USER_IS_2FA_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          userIs2FA: {
            ...state.setup2FA.userIs2FA,
            userIs2FAState: {
              ...state.setup2FA.userIs2FA.userIs2FAState,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case UPDATE_USER_IS_2FA_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          userIs2FA: {
            ...state.setup2FA.userIs2FA,
            userIs2FAState: {
              ...state.setup2FA.userIs2FA.userIs2FAState,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };
    // Verify 2FA => Generate QR Code
    case GENERATE_QR_CODE_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            generatedQR: {
              ...state.setup2FA.verify2FA.generatedQR,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case GENERATE_QR_CODE_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            generatedQR: {
              ...state.setup2FA.verify2FA.generatedQR,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case GENERATE_QR_CODE_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            generatedQR: {
              ...state.setup2FA.verify2FA.generatedQR,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };
    // Verify 2FA => OTP INPUT
    case USER_OTP_2FA:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            verify2FA: {
              ...state.setup2FA.verify2FA.verify2FA,
              userOTP: action.payload,
            },
          },
        },
      };
    case VERIFY_2FA_OTP_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            verify2FA: {
              ...state.setup2FA.verify2FA.verify2FA,
              verifyOTP: {
                ...state.setup2FA.verify2FA.verify2FA.verifyOTP,
                loading: true,
                error: null,
                data: null,
              },
            },
          },
        },
      };
    case VERIFY_2FA_OTP_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            verify2FA: {
              ...state.setup2FA.verify2FA.verify2FA,
              verifyOTP: {
                ...state.setup2FA.verify2FA.verify2FA.verifyOTP,
                loading: false,
                error: null,
                data: action.payload,
              },
            },
          },
        },
      };
    case VERIFY_2FA_OTP_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          verify2FA: {
            ...state.setup2FA.verify2FA,
            verify2FA: {
              ...state.setup2FA.verify2FA.verify2FA,
              verifyOTP: {
                ...state.setup2FA.verify2FA.verify2FA.verifyOTP,
                loading: false,
                error: action.payload,
                data: null,
              },
            },
          },
        },
      };
    // Preffered 2FA method
    case PREFFERED_2FA_METHOD_OPTION:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          preffered2FAMethod: {
            ...state.setup2FA.preffered2FAMethod,
            preffered2FAMethodOption: action.payload,
          },
        },
      };
    case UPDATE_PREFFERED_2FA_METHOD_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          preffered2FAMethod: {
            ...state.setup2FA.preffered2FAMethod,
            preffered2FAMethod: {
              ...state.setup2FA.preffered2FAMethod.preffered2FAMethod,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case UPDATE_PREFFERED_2FA_METHOD_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          preffered2FAMethod: {
            ...state.setup2FA.preffered2FAMethod,
            preffered2FAMethod: {
              ...state.setup2FA.preffered2FAMethod.preffered2FAMethod,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case UPDATE_PREFFERED_2FA_METHOD_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          preffered2FAMethod: {
            ...state.setup2FA.preffered2FAMethod,
            preffered2FAMethod: {
              ...state.setup2FA.preffered2FAMethod.preffered2FAMethod,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };
    // Method 2FA => User Authenticator app
    case UPDATE_2FA_USER_AUTHENTICATOR_APP_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userAuthenticatorApp: {
              ...state.setup2FA.method2FA.userAuthenticatorApp,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case UPDATE_2FA_USER_AUTHENTICATOR_APP_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userAuthenticatorApp: {
              ...state.setup2FA.method2FA.userAuthenticatorApp,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case UPDATE_2FA_USER_AUTHENTICATOR_APP_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userAuthenticatorApp: {
              ...state.setup2FA.method2FA.userAuthenticatorApp,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };
    // Method 2FA => SMS/Text
    case UPDATE_2FA_USER_SMS_TEXT_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userTextSMS: {
              ...state.setup2FA.method2FA.userTextSMS,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case UPDATE_2FA_USER_SMS_TEXT_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userTextSMS: {
              ...state.setup2FA.method2FA.userTextSMS,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case UPDATE_2FA_USER_SMS_TEXT_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userTextSMS: {
              ...state.setup2FA.method2FA.userTextSMS,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };
    // Method 2FA => Security keys
    case UPDATE_2FA_USER_SECURITY_KEY_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userSecurityKey: {
              ...state.setup2FA.method2FA.userSecurityKey,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case UPDATE_2FA_USER_SECURITY_KEY_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userSecurityKey: {
              ...state.setup2FA.method2FA.userSecurityKey,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case UPDATE_2FA_USER_SECURITY_KEY_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userSecurityKey: {
              ...state.setup2FA.method2FA.userSecurityKey,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };
    // Method 2FA => Recovery code
    case UPDATE_2FA_USER_RECOVERY_CODE_REQUEST:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userRecoveryCode: {
              ...state.setup2FA.method2FA.userRecoveryCode,
              loading: true,
              error: null,
              data: null,
            },
          },
        },
      };
    case UPDATE_2FA_USER_RECOVERY_CODE_SUCCESS:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userRecoveryCode: {
              ...state.setup2FA.method2FA.userRecoveryCode,
              loading: false,
              error: null,
              data: action.payload,
            },
          },
        },
      };
    case UPDATE_2FA_USER_RECOVERY_CODE_FAILURE:
      return {
        ...state,
        setup2FA: {
          ...state.setup2FA,
          method2FA: {
            ...state.setup2FA.method2FA,
            userRecoveryCode: {
              ...state.setup2FA.method2FA.userRecoveryCode,
              loading: false,
              error: action.payload,
              data: null,
            },
          },
        },
      };

    // Change password

    // Privacy policies
    default:
      return state;
  }
};
