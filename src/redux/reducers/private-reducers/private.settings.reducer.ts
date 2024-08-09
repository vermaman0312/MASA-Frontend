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

  // Change password

  // Privacy policies
} from "../../constants/private-constants/private.settings.constant";

const privateSettingStateInitialState = {
  dashboardSetting: {},
  editProfile: {},
  setup2FA: {
    getDetails2FA: {
      loading: false,
      error: null,
      data: null,
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

    // Change password

    // Privacy policies
    default:
      return state;
  }
};
