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
export const getDetails2FASuccess = (data: string) => {
  return {
    type: GET_DETAILS_2FA_SUCCESS,
    payload: data,
  };
};
export const getDetails2FAFailure = (error: string) => {
  return {
    type: GET_DETAILS_2FA_FAILURE,
    payload: error,
  };
};

// Change password

// Privacy policies
