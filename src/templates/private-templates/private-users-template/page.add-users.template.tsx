import React, { useState } from "react";
import PrivateUserAddFormHeaderPageComponent from "./components/page.useraddformbuttonoption.component";
import PrivateUserAddFormExcelPageComponent from "./components/page.adduserexcelform.component";
import PrivateUserAddFormPageComponent from "./components/page.adduserform.component";
import { roleList } from "../../../mock/user-role";
import { departmentList } from "../../../mock/user-department";
import { designationList } from "../../../mock/user-designation";

type props = {
  onClickBack?: () => void;
};

const PrivateUserAddFormPageTemplate = ({ onClickBack }: props) => {
  const [isFillForm, setIsFillForm] = useState<boolean>(true);
  return (
    <div className="w-full h-full">
      <div>
        <PrivateUserAddFormHeaderPageComponent
          onClickBack={onClickBack}
          onClickForm={() => setIsFillForm(true)}
          onClickExcel={() => setIsFillForm(false)}
          isFillForm={isFillForm}
        />
      </div>
      <div>
        {isFillForm ? (
          <PrivateUserAddFormPageComponent
            roleList={roleList}
            departmentList={departmentList}
            designationList={designationList}
          />
        ) : (
          <PrivateUserAddFormExcelPageComponent />
        )}
      </div>
    </div>
  );
};

export default PrivateUserAddFormPageTemplate;
