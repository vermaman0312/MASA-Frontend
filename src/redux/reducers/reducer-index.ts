import { combineReducers } from "redux";
import { publicAuthState } from "./public-reducers/public-authentication.reducer";
import { publicComponentState } from "./public-reducers/public-component.reducer";
import { privateComponentState } from "./private-reducers/private.component.reducer";
import { privateApplicationState } from "./private-reducers/private-application.reducer";
import { privateCalenderState } from "./private-reducers/private.calender.reducer";
import { privateContactState } from "./private-reducers/private.contact.reducer";
import { privateDashboardState } from "./private-reducers/private.dashboard.reducer";
import { privateFeePaymentState } from "./private-reducers/private.fee-payment.reducer";
import { privateMessageState } from "./private-reducers/private.message.reducer";
import { privateNoteState } from "./private-reducers/private.notes.reducer";
import { privateNotificationState } from "./private-reducers/private.notification.reducer";
import { privateOnlineExamState } from "./private-reducers/private.online-exam-reducer";
import { privateProfileState } from "./private-reducers/private.profile.reducer";
import { privateResultState } from "./private-reducers/private.result.reducer";
import { privateSettingState } from "./private-reducers/private.settings.reducer";
import { privateTaskSheetState } from "./private-reducers/private.tasksheet.reducer";
import { privateTimeTableState } from "./private-reducers/private.time-table.reducer";
import { privateUsersState } from "./private-reducers/private.users.reducer";
import { privateVMeetState } from "./private-reducers/private.v-meet.reducer";
import { privateVNXTState } from "./private-reducers/private.v-nxt.reducer";

const reducerIndex = combineReducers({
  // Public
  publicComponentState: publicComponentState,
  publicAuthState: publicAuthState,
  // Private
  privateComponentState: privateComponentState,
  privateApplicationState: privateApplicationState,
  privateCalenderState: privateCalenderState,
  privateContactState: privateContactState,
  privateDashboardState: privateDashboardState,
  privateFeePaymentState: privateFeePaymentState,
  privateMessageState: privateMessageState,
  privateNoteState: privateNoteState,
  privateNotificationState: privateNotificationState,
  privateOnlineExamState: privateOnlineExamState,
  privateProfileState: privateProfileState,
  privateResultState: privateResultState,
  privateSettingState: privateSettingState,
  privateTaskSheetState: privateTaskSheetState,
  privateTimeTableState: privateTimeTableState,
  privateUsersState: privateUsersState,
  privateVMeetState: privateVMeetState,
  privateVNXTState: privateVNXTState,
});

export default reducerIndex;
