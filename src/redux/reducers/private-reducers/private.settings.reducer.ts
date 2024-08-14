import { Action } from "../TReducerType";
import {
  // Dashboard setting

  // Edit profile

  // Notification setting

  // Setup 2FA
  //Get details of 2FA
  GET_DETAILS_2FA_REQUEST,
  GET_DETAILS_2FA_SUCCESS,
  // Passkey
  UPDATE_PASSKEY_REQUEST,
  UPDATE_PASSKEY_SUCCESS,
  // UserIs2FA
  USER_IS_2FA,
  UPDATE_USER_IS_2FA_REQUEST,
  UPDATE_USER_IS_2FA_SUCCESS,
  // Verify 2FA => Generate QR Code
  GENERATE_QR_CODE_REQUEST,
  GENERATE_QR_CODE_SUCCESS,
  // Verify 2FA => OTP INPUT
  USER_OTP_2FA,
  VERIFY_2FA_OTP_REQUEST,
  VERIFY_2FA_OTP_SUCCESS,
  // Preffered 2FA method
  PREFFERED_2FA_METHOD_OPTION,
  UPDATE_PREFFERED_2FA_METHOD_REQUEST,
  UPDATE_PREFFERED_2FA_METHOD_SUCCESS,
  // Method 2FA => User Authenticator app
  UPDATE_2FA_USER_AUTHENTICATOR_APP_REQUEST,
  UPDATE_2FA_USER_AUTHENTICATOR_APP_SUCCESS,
  // Method 2FA => SMS/Text
  UPDATE_2FA_USER_SMS_TEXT_REQUEST,
  UPDATE_2FA_USER_SMS_TEXT_SUCCESS,
  // Method 2FA => Security keys
  UPDATE_2FA_USER_SECURITY_KEY_REQUEST,
  UPDATE_2FA_USER_SECURITY_KEY_SUCCESS,
  // Method 2FA => Recovery code
  UPDATE_2FA_USER_RECOVERY_CODE_REQUEST,
  UPDATE_2FA_USER_RECOVERY_CODE_SUCCESS,

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
      data: null,
    } as TStateResponseApiType,
    passkey: {
      loading: false,
      data: null,
    } as TStateResponseApiType,
    userIs2FA: {
      userIs2FA: null,
      userIs2FAState: {
        loading: false,
        data: null,
      } as TStateResponseApiType,
    },
    verify2FA: {
      generatedQR: {
        loading: false,
        data: null,
      } as TStateResponseApiType,
      verify2FA: {
        userOTP: null,
        verifyOTP: {
          loading: false,
          data: null,
        } as TStateResponseApiType,
      },
    },
    preffered2FAMethod: {
      preffered2FAMethodOption: null,
      preffered2FAMethod: {
        loading: false,
        data: null,
      } as TStateResponseApiType,
    },
    method2FA: {
      userAuthenticatorApp: {
        loading: false,
        data: null,
      } as TStateResponseApiType,
      userTextSMS: {
        loading: false,
        data: null,
      } as TStateResponseApiType,
      userSecurityKey: {
        loading: false,
        data: null,
      } as TStateResponseApiType,
      userRecoveryCode: {
        loading: false,
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
            data: action.payload,
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
            data: action.payload,
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
              data: action.payload,
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
              data: action.payload,
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
                data: action.payload,
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
              data: action.payload,
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
              data: action.payload,
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
              data: action.payload,
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
              data: action.payload,
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
              data: action.payload,
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
