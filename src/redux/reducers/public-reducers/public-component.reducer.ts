import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import {
  IP_GET_USER_NAME_REQUEST,
  IP_GET_USER_NAME_SUCCESS,
} from "../../constants/public-constants/public-component.constant";

type Action = {
  type: string;
  action: string;
  payload: string;
};

const publicComponentInitialState = {
  publicUserDetails: {
    loading: false,
    data: null,
  } as TStateResponseApiType,
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
          data: null,
        },
      };
    case IP_GET_USER_NAME_SUCCESS:
      return {
        ...state,
        publicUserDetails: {
          ...state.publicUserDetails,
          loading: false,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};
