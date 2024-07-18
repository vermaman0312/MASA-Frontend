import React, { useCallback, useEffect } from "react";
import PrivateApplicationHeadingOptionPageComponent from "./components/page.approval-headingoption.component";
import { authenticatedUserRole } from "../../../utils/token/token";
import { myApprovalType, myLeaveWfhList } from "../../../mock/user-leave-wfh";
import PrivateApplicationApprovalTablePageComponent from "./components/page.approval-table.component";
import "../../../css/scroll-container.css";
import { useDispatch, useSelector } from "react-redux";
import {
  approvalSearchInput,
  myApprovalOption,
  myApprovalSuccess,
} from "../../../redux/actions/private-actions/private.application.action";
import { RootState } from "../../../redux/redux-index";

const PrivateApplicationMyApprovalPageTemplate = () => {
  const dispatch = useDispatch();
  const role = authenticatedUserRole();
  const approval = useSelector(
    (state: RootState) => state?.applicationMenu?.applicationData?.myApproval
  );
  const handleSelectApproval = useCallback(
    (value: boolean) => {
      dispatch(myApprovalOption(value));
    },
    [dispatch]
  );
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(approvalSearchInput(event.target.value));
    },
    [dispatch]
  );
  useEffect(() => {
    const myApprovalFilteredList = myLeaveWfhList.filter((contact) =>
      Object.values(contact).some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(
            ((approval.approvalSearchInput as string) || "").toLowerCase()
          )
      )
    );
    dispatch(myApprovalSuccess(myApprovalFilteredList));
  }, [dispatch, approval.approvalSearchInput]);

  return (
    <div className="w-full h-full">
      <div>
        <PrivateApplicationHeadingOptionPageComponent
          loggedInUserRole={role}
          userName={`Aman Verma`}
          userUniqueId={`20SOECE11091`}
          onClickMyApproval={() => handleSelectApproval(true)}
          onClickApproval={() => handleSelectApproval(false)}
          optionValue={approval.myApprovalOption as boolean}
          onChange={handleInputChange}
          inputValue={(approval.approvalSearchInput as string) || ""}
          onCancel={() => dispatch(approvalSearchInput(null))}
        />
      </div>
      <div className="mt-5 w-full overflow-x-auto scroll-container">
        <PrivateApplicationApprovalTablePageComponent
          optionValue={approval.myApprovalOption as boolean}
          items={approval.approvalList.data as Array<myApprovalType>}
          tablePagination={true}
          row={(approval.approvalList.data as Array<myApprovalType>)?.length}
        />
      </div>
    </div>
  );
};

export default PrivateApplicationMyApprovalPageTemplate;
