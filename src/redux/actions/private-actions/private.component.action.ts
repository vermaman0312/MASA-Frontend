import { TResponseApiType } from "../../../api/models/api.response.model";
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

// Menu option
export const menuAction = (menuItem: string) => {
  return {
    type: PRIVATE_MENU_OPTION,
    payload: menuItem,
  };
};

// Device
// Device details
export const browserName = (browserName: string | null) => {
  return {
    type: BROWSER_NAME,
    payload: browserName,
  };
};
export const browserVersion = (browserVersion: string | null) => {
  return {
    type: BROWSER_VERSION,
    payload: browserVersion,
  };
};
export const browserId = (browserId: string | null) => {
  return {
    type: BROWSER_ID,
    payload: browserId,
  };
};
export const browserOs = (browserOs: string | null) => {
  return {
    type: BROWSER_OS,
    payload: browserOs,
  };
};
export const browserEngine = (browserEngine: string | null) => {
  return {
    type: BROWSER_ENGINE,
    payload: browserEngine,
  };
};
export const ipAddress = (ipAddress: string | null) => {
  return {
    type: IP_ADDRESS,
    payload: ipAddress,
  };
};
export const macAddress = (macAddress: string | null) => {
  return {
    type: MAC_ADDRESS,
    payload: macAddress,
  };
};
export const longitude = (longitude: number | null) => {
  return {
    type: LOCATION_LOGINTUDE,
    payload: longitude,
  };
};
export const latitude = (latitude: number | null) => {
  return {
    type: LOCATION_LATITUDE,
    payload: latitude,
  };
};

// Update device details
export const updateDeviceDetailsRequest = () => {
  return {
    type: UPDATE_DEVICE_DETAILS_REQUEST,
  };
};
export const updateDeviceDetailsSuccess = (data: TResponseApiType) => {
  return {
    type: UPDATE_DEVICE_DETAILS_SUCCESS,
    payload: data,
  };
};
export const updateDeviceDetailsFailure = (error: TResponseApiType) => {
  return {
    type: UPDATE_DEVICE_DETAILS_FAILURE,
    payload: error,
  };
};

// Get device details
export const getDeviceDetailsRequest = () => {
  return {
    type: DEVICE_DETAILS_REQUEST,
  };
};
export const getDeviceDetailsSuccess = (data: TResponseApiType) => {
  return {
    type: DEVICE_DETAILS_SUCCESS,
    payload: data,
  };
};
export const getDeviceDetailsFailure = (error: TResponseApiType) => {
  return {
    type: DEVICE_DETAILS_FAILURE,
    payload: error,
  };
};
