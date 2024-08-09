import { Action } from "../TReducerType";
import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
} from "../../constants/private-constants/private.profile.constant";
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";

const privateProfileStateInitialState = {
  profileDetails: {
    loading: false,
    error: null,
    data: null,
  } as TStateResponseApiType,
};

export const privateProfileState = (
  state = privateProfileStateInitialState,
  action: Action
) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        profileDetails: {
          ...state.profileDetails,
          loading: true,
          error: null,
          data: null,
        },
      };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        profileDetails: {
          ...state.profileDetails,
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case USER_DETAILS_FAILURE:
      return {
        ...state,
        profileDetails: {
          ...state.profileDetails,
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
};
