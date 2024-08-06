import {
  // Device details
  BROWSER_NAME,
  BROWSER_VERSION,
  BROWSER_ID,
  BROWSER_OS,
  BROWSER_ENGINE,
  IP_ADDRESS,
  MAC_ADDRESS,
  LOCATION_LOGINTUDE,
  LOCATION_LATITUDE,
  // Update device details
  UPDATE_DEVICE_DETAILS_REQUEST,
  UPDATE_DEVICE_DETAILS_SUCCESS,
  UPDATE_DEVICE_DETAILS_FAILURE,
  // Get device details
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAILURE,
} from "../../constants/private-constants/private-device-details-constant";

type Action = {
  type: string;
  action: unknown;
  payload: unknown;
};

const deviceDetailsInitialState = {
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
  updateDeviceDetails: {
    loading: false,
    error: null,
    data: null,
  },
  getDeviceDetails: {
    loading: false,
    error: null,
    data: null,
  },
};

export const deviceDetailsState = (
  state = deviceDetailsInitialState,
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
    case UPDATE_DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        updateDeviceDetails: {
          ...state.updateDeviceDetails,
          loading: true,
          error: null,
          data: null,
        },
      };
    case UPDATE_DEVICE_DETAILS_SUCCESS:
      return {
        ...state,
        updateDeviceDetails: {
          ...state.updateDeviceDetails,
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case UPDATE_DEVICE_DETAILS_FAILURE:
      return {
        ...state,
        updateDeviceDetails: {
          ...state.updateDeviceDetails,
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    case DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        getDeviceDetails: {
          ...state.getDeviceDetails,
          loading: true,
          error: null,
          data: null,
        },
      };
    case DEVICE_DETAILS_SUCCESS:
      return {
        ...state,
        getDeviceDetails: {
          ...state.getDeviceDetails,
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case DEVICE_DETAILS_FAILURE:
      return {
        ...state,
        getDeviceDetails: {
          ...state.getDeviceDetails,
          loading: false,
          error: action.payload,
          data: null,
        },
      };
    default:
      return state;
  }
};
