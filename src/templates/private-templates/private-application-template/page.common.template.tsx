import {
  CalendarSearch,
  Check,
  ChevronRight,
  CircleFadingPlus,
  Dock,
  EllipsisVertical,
  FilePenLine,
  FileSignature,
  OctagonAlert,
  ReceiptText,
  School,
  SquareUser,
  SquareX,
  Trash2,
  View,
  X,
} from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { authenticatedUserRole } from "../../../utils/token/token";
import CustomToolTip from "../../../components/custom-tooltip/custom-tooltip.component";
import CustomMenuDropdown from "../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";

type myApprovalType = {
  userUniqueId: string;
  userName: string;
  requestedDate: string;
  type: string;
  FromDate: string;
  ToDate: string;
  numberOfDays: string;
  approvedBy: string;
  Status: string;
  reason: string;
};

type props = {
  applicationMenu?: string;
  onClickMyApproval?: () => void;
  onClickWriteApplication?: () => void;
  onClickApplyLeave?: () => void;
  onClickForgotIdCard?: () => void;
  onClickWorkFromHome?: () => void;
  onClickChangeTimeTable?: () => void;
  onClickComplaint?: () => void;
  onClickRegisterQueries?: () => void;
  userName?: string;
  userUniqueId?: string;
  tableHeading?: Array<string>;
  tableData?: Array<myApprovalType>;
};

