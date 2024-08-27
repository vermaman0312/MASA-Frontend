import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private.route";
import InnerContent from "./inner.content.route";
import { NotFoundPage } from "../pages/error-page/page";
import PublicAuthSignInPage from "../pages/public-pages/public-auth-sign-in-page/page";
import PublicRoute from "./public.route";
import PrivateAuthDashboardPage from "../pages/private-pages/private-auth-dashboard-page/page";
import PrivateAuthNotesPage from "../pages/private-pages/private-auth-notes-page/page";
import PrivateAuthCalenderPage from "../pages/private-pages/private-auth-calender-page/page";
import PrivateAuthAttendancePage from "../pages/private-pages/private-auth-attendance-page/page";
import PrivateAuthUsersPage from "../pages/private-pages/private-auth-users-pages/page";
import PrivateAuthApplicationPage from "../pages/private-pages/private-auth-application-page/page";
import PrivateAuthTasksheetPage from "../pages/private-pages/private-auth-tasksheet-page/page";
import PrivateAuthFeesPaymentPage from "../pages/private-pages/private-auth-feespayment-page/page";
import PrivateAuthOnlineExamPage from "../pages/private-pages/private-auth-onlineexam-page/page";
import PrivateAuthOnlineMeetPage from "../pages/private-pages/private-auth-vmeet-page/page";
import PrivateAuthTimeTablePage from "../pages/private-pages/private-auth-timetable-page/page";
import PrivateAuthResultPage from "../pages/private-pages/private-auth-result-page/page";
import PrivateAuthMessagePage from "../pages/private-pages/private-auth-message-page/page";
import PrivateAuthContactPage from "../pages/private-pages/private-auth-contact-page/page";
import PrivateAuthProfilePage from "../pages/private-pages/private-auth-profile-page/page";
import PrivateAuthSettingPage from "../pages/private-pages/private-auth-setting-page/page";
import PrivateAuthVNXTPage from "../pages/private-pages/private-auth-vnxt-page/page";
import PrivateAuthCoursePage from "../pages/private-pages/private-auth-course-page/page";
import PublicAuth2FAPage from "../pages/public-pages/public-auth-2FA-page/page";
import { customGetCookies } from "../utils/custom-cookies/custom-cookies.util";

const RouteIndex = () => {
  const { deviceToken } = customGetCookies("userAuthToken");
  return (
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<InnerContent />}>
          <Route
            path="/"
            element={
              <Navigate
                replace
                to={`/user/auth/dashboard?token=${deviceToken}`}
              />
            }
          />
          <Route
            path="/user/auth/dashboard"
            element={<PrivateAuthDashboardPage />}
          />
          <Route
            path="/user/auth/calender"
            element={<PrivateAuthCalenderPage />}
          />
          <Route
            path="/user/auth/attendance"
            element={<PrivateAuthAttendancePage />}
          />
          <Route path="/user/auth/users" element={<PrivateAuthUsersPage />} />
          <Route
            path="/user/auth/application"
            element={<PrivateAuthApplicationPage />}
          />
          <Route
            path="/user/auth/tasksheet"
            element={<PrivateAuthTasksheetPage />}
          />
          <Route
            path="/user/auth/courses"
            element={<PrivateAuthCoursePage />}
          />
          <Route
            path="/user/auth/fees-payment"
            element={<PrivateAuthFeesPaymentPage />}
          />
          <Route
            path="/user/auth/online-exam"
            element={<PrivateAuthOnlineExamPage />}
          />
          <Route
            path="/user/auth/v-meet"
            element={<PrivateAuthOnlineMeetPage />}
          />
          <Route
            path="/user/auth/time-table"
            element={<PrivateAuthTimeTablePage />}
          />
          <Route
            path="/user/auth/results"
            element={<PrivateAuthResultPage />}
          />
          <Route
            path="/user/auth/message"
            element={<PrivateAuthMessagePage />}
          />
          <Route
            path="/user/auth/contact-details"
            element={<PrivateAuthContactPage />}
          />
          <Route path="/user/auth/notepad" element={<PrivateAuthNotesPage />} />
          <Route path="/user/auth/v-nxt" element={<PrivateAuthVNXTPage />} />
          <Route
            path="/user/auth/settings"
            element={<PrivateAuthSettingPage />}
          />
          <Route
            path="/user/auth/profile"
            element={<PrivateAuthProfilePage />}
          />
        </Route>
      </Route>

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<PublicAuthSignInPage />} />
          <Route path="/user/auth/2FA" element={<PublicAuth2FAPage />} />
        </Route>
      </Route>

      {/** Permission denied route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteIndex;
