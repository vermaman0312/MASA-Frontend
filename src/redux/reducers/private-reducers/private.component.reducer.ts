import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import {
  // Menu option
  PRIVATE_MENU_OPTION,
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
} from "../../constants/private-constants/private.component.constant";
import { Action } from "../TReducerType";

const privateComponentInitialState = {
  menuItem: "dashboard",
  device: {
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
    } as TStateResponseApiType,
  },
};

export const privateComponentState = (
  state = privateComponentInitialState,
  action: Action
) => {
  switch (action.type) {
    case PRIVATE_MENU_OPTION:
      return {
        ...state,
        menuItem: action.payload,
      };
    case BROWSER_NAME:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            browserName: action.payload,
          },
        },
      };
    case BROWSER_VERSION:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            browserVersion: action.payload,
          },
        },
      };
    case BROWSER_ID:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            browserId: action.payload,
          },
        },
      };
    case BROWSER_OS:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            browserOs: action.payload,
          },
        },
      };
    case BROWSER_ENGINE:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            browserEngine: action.payload,
          },
        },
      };
    case IP_ADDRESS:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            ipAddress: action.payload,
          },
        },
      };
    case MAC_ADDRESS:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            macAddress: action.payload,
          },
        },
      };
    case LOCATION_LOGINTUDE:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            location: {
              ...state.device.deviceDetails.location,
              longitude: action.payload,
            },
          },
        },
      };
    case LOCATION_LATITUDE:
      return {
        ...state,
        device: {
          ...state.device,
          deviceDetails: {
            ...state.device.deviceDetails,
            location: {
              ...state.device.deviceDetails.location,
              latitude: action.payload,
            },
          },
        },
      };
    case UPDATE_DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        device: {
          ...state.device,
          updateDeviceDetails: {
            ...state.device.updateDeviceDetails,
            loading: true,
            error: null,
            data: null,
          },
        },
      };
    case UPDATE_DEVICE_DETAILS_SUCCESS:
      return {
        ...state,
        device: {
          ...state.device,
          updateDeviceDetails: {
            ...state.device.updateDeviceDetails,
            loading: false,
            error: null,
            data: action.payload,
          },
        },
      };
    case UPDATE_DEVICE_DETAILS_FAILURE:
      return {
        ...state,
        device: {
          ...state.device,
          updateDeviceDetails: {
            ...state.device.updateDeviceDetails,
            loading: false,
            error: action.payload,
            data: null,
          },
        },
      };
    case DEVICE_DETAILS_REQUEST:
      return {
        ...state,
        device: {
          ...state.device,
          getDeviceDetails: {
            ...state.device.getDeviceDetails,
            loading: true,
            error: null,
            data: null,
          },
        },
      };
    case DEVICE_DETAILS_SUCCESS:
      return {
        ...state,
        device: {
          ...state.device,
          getDeviceDetails: {
            ...state.device.getDeviceDetails,
            loading: false,
            error: null,
            data: action.payload,
          },
        },
      };
    case DEVICE_DETAILS_FAILURE:
      return {
        ...state,
        device: {
          ...state.device,
          getDeviceDetails: {
            ...state.device.getDeviceDetails,
            loading: false,
            error: action.payload,
            data: null,
          },
        },
      };
    default:
      return state;
  }
};