export const PrivateApplicationSideMenuPageTemplate = ({
  applicationMenu,
  onClickMyApproval,
  onClickWriteApplication,
  onClickApplyLeave,
  onClickForgotIdCard,
  onClickWorkFromHome,
  onClickChangeTimeTable,
  onClickComplaint,
  onClickRegisterQueries,
}: props) => {
  const role = authenticatedUserRole();
  return (
    <div className="w-[20rem] h-[20px] hidden md:flex flex-col items-start justify-start gap-1 p-6">
      <div
        onClick={onClickMyApproval}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <FileSignature className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            My approval
          </CustomLabel>
        </div>
        {applicationMenu === "myApproval" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
      <div
        onClick={onClickWriteApplication}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <Dock className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            Write application
          </CustomLabel>
        </div>
        {applicationMenu === "writeApplication" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
      <div
        onClick={onClickApplyLeave}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <ReceiptText className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            Apply leave
          </CustomLabel>
        </div>
        {applicationMenu === "applyLeave" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
      <div
        onClick={onClickForgotIdCard}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <SquareUser className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            Forgot ID card
          </CustomLabel>
        </div>
        {applicationMenu === "forgotIdCard" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
      {role !== "Student" && (
        <div
          onClick={onClickWorkFromHome}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Work from home
            </CustomLabel>
          </div>
          {applicationMenu === "workFromHome" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
      )}
      <div
        onClick={onClickChangeTimeTable}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <CalendarSearch className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            Change time table
          </CustomLabel>
        </div>
        {applicationMenu === "changeTimeTable" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
      <div
        onClick={onClickComplaint}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <OctagonAlert className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            Complaint
          </CustomLabel>
        </div>
        {applicationMenu === "complaint" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
      <div
        onClick={onClickRegisterQueries}
        className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
      >
        <div className="flex items-center gap-2">
          <CircleFadingPlus className="w-5 h-5 text-gray-900" />
          <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
            Register queries
          </CustomLabel>
        </div>
        {applicationMenu === "registerQueries" && (
          <ChevronRight className="w-5 h-5 text-gray-900" />
        )}
      </div>
    </div>
  );
};

export const PrivateApplicationTopMenuPageTemplate = ({
  applicationMenu,
  onClickMyApproval,
  onClickWriteApplication,
  onClickApplyLeave,
  onClickForgotIdCard,
  onClickWorkFromHome,
  onClickChangeTimeTable,
  onClickComplaint,
  onClickRegisterQueries,
}: props) => {
  return (
    <div className="border w-full md:hidden p-2 rounded-lg flex items-center justify-start gap-2 scroll-container">
      <CustomLabel
        onClick={onClickMyApproval}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "myApproval"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        My approval
      </CustomLabel>
      <CustomLabel
        onClick={onClickWriteApplication}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "writeApplication"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Write application
      </CustomLabel>
      <CustomLabel
        onClick={onClickApplyLeave}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "applyLeave"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Apply leave
      </CustomLabel>
      <CustomLabel
        onClick={onClickForgotIdCard}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "forgotIdCard"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Forgot ID card
      </CustomLabel>
      <CustomLabel
        onClick={onClickWorkFromHome}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "workFromHome"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Work from home
      </CustomLabel>
      <CustomLabel
        onClick={onClickChangeTimeTable}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "changeTimeTable"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Change time table
      </CustomLabel>
      <CustomLabel
        onClick={onClickComplaint}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "complaint"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Complaint
      </CustomLabel>
      <CustomLabel
        onClick={onClickRegisterQueries}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "registerQueries"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Register queries
      </CustomLabel>
    </div>
  );
};

export const PrivateApplicationUserDetailsPageTemplate = ({
  userName,
  userUniqueId,
}: props) => {
  return (
    <div className="w-full flex flex-col items-end justify-end">
      <CustomLabel className="font-display text-lg font-medium text-gray-900">
        {userName}
      </CustomLabel>
      <CustomLabel className="font-display text-sm font-medium text-gray-900">
        {userUniqueId}
      </CustomLabel>
    </div>
  );
};

export const PrivateApplicationTableHeadingPageTemplate = ({
  tableHeading,
}: props) => {
  return (
    <tr>
      {tableHeading?.map((heading, index) => {
        return (
          <th
            key={index}
            className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
          >
            {heading}
          </th>
        );
      })}
    </tr>
  );
};

export const PrivateApplicationTableContentPageTemplate = ({
  tableData,
}: props) => {
  return (
    <>
      {tableData?.map((data, index) => {
        return (
          <tr>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                {index + 1}
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                {data.requestedDate}
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                <span className="relative">{data.type}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                <span className="relative">{data.FromDate}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                <span className="relative">{data.ToDate}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                <span className="relative">{data.numberOfDays}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                <span className="relative">{data.approvedBy}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span
                className={`relative inline-block font-semibold ${
                  data.Status === "Cancelled"
                    ? "text-red-500"
                    : data.Status === "Pending"
                    ? "text-yellow-600"
                    : "text-blue-600"
                } leading-tight`}
              >
                <span className="relative">{data.Status}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative word-break">{data.reason}</span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <CustomMenuDropdown
                buttonComponent={
                  <EllipsisVertical className="w-4 h-4 cursor-pointer" />
                }
                marginRight="mr-6"
              >
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                  <View className="w-4 h-4" />
                  <span className="font-display text-xs">View Request</span>
                </DropdownMenuItem>
                {data.Status === "Pending" && (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2">
                    <FilePenLine className="w-4 h-4" />
                    <span className="font-display text-xs">Edit Request</span>
                  </DropdownMenuItem>
                )}
                {data.Status !== "Cancelled" && (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2 text-yellow-500">
                    <SquareX className="w-4 h-4" />
                    <span className="font-display text-xs">Cancel Request</span>
                  </DropdownMenuItem>
                )}
                {data.Status === "Pending" && (
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer gap-2 text-red-500">
                    <Trash2 className="w-4 h-4" />
                    <span className="font-display text-xs">Delete Request</span>
                  </DropdownMenuItem>
                )}
              </CustomMenuDropdown>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export const PrivateApplicationApprovalTableContentPageTemplate = ({
  tableData,
}: props) => {
  return (
    <>
      {tableData?.map((data, index) => {
        return (
          <tr>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                {index + 1}
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                {data.userUniqueId}
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                {data.userName}
              </span>
            </td>

            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                <span className="relative">{data.requestedDate}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                <span className="relative">{data.type}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                <span className="relative">{data.FromDate}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block text-green-900 leading-tight">
                <span className="relative">{data.ToDate}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                <span className="relative">{data.numberOfDays}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span
                className={`relative inline-block font-semibold ${
                  data.Status === "Cancelled"
                    ? "text-red-500"
                    : data.Status === "Pending"
                    ? "text-yellow-600"
                    : "text-blue-600"
                } leading-tight`}
              >
                <span className="relative">{data.Status}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
              <span className="w-32 relative inline-block text-green-900 leading-tight">
                <span className="relative word-break">{data.reason}</span>
              </span>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display">
              <div className="w-full h-full flex items-center gap-2">
                <p className="w-6 h-6 bg-blue-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                  <View className="w-4 h-4" />
                </p>
              </div>
            </td>
            <td className="border-b border-gray-200 bg-white text-xs font-display">
              <div className="w-full h-full flex items-center gap-2">
                <p className="w-6 h-6 bg-green-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                  <Check className="w-4 h-4" />
                </p>
                <p className="w-6 h-6 bg-red-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                  <X className="w-4 h-4" />
                </p>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};
