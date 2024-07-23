import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PrivateApplicationNewApplicationFormPageComponent from "./components/application-component/page.application-new-application-form.component";
import { authenticatedUserRole } from "../../../utils/token/token";
import PrivateApplicationHeaderOptionPageTemplate from "./components/application-component/page.application-headeroption.component";
import PrivateApplicationTablePageComponent from "./components/application-component/page.application-table.component";
import { useDispatch, useSelector } from "react-redux";
import {
  applicationBody,
  applicationSubject,
  applicationSubmittedTo,
  isApplicationSubjectError,
  isApplicationSubmittedToError,
} from "../../../redux/actions/private-actions/private.application.action";
import { RootState } from "../../../redux/redux-index";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";
import {
  applicationList,
  applicationType,
} from "../../../mock/application-data";
import "../../../css/scroll-container.css";

const PrivateApplicationWriteApplicationPageTemplate = () => {
  const dispatch = useDispatch();
  const role = authenticatedUserRole();
  const newApplicationFormData = useSelector(
    (state: RootState) =>
      state.applicationMenu.applicationData.application.writeApplication
        .formData
  );
  const [applicationOption, setApplicationOption] =
    useState<string>("myApplication");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeApplicationSubject = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(applicationSubject(event.target.value));
      dispatch(isApplicationSubjectError(false));
    },
    [dispatch]
  );
  const onApplicationSubmitedTo = useCallback(
    (value: string) => {
      dispatch(applicationSubmittedTo(value));
      dispatch(isApplicationSubmittedToError(false));
    },
    [dispatch]
  );
  const onChangeApplicationBody = useCallback(
    (value: string) => {
      dispatch(applicationBody(value));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(() => {
    setIsLoading(true);
    if (!newApplicationFormData.applicationSubject) {
      dispatch(isApplicationSubjectError(true));
      setIsLoading(false);
      return;
    }
    if (!newApplicationFormData.applicationSubmittedTo) {
      dispatch(isApplicationSubmittedToError(true));
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      dispatch(applicationSubject(null));
      dispatch(applicationSubmittedTo(null));
      dispatch(applicationBody(null));
      setIsLoading(false);
    }, 3000);
  }, [
    dispatch,
    newApplicationFormData.applicationSubject,
    newApplicationFormData.applicationSubmittedTo,
  ]);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Application
        </CustomLabel>
      </div>
      <div className="w-full mt-5">
        <PrivateApplicationHeaderOptionPageTemplate
          authRole={role}
          applicationMenuOption={applicationOption}
          onClickApproval={() => setApplicationOption("approval")}
          onClickMyApplication={() => setApplicationOption("myApplication")}
          onClickNewApplication={() => setApplicationOption("newApplication")}
        />
      </div>
      <div className="w-full h-full mt-5">
        {applicationOption === "newApplication" ? (
          <div className="w-full h-full">
            <PrivateApplicationNewApplicationFormPageComponent
              onChangeSubject={onChangeApplicationSubject}
              subjectValue={
                (newApplicationFormData.applicationSubject as string) || ""
              }
              isSubjectError={
                newApplicationFormData.isApplicationSubjectError as boolean
              }
              onChangeDropdown={(value) =>
                onApplicationSubmitedTo(value as string)
              }
              dropdownValue={
                (newApplicationFormData.applicationSubmittedTo as string) || ""
              }
              isDropdownError={
                newApplicationFormData.isApplicationSubmittedToError as boolean
              }
              setValue={(value) => onChangeApplicationBody(value as string)}
              value={newApplicationFormData.applicationBody as string}
              onClick={handleSubmit}
            />
          </div>
        ) : (
          <div className="w-full h-full overflow-x-auto scroll-container">
            <PrivateApplicationTablePageComponent
              applicationMenuOption={applicationOption}
              items={applicationList as Array<applicationType>}
            />
          </div>
        )}
      </div>
      {isLoading && <CustomLoader />}
    </div>
  );
};

export default PrivateApplicationWriteApplicationPageTemplate;
