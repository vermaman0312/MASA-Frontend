import PrivateApplicationApplyLeavePageTemplate from "./page.apply-leave.template";
import PrivateApplicationChangeTimeTablePageTemplate from "./page.change-time-table-template";
import PrivateApplicationComplaintPageTemplate from "./page.complaint.template";
import PrivateApplicationForgotIdCardPageTemplate from "./page.forgot-id-card.template";
import PrivateApplicationMyApprovalPageTemplate from "./page.my-approval.template";
import PrivateApplicationQueriesPageTemplate from "./page.queries.template";
import PrivateApplicationWorkFromHomePageTemplate from "./page.work-from-home.template";
import PrivateApplicationWriteApplicationPageTemplate from "./page.write-application.template";

type props = {
  applicationMenu?: string;
};

const PrivateApplicationPageTemplate = ({ applicationMenu }: props) => {
  return (
    <div className="w-full h-full">
      {applicationMenu === "registerQueries" ? (
        <PrivateApplicationQueriesPageTemplate />
      ) : applicationMenu === "writeApplication" ? (
        <PrivateApplicationWriteApplicationPageTemplate />
      ) : applicationMenu === "applyLeave" ? (
        <PrivateApplicationApplyLeavePageTemplate />
      ) : applicationMenu === "forgotIdCard" ? (
        <PrivateApplicationForgotIdCardPageTemplate />
      ) : applicationMenu === "workFromHome" ? (
        <PrivateApplicationWorkFromHomePageTemplate />
      ) : applicationMenu === "changeTimeTable" ? (
        <PrivateApplicationChangeTimeTablePageTemplate />
      ) : applicationMenu === "complaint" ? (
        <PrivateApplicationComplaintPageTemplate />
      ) : (
        <PrivateApplicationMyApprovalPageTemplate />
      )}
    </div>
  );
};

export default PrivateApplicationPageTemplate;
