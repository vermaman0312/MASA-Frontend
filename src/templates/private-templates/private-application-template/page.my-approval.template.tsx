import React, { useEffect, useState } from "react";
import PrivateApplicationHeadingOptionPageComponent from "./components/page.application-headingoption.component";
import { authenticatedUserRole } from "../../../utils/token/token";
import { myApprovalType, myLeaveWfhList } from "../../../mock/user-leave-wfh";
import PrivateApplicationApprovalTablePageComponent from "./components/page.applicationtable.component";

const PrivateApplicationMyApprovalPageTemplate = () => {
  const role = authenticatedUserRole();
  const [myApproval, setMyApproval] = useState<boolean>(true);
  const [approvalList, setApprovalList] = useState<Array<myApprovalType>>();
  const [inputValue, setInputValue] = useState("");
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
    setApprovalList(myApprovalFilteredList);
  }, [inputValue]);

  return (
    <div className="w-full h-full">
      <div>
        <PrivateApplicationHeadingOptionPageComponent
          loggedInUserRole={role}
          userName={`Aman Verma`}
          userUniqueId={`20SOECE11091`}
          onClickMyApproval={() => setMyApproval(true)}
          onClickApproval={() => setMyApproval(false)}
          optionValue={myApproval}
          onChange={handleInputChange}
          inputValue={inputValue}
          onCancel={() => setInputValue("")}
        />
      </div>
      <div className="mt-5">
        <PrivateApplicationApprovalTablePageComponent
          optionValue={myApproval}
          items={approvalList}
          tablePagination={true}
          row={approvalList?.length}
        />
      </div>
    </div>
  );
};

export default PrivateApplicationMyApprovalPageTemplate;
