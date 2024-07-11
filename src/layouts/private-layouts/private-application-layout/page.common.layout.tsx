import { useCallback, useEffect, useState } from "react";
import "../../../css/scroll-container.css";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import CustomPagination from "../../../components/custom-pagination/custom-pagination.component";
import {
  PrivateApplicationApprovalTableContentPageTemplate,
  PrivateApplicationSideMenuPageTemplate,
  PrivateApplicationTableContentPageTemplate,
  PrivateApplicationTableHeadingPageTemplate,
  PrivateApplicationTopMenuPageTemplate,
  PrivateApplicationUserDetailsPageTemplate,
} from "../../../templates/private-templates/private-application-template/page.common.template";
import { myLeaveWfhList } from "../../../mock/user-leave-wfh";
import { authenticatedUserRole } from "../../../utils/token/token";

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

const myTableHeadingList = [
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

const approvalTableHeadingList = [
  "S.N",
  "Unique ID",
  "Name",
  "Date",
  "Type",
  "From",
  "To",
  "Number of days",
  "Status",
  "Reason",
  "View",
  "Action",
];

const PrivateApplicationPageLayout = () => {
  const role = authenticatedUserRole();
  const [applicationMenu, setApplicationMenu] = useState<string>("myApproval");
  const [myApproval, setMyApproval] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState("");
  const [approvalList, setApprovalList] =
    useState<Array<myApprovalType>>(myLeaveWfhList);
  const [myApprovalList, setMyApprovalList] = useState<Array<myApprovalType>>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  useEffect(() => {
    const myApprovalFilteredList = myLeaveWfhList.filter((contact) =>
      Object.values(contact).some((value) =>
        value.toString().toLowerCase().includes(inputValue.toLowerCase())
      )
    );
    setMyApprovalList(myApprovalFilteredList);
  }, [inputValue]);

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

          <div className="w-full h-[20px] mt-5">
            <div className="flex flex-col md:flex-row items-end justify-end gap-5">
              {role.toLowerCase() !== "student" && (
                <div>
                  <div className="bg-gray-200 p-1 flex items-center justify-between w-64 rounded-lg">
                    <button
                      onClick={() => setMyApproval(true)}
                      className={`w-full ${
                        myApproval ? "bg-white" : "bg-transparent"
                      } p-1 text-xs font-display font-medium text-gray-900 rounded-lg transition-all`}
                    >
                      My Approval
                    </button>
                    <button
                      onClick={() => setMyApproval(false)}
                      className={`w-full ${
                        !myApproval ? "bg-white" : "bg-transparent"
                      } p-1 text-xs font-display font-medium text-gray-900 rounded-lg transition-all`}
                    >
                      Approval
                    </button>
                  </div>
                </div>
              )}
              <div>
                <CustomSearchBox
                  placeholder="Search..."
                  onChange={handleInputChange}
                  value={inputValue}
                  onCancel={() => setInputValue("")}
                />
              </div>
            </div>

            <div>
              {myApproval ? (
                <div className="mt-5 overflow-x-auto scroll-container">
                  <table className="w-full leading-normal">
                    <thead>
                      <PrivateApplicationTableHeadingPageTemplate
                        tableHeading={myTableHeadingList}
                      />
                    </thead>
                    <tbody>
                      <PrivateApplicationTableContentPageTemplate
                        tableData={myApprovalList}
                      />
                    </tbody>
                  </table>
                  <CustomPagination
                    totalLength={100}
                    minimumLength={1}
                    maximumLength={10}
                    onClickPrev={() => alert("prev")}
                    onClickNext={() => alert("Next")}
                  />
                </div>
              ) : (
                <div className="mt-5 overflow-x-auto scroll-container">
                  <table className="w-full leading-normal">
                    <thead>
                      <PrivateApplicationTableHeadingPageTemplate
                        tableHeading={approvalTableHeadingList}
                      />
                    </thead>
                    <tbody>
                      <PrivateApplicationApprovalTableContentPageTemplate
                        tableData={approvalList}
                      />
                    </tbody>
                  </table>
                  <CustomPagination
                    totalLength={100}
                    minimumLength={1}
                    maximumLength={10}
                    onClickPrev={() => alert("prev")}
                    onClickNext={() => alert("Next")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateApplicationPageLayout;
