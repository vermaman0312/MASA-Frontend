import { useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { authenticatedUserRole } from "../../../utils/token/token";
import "../../../css/scroll-container.css";
import PrivateForgotIdCardHeaderOptionPageComponent from "./components/page.forgotIdCard-headeroption.component";
import PrivateForgotIdCardNewRequestFormPageComponent from "./components/page.forgotidcard-newrequest-form.component";
import PrivateForgotIdCardRequestTablePageComponent from "./components/page-forgotidcard-request-table.component";
import {
  forgotIdCardRequestList,
  forgotIdCardRequestType,
} from "../../../mock/forgotidcard-requests";

const PrivateApplicationForgotIdCardPageTemplate = () => {
  const role = authenticatedUserRole();
  const [isNewRequest, setIsNewRequest] = useState<boolean>(true);
  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Forgot ID Card
        </CustomLabel>
      </div>
      <div className="w-full mt-5">
        <PrivateForgotIdCardHeaderOptionPageComponent
          role={role}
          option={isNewRequest}
          onClickRequest={() => setIsNewRequest(false)}
          onClickNewRequest={() => setIsNewRequest(true)}
        />
      </div>
      <div className="w-full h-full mt-5">
        {isNewRequest ? (
          <PrivateForgotIdCardNewRequestFormPageComponent />
        ) : (
          <PrivateForgotIdCardRequestTablePageComponent
            items={forgotIdCardRequestList as Array<forgotIdCardRequestType>}
          />
        )}
      </div>
    </div>
  );
};

export default PrivateApplicationForgotIdCardPageTemplate;
