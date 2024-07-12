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

const PrivateApplicationTopMenuPageComponent = ({
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
    <div className="w-full md:hidden rounded-lg flex items-center justify-start gap-2 scroll-container">
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
      {loggedInUserRole?.toLocaleLowerCase() !== "student" && (
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
      )}
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

export default PrivateApplicationTopMenuPageComponent;
