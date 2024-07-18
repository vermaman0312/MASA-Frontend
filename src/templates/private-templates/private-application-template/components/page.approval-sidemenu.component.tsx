import {
  CalendarSearch,
  ChevronRight,
  CircleFadingPlus,
  Dock,
  FileSignature,
  OctagonAlert,
  ReceiptText,
  School,
  SquareUser,
} from "lucide-react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

type props = {
  loggedInUserRole?: string;
  applicationMenu?: string;
  onClickMyApproval?: () => void;
  onClickWriteApplication?: () => void;
  onClickApplyLeave?: () => void;
  onClickForgotIdCard?: () => void;
  onClickWorkFromHome?: () => void;
  onClickChangeTimeTable?: () => void;
  onClickComplaint?: () => void;
  onClickRegisterQueries?: () => void;
};

const PrivateApprovalSideMenuPageComponent = ({
  loggedInUserRole,
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
      {loggedInUserRole?.toLocaleLowerCase() !== "student" && (
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

export default PrivateApprovalSideMenuPageComponent;
