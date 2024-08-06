import { ResponseType } from "../../../api/models/public-api-models/public-get-username-api.model";
import {
  IP_GET_USER_NAME_REQUEST,
  IP_GET_USER_NAME_SUCCESS,
  IP_GET_USER_NAME_FAILURE,
} from "../../constants/public-constants/public-component.constant";

export const getUserNamePublicViaIpRequest = () => {
  return {
    type: IP_GET_USER_NAME_REQUEST,
  };
};
export const getUserNamePublicViaIpSuccess = (
  data: ResponseType
) => {
  return {
    type: IP_GET_USER_NAME_SUCCESS,
    payload: data,
  };
};
export const getUserNamePublicViaIpFailure = (
  error: ResponseType
) => {
  return {
    type: IP_GET_USER_NAME_FAILURE,
    payload: error,
  };
};
