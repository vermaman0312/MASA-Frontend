import { getUserNameResponseAPIInterface } from "../../../api/models/public-api-models/public-get-username-api.model";
import {
  IP_GET_USER_NAME_REQUEST,
  IP_GET_USER_NAME_SUCCESS,
  IP_GET_USER_NAME_FAILURE,
} from "../../constants/public-constants/public-component.constant";

type Action = {
  type: string;
  action: string;
  payload: string;
};

const publicComponentInitialState = {
  publicUserDetails: {
    loading: false,
    error: null,
    data: null,
  } as getUserNameResponseAPIInterface,
};

export const publicComponentState = (
  state = publicComponentInitialState,
  action: Action
) => {
  switch (action.type) {
    case IP_GET_USER_NAME_REQUEST:
      return {
        ...state,
        publicUserDetails: {
          ...state.publicUserDetails,
          loading: true,
          error: null,
          data: null,
        },
      };
    case IP_GET_USER_NAME_SUCCESS:
      return {
        ...state,
        publicUserDetails: {
          ...state.publicUserDetails,
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case IP_GET_USER_NAME_FAILURE:
      return {
        ...state,
        publicUserDetails: {
          ...state.publicUserDetails,
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
};
