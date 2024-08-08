import { profileDetailsResponseType } from "../../../api/models/private-api-models/private-profile-details-api.model";
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "../../constants/private-constants/private.profile.constant";

// Get Profile Details
export const profileDetailsRequest = () => {
  return {
    type: USER_DETAILS_REQUEST,
  };
};
export const profileDetailsSuccess = (data: profileDetailsResponseType) => {
  return {
    type: USER_DETAILS_SUCCESS,
    payload: data,
  };
};
export const profileDetailsFailure = (error: profileDetailsResponseType) => {
  return {
    type: USER_DETAILS_FAILURE,
    payload: error,
  };
};
