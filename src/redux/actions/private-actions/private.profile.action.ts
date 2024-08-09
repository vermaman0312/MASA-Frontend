import { TResponseApiType } from "../../../api/models/api.response.model";
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
export const profileDetailsSuccess = (data: TResponseApiType) => {
  return {
    type: USER_DETAILS_SUCCESS,
    payload: data,
  };
};
export const profileDetailsFailure = (error: TResponseApiType) => {
  return {
    type: USER_DETAILS_FAILURE,
    payload: error,
  };
};
