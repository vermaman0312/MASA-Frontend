import { myApprovalType } from "../../../mock/user-leave-wfh";
import {
  APPLICATION_MENU,
  // Approval
  // My Approval
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
  // Apply new leave and work from home request
  APPLY_LEAVE_REQUEST,
  APPLY_LEAVE_SUCCESS,
  APPLY_LEAVE_FAILURE,

  // Application
  // New Application Form
  APPLICATION_SUBJECT,
  APPLICATION_SUBMITED_TO,
  APPLICATION_BODY,
  IS_APPLICATION_SUBJECT_ERROR,
  IS_APPLICATION_SUBMITED_TO_ERROR,
  // Apply new application request
  NEW_APPLICATION_REQUEST,
  NEW_APPLICATION_SUCCESS,
  NEW_APPLICATION_FAILURE,
  // My Application list
  MY_APPLICATION_REQUEST,
  MY_APPLICATION_SUCCESS,
  MY_APPLICATION_FAILURE,
  // My Application details
  MY_APPLICATION_DETAILS_REQUEST,
  MY_APPLICATION_DETAILS_SUCCESS,
  MY_APPLICATION_DETAILS_FAILURE,
} from "../../constants/private-constants/private-application.constant";

// Application Menu
export const subApplicationMenuAction = (subApplicationMenu: string) => {
  return {
    type: APPLICATION_MENU,
    payload: subApplicationMenu,
  };
};

// My Approval
// Option and Search
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
export const myApprovalFailure = (error: Error) => {
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
export const applyLeaveFailure = (error: Error) => {
  return {
    type: APPLY_LEAVE_FAILURE,
    payload: error,
  };
};

// Application
// New Application Form
export const applicationSubject = (applicationSubject: string | null) => {
  return {
    type: APPLICATION_SUBJECT,
    payload: applicationSubject,
  };
};
export const isApplicationSubjectError = (
  isApplicationSubjectError: boolean
) => {
  return {
    type: IS_APPLICATION_SUBJECT_ERROR,
    payload: isApplicationSubjectError,
  };
};
export const applicationSubmittedTo = (
  applicationSubmitedTo: string | null
) => {
  return {
    type: APPLICATION_SUBMITED_TO,
    payload: applicationSubmitedTo,
  };
};
export const isApplicationSubmittedToError = (
  isApplicationSubmittedToError: boolean
) => {
  return {
    type: IS_APPLICATION_SUBMITED_TO_ERROR,
    payload: isApplicationSubmittedToError,
  };
};
export const applicationBody = (applicationBody: string | null) => {
  return {
    type: APPLICATION_BODY,
    payload: applicationBody,
  };
};
// New Application
export const newApplicationRequest = () => {
  return {
    type: NEW_APPLICATION_REQUEST,
  };
};
export const newApplicationSuccess = (data: string) => {
  return {
    type: NEW_APPLICATION_SUCCESS,
    payload: data,
  };
};
export const newApplicationFailure = (error: Error) => {
  return {
    type: NEW_APPLICATION_FAILURE,
    payload: error,
  };
};
// My application list
export const myApplicationRequest = () => {
  return {
    type: MY_APPLICATION_REQUEST,
  };
};
export const myApplicationSuccess = (data: string) => {
  return {
    type: MY_APPLICATION_SUCCESS,
    payload: data,
  };
};
export const myApplicationFailure = (error: Error) => {
  return {
    type: MY_APPLICATION_FAILURE,
    payload: error,
  };
};
// My Application Detials
export const myApplicationDetailsRequest = () => {
  return {
    type: MY_APPLICATION_DETAILS_REQUEST,
  };
};
export const myApplicationDetailsSuccess = (data: string) => {
  return {
    type: MY_APPLICATION_DETAILS_SUCCESS,
    payload: data,
  };
};
export const myApplicationDetailsFailure = (error: Error) => {
  return {
    type: MY_APPLICATION_DETAILS_FAILURE,
    payload: error,
  };
};
