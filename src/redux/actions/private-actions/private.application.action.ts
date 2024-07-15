import { myApprovalType } from "../../../mock/user-leave-wfh";
import {
  APPLICATION_MENU,
  //My Approval
  MY_APPROVAL_OPTION,
  APPROVAL_SEARCH_INPUT,
  MY_APPROVAL_REQUEST,
  MY_APPROVAL_SUCCESS,
  MY_APPROVAL_FAILURE,
  // Apply Leave Form & Status
  LEAVE_TYPE,
  REQUESTED_DATE,
  FROM_DATE,
  TO_DATE,
  NUMBER_OF_DAYS,
  LEAVE_REASON,
  IS_LEAVE_TYPE_ERROR,
  IS_FROM_DATE_ERROR,
  IS_TO_DATE_ERROR,
  IS_LEAVE_REASON_ERROR,
  AFTER_APPLY_LEAVE,
  APPLY_LEAVE_REQUEST,
  APPLY_LEAVE_SUCCESS,
  APPLY_LEAVE_FAILURE,
} from "../../constants/private-constants/private-application.constant";

// Application Menu
export const subApplicationMenuAction = (subApplicationMenu: string) => {
  return {
    type: APPLICATION_MENU,
    payload: subApplicationMenu,
  };
};

// My Approval Option and Search
export const myApprovalOption = (myApprovalOption: boolean) => {
  return {
    type: MY_APPROVAL_OPTION,
    payload: myApprovalOption,
  };
};
export const approvalSearchInput = (approvalSearchInput: string | null) => {
  return {
    type: APPROVAL_SEARCH_INPUT,
    payload: approvalSearchInput,
  };
};

// My Approval List
export const myApprovalRequest = () => {
  return {
    type: MY_APPROVAL_REQUEST,
  };
};
export const myApprovalSuccess = (myApproval: Array<myApprovalType>) => {
  return {
    type: MY_APPROVAL_SUCCESS,
    payload: myApproval,
  };
};
export const myApprovalFailure = (error: string) => {
  return {
    type: MY_APPROVAL_FAILURE,
    payload: error,
  };
};

// Apply Leave Form
export const leaveType = (leaveType: string | null) => {
  return {
    type: LEAVE_TYPE,
    payload: leaveType,
  };
};
export const isLeaveTypeError = (isLeaveTypeError: boolean) => {
  return {
    type: IS_LEAVE_TYPE_ERROR,
    payload: isLeaveTypeError,
  };
};
export const requestedDate = (requestedDate: Date | null) => {
  return {
    type: REQUESTED_DATE,
    payload: requestedDate,
  };
};
export const fromDate = (fromDate: Date | null) => {
  return {
    type: FROM_DATE,
    payload: fromDate,
  };
};
export const isFromDateError = (isFromDateError: boolean) => {
  return {
    type: IS_FROM_DATE_ERROR,
    payload: isFromDateError,
  };
};
export const toDate = (toDate: Date | null) => {
  return {
    type: TO_DATE,
    payload: toDate,
  };
};
export const isToDateError = (isToDateError: boolean) => {
  return {
    type: IS_TO_DATE_ERROR,
    payload: isToDateError,
  };
};
export const numberOfDays = (numberOfDays: number | null) => {
  return {
    type: NUMBER_OF_DAYS,
    payload: numberOfDays,
  };
};
export const leaveReason = (leaveReason: string | null) => {
  return {
    type: LEAVE_REASON,
    payload: leaveReason,
  };
};
export const isLeaveReasonError = (isLeaveReasonError: boolean) => {
  return {
    type: IS_LEAVE_REASON_ERROR,
    payload: isLeaveReasonError,
  };
};
export const submitLeaveFormDataInitial = () => {
  return {
    type: AFTER_APPLY_LEAVE,
  };
};

// Apply Leave
export const applyLeaveRequest = () => {
  return {
    type: APPLY_LEAVE_REQUEST,
  };
};
export const applyLeaveSuccess = (data: string) => {
  return {
    type: APPLY_LEAVE_SUCCESS,
    payload: data,
  };
};
export const applyLeaveFailure = (error: string) => {
  return {
    type: APPLY_LEAVE_FAILURE,
    payload: error,
  };
};
