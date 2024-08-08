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
  // Apply new leave and work from home request
  APPLY_LEAVE_REQUEST,
  APPLY_LEAVE_SUCCESS,
  APPLY_LEAVE_FAILURE,

  // Application
  // New Application Form
  APPLICATION_SUBJECT,
  APPLICATION_SUBMITED_TO,
  IS_APPLICATION_SUBJECT_ERROR,
  IS_APPLICATION_SUBMITED_TO_ERROR,
  APPLICATION_BODY,
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

type actionType = {
  type: string;
  action: unknown;
  payload: unknown;
};

export interface appylLeaveFormType {
  leaveType: string | null;
  isLeaveTypeError: boolean;
  requestedDate: Date | null;
  fromDate: Date | null;
  isFromDateError: boolean;
  toDate: Date | null;
  isToDateError: boolean;
  numberOfDays: number | null;
  leaveReason: string | null;
  isLeaveReasonError: boolean;
}

interface myApproval {
  loading: boolean;
  data: Array<myApprovalType> | string | appylLeaveFormType | null;
  error: string | null;
}

export const privateApplicationStateIntialState = {
  subApplicationMenu: "myApproval",
  applicationData: {
    myApproval: {
      myApprovalOption: "myApproval",
      approvalSearchInput: null,
      approvalList: {
        loading: false,
        data: null,
        error: null,
      } as myApproval,
      applyLeave: {
        formData: {
          leaveType: null,
          isLeaveTypeError: false,
          requestedDate: null,
          fromDate: null,
          isFromDateError: false,
          toDate: null,
          isToDateError: false,
          numberOfDays: null,
          leaveReason: null,
          isLeaveReasonError: false,
        } as appylLeaveFormType,
        applyLeave: {
          loading: false,
          data: null,
          error: null,
        } as myApproval,
      },
    },
    application: {
      myApplication: {
        loading: false,
        data: null,
        error: null,
      },
      myApplicationDetails: {
        loading: false,
        data: null,
        error: null,
      },
      writeApplication: {
        formData: {
          applicationSubject: null,
          isApplicationSubjectError: false,
          applicationSubmittedTo: null,
          isApplicationSubmittedToError: false,
          applicationBody: null,
        },
        newApplication: {
          loading: false,
          data: null,
          error: null,
        },
      },
    },
    forgotIDCard: {
      myApplication: {},
      forgotIDCard: {},
      changeIDCard: {},
    },
    timeTable: {
      timeTable: {},
      changeTimeTable: {},
    },
    complaint: {
      complaint: {},
      registerComplaint: {},
      resolveComplaint: {},
    },
    queries: {
      myQueries: {},
      registerQueries: {},
    },
  },
};

