import { useCallback, useState } from "react";
import "../../../css/scroll-container.css";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import CustomPagination from "../../../components/custom-pagination/custom-pagination.component";
import {
  PrivateApplicationSideMenuPageTemplate,
  PrivateApplicationTableContentPageTemplate,
  PrivateApplicationTableHeadingPageTemplate,
  PrivateApplicationTopMenuPageTemplate,
  PrivateApplicationUserDetailsPageTemplate,
} from "../../../templates/private-templates/private-application-template/page.common.template";
import { myLeaveWfhList } from "../../../mock/user-leave-wfh";

const tableHeadingList = [
  "S.N",
  "Date",
  "Type",
  "From",
  "To",
  "Number of days",
  "Approved by",
  "Status",
  "Reason",
  "More",
];

const PrivateApplicationPageLayout = () => {
  const [applicationMenu, setApplicationMenu] = useState<string>("myApproval");
  const handleSelectApplicationMenu = useCallback(
    (value: string) => {
      setApplicationMenu(value);
    },
    [setApplicationMenu]
  );
  return (
    <div className="w-full h-full flex items-start justify-between gap-1 scroll-container">
      <div>
        <PrivateApplicationSideMenuPageTemplate
          applicationMenu={applicationMenu}
          onClickMyApproval={() => handleSelectApplicationMenu("myApproval")}
          onClickWriteApplication={() =>
            handleSelectApplicationMenu("writeApplication")
          }
          onClickApplyLeave={() => handleSelectApplicationMenu("applyLeave")}
          onClickForgotIdCard={() =>
            handleSelectApplicationMenu("forgotIdCard")
          }
          onClickWorkFromHome={() =>
            handleSelectApplicationMenu("workFromHome")
          }
          onClickChangeTimeTable={() =>
            handleSelectApplicationMenu("changeTimeTable")
          }
          onClickComplaint={() => handleSelectApplicationMenu("complaint")}
          onClickRegisterQueries={() =>
            handleSelectApplicationMenu("registerQueries")
          }
        />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start gap-2 md:border-l">
        <PrivateApplicationTopMenuPageTemplate
          applicationMenu={applicationMenu}
          onClickMyApproval={() => handleSelectApplicationMenu("myApproval")}
          onClickWriteApplication={() =>
            handleSelectApplicationMenu("writeApplication")
          }
          onClickApplyLeave={() => handleSelectApplicationMenu("applyLeave")}
          onClickForgotIdCard={() =>
            handleSelectApplicationMenu("forgotIdCard")
          }
          onClickWorkFromHome={() =>
            handleSelectApplicationMenu("workFromHome")
          }
          onClickChangeTimeTable={() =>
            handleSelectApplicationMenu("changeTimeTable")
          }
          onClickComplaint={() => handleSelectApplicationMenu("complaint")}
          onClickRegisterQueries={() =>
            handleSelectApplicationMenu("registerQueries")
          }
        />

        <div className="w-full h-full flex flex-col items-center justify-start scroll-container">
          <PrivateApplicationUserDetailsPageTemplate
            userName="Aman Verma"
            userUniqueId="20SOECE11091"
          />

          <div className="w-full h-full mt-5">
            <div className="flex items-center justify-end">
              <div>
                <CustomSearchBox />
              </div>
            </div>

            <div className="mt-5">
              <table className="w-full leading-normal">
                <thead>
                  <PrivateApplicationTableHeadingPageTemplate
                    tableHeading={tableHeadingList}
                  />
                </thead>
                <tbody>
                  <PrivateApplicationTableContentPageTemplate
                    tableData={myLeaveWfhList}
                  />
                </tbody>
              </table>
            </div>
            <div>
              <CustomPagination
                totalLength={100}
                minimumLength={1}
                maximumLength={10}
                onClickPrev={() => alert("prev")}
                onClickNext={() => alert("Next")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateApplicationPageLayout;
