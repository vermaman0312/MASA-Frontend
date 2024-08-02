import {
  BROWSER_NAME,
  BROWSER_VERSION,
  BROWSER_ID,
  BROWSER_OS,
  BROWSER_ENGINE,
  IP_ADDRESS,
  MAC_ADDRESS,
  LOCATION_LOGINTUDE,
  LOCATION_LATITUDE,
} from "../../constants/public-constants/public-component.constant";

type Action = {
  type: string;
  action: string;
  payload: string;
};

const publicComponentInitialState = {
  deviceDetails: {
    browserName: null,
    browserVersion: null,
    browserId: null,
    browserOs: null,
    browserEngine: null,
    ipAddress: null,
    macAddress: null,
    location: {
      longitude: null,
      latitude: null,
    },
  },
};

export const publicComponentState = (
  state = publicComponentInitialState,
  action: Action
) => {
  switch (action.type) {
    case BROWSER_NAME:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          browserName: action.payload,
        },
      };
    case BROWSER_VERSION:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          browserVersion: action.payload,
        },
      };
    case BROWSER_ID:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          browserId: action.payload,
        },
      };
    case BROWSER_OS:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          browserOs: action.payload,
        },
      };
    case BROWSER_ENGINE:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          browserEngine: action.payload,
        },
      };
    case IP_ADDRESS:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          ipAddress: action.payload,
        },
      };
    case MAC_ADDRESS:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          macAddress: action.payload,
        },
      };
    case LOCATION_LOGINTUDE:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          location: {
            ...state.deviceDetails.location,
            longitude: action.payload,
          },
        },
      };
    case LOCATION_LATITUDE:
      return {
        ...state,
        deviceDetails: {
          ...state.deviceDetails,
          location: {
            ...state.deviceDetails.location,
            latitude: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