export const privateApplicationState = (
  state = privateApplicationStateIntialState,
  action: actionType
) => {
  switch (action.type) {
    case APPLICATION_MENU:
      return {
        ...state,
        subApplicationMenu: action.payload,
      };
    // My Approval
    case MY_APPROVAL_OPTION:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            myApprovalOption: action.payload,
          },
        },
      };
    case APPROVAL_SEARCH_INPUT:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            approvalSearchInput: action.payload,
          },
        },
      };
    case MY_APPROVAL_REQUEST:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            approvalList: {
              loading: true,
              data: null,
              error: null,
            } as myApproval,
          },
        },
      };
    case MY_APPROVAL_SUCCESS:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            approvalList: {
              loading: false,
              data: action.payload,
              error: null,
            } as myApproval,
          },
        },
      };
    case MY_APPROVAL_FAILURE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            approvalList: {
              loading: false,
              data: null,
              error: action.payload,
            } as myApproval,
          },
        },
      };
    // Apply leave form
    case LEAVE_TYPE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                leaveType: action.payload,
              },
            },
          },
        },
      };
    case IS_LEAVE_TYPE_ERROR:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                isLeaveTypeError: action.payload,
              },
            },
          },
        },
      };
    case REQUESTED_DATE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                requestedDate: action.payload,
              },
            },
          },
        },
      };
    case FROM_DATE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                fromDate: action.payload,
              },
            },
          },
        },
      };
    case IS_FROM_DATE_ERROR:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                isFromDateError: action.payload,
              },
            },
          },
        },
      };
    case TO_DATE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                toDate: action.payload,
              },
            },
          },
        },
      };
    case IS_TO_DATE_ERROR:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                isToDateError: action.payload,
              },
            },
          },
        },
      };
    case NUMBER_OF_DAYS:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                numberOfDays: action.payload,
              },
            },
          },
        },
      };
    case LEAVE_REASON:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                leaveReason: action.payload,
              },
            },
          },
        },
      };
    case IS_LEAVE_REASON_ERROR:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              formData: {
                ...state.applicationData.myApproval.applyLeave.formData,
                isLeaveReasonError: action.payload,
              },
            },
          },
        },
      };
    // Apply leave status
    case APPLY_LEAVE_REQUEST:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              applyLeave: {
                ...state.applicationData.myApproval.applyLeave.applyLeave,
                loading: true,
                data: null,
                error: null,
              },
            },
          },
        },
      };
    case APPLY_LEAVE_SUCCESS:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              applyLeave: {
                ...state.applicationData.myApproval.applyLeave.applyLeave,
                loading: false,
                data: action.payload,
                error: null,
              },
            },
          },
        },
      };
    case APPLY_LEAVE_FAILURE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          myApproval: {
            ...state.applicationData.myApproval,
            applyLeave: {
              ...state.applicationData.myApproval.applyLeave,
              applyLeave: {
                ...state.applicationData.myApproval.applyLeave.applyLeave,
                loading: false,
                data: null,
                error: action.payload,
              },
            },
          },
        },
      };

    // Application
    // New Application
    case APPLICATION_SUBJECT:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              formData: {
                ...state.applicationData.application.writeApplication.formData,
                applicationSubject: action.payload,
              },
            },
          },
        },
      };
    case IS_APPLICATION_SUBJECT_ERROR:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              formData: {
                ...state.applicationData.application.writeApplication.formData,
                isApplicationSubjectError: action.payload,
              },
            },
          },
        },
      };
    case APPLICATION_SUBMITED_TO:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              formData: {
                ...state.applicationData.application.writeApplication.formData,
                applicationSubmittedTo: action.payload,
              },
            },
          },
        },
      };
    case IS_APPLICATION_SUBMITED_TO_ERROR:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              formData: {
                ...state.applicationData.application.writeApplication.formData,
                isApplicationSubmittedToError: action.payload,
              },
            },
          },
        },
      };
    case APPLICATION_BODY:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              formData: {
                ...state.applicationData.application.writeApplication.formData,
                applicationBody: action.payload,
              },
            },
          },
        },
      };
    case NEW_APPLICATION_REQUEST:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              newApplication: {
                ...state.applicationData.application.writeApplication
                  .newApplication,
                loading: true,
                data: null,
                error: null,
              },
            },
          },
        },
      };
    case NEW_APPLICATION_SUCCESS:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              newApplication: {
                ...state.applicationData.application.writeApplication
                  .newApplication,
                loading: false,
                data: action.payload,
                error: null,
              },
            },
          },
        },
      };
    case NEW_APPLICATION_FAILURE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            writeApplication: {
              ...state.applicationData.application.writeApplication,
              newApplication: {
                ...state.applicationData.application.writeApplication
                  .newApplication,
                loading: false,
                data: null,
                error: action.payload,
              },
            },
          },
        },
      };
    //My application list
    case MY_APPLICATION_REQUEST:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            myApplication: {
              ...state.applicationData.application.myApplication,
              loading: true,
              data: null,
              error: null,
            },
          },
        },
      };
    case MY_APPLICATION_SUCCESS:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            myApplication: {
              ...state.applicationData.application.myApplication,
              loading: false,
              data: action.payload,
              error: null,
            },
          },
        },
      };
    case MY_APPLICATION_FAILURE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            myApplication: {
              ...state.applicationData.application.myApplication,
              loading: false,
              data: null,
              error: action.payload,
            },
          },
        },
      };
    // My application details
    case MY_APPLICATION_DETAILS_REQUEST:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            myApplicationDetails: {
              ...state.applicationData.application.myApplicationDetails,
              loading: true,
              data: null,
              error: null,
            },
          },
        },
      };
    case MY_APPLICATION_DETAILS_SUCCESS:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            myApplicationDetails: {
              ...state.applicationData.application.myApplicationDetails,
              loading: false,
              data: action.payload,
              error: null,
            },
          },
        },
      };
    case MY_APPLICATION_DETAILS_FAILURE:
      return {
        ...state,
        applicationData: {
          ...state.applicationData,
          application: {
            ...state.applicationData.application,
            myApplicationDetails: {
              ...state.applicationData.application.myApplicationDetails,
              loading: false,
              data: null,
              error: action.payload,
            },
          },
        },
      };
    default:
      return state;
  }
};
