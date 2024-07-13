import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PrivateApplicationApplyFormPageComponent from "./components/page.application-appyleave-form.component";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";

const leaveType = ["Full leave", "Half leave", "Quarter leave"];

interface formType {
  leaveType: string | undefined;
  isLeaveTypeError: boolean;
  requestedDate: Date | undefined;
  userUniqueId: string | undefined;
  fromDate: Date | undefined;
  isFromDateError: boolean;
  toDate: Date | undefined;
  isToDateError: boolean;
  numberOfDays: number | undefined;
  reason: string | undefined;
  isReasonError: boolean;
}

const PrivateApplicationApplyLeavePageTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formDetails, setFormDetails] = useState<formType>({
    leaveType: "",
    isLeaveTypeError: false,
    requestedDate: undefined,
    userUniqueId: "",
    fromDate: undefined,
    isFromDateError: false,
    toDate: undefined,
    isToDateError: false,
    numberOfDays: undefined,
    reason: "",
    isReasonError: false,
  });
  const onChangeLeaveType = useCallback(
    (value: string) => {
      setFormDetails((prevState) => ({
        ...prevState,
        leaveType: value,
        isLeaveTypeError: false,
        requestedDate: new Date(),
        userUniqueId: "20SOECE11091",
      }));
    },
    [setFormDetails]
  );
  const onChangeFromDate = useCallback(
    (date: Date) => {
      setFormDetails((prevState) => ({
        ...prevState,
        fromDate: date,
        isFromDateError: false,
      }));
    },
    [setFormDetails]
  );
  const calculateNumberOfDays = (fromDate: Date, toDate: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(
      Math.abs((toDate.getTime() - fromDate.getTime()) / oneDay)
    );
    return diffDays + 1;
  };
  const onChangeToDate = useCallback(
    (date: Date) => {
      setFormDetails((prevState) => ({
        ...prevState,
        toDate: date,
        isToDateError: false,
        numberOfDays:
          formDetails?.fromDate &&
          calculateNumberOfDays(formDetails?.fromDate, date),
      }));
    },
    [formDetails?.fromDate]
  );
  const onChangeReason = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormDetails((prevState) => ({
        ...prevState,
        reason: event.target.value,
        isReasonError: false,
      }));
    },
    [setFormDetails]
  );
  const handleSubmit = useCallback(() => {
    setIsLoading(true);
    if (!formDetails.leaveType) {
      setIsLoading(false);
      setFormDetails((prevState) => ({
        ...prevState,
        isLeaveTypeError: true,
      }));
      return;
    }
    if (!formDetails.fromDate) {
      setIsLoading(false);
      setFormDetails((prevState) => ({
        ...prevState,
        isFromDateError: true,
      }));
      return;
    }
    if (!formDetails.toDate) {
      setIsLoading(false);
      setFormDetails((prevState) => ({
        ...prevState,
        isToDateError: true,
      }));
      return;
    }
    if (!formDetails.reason) {
      setIsLoading(false);
      setFormDetails((prevState) => ({
        ...prevState,
        isReasonError: true,
      }));
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      setFormDetails({
        leaveType: "",
        isLeaveTypeError: false,
        requestedDate: undefined,
        userUniqueId: "",
        fromDate: undefined,
        isFromDateError: false,
        toDate: undefined,
        isToDateError: false,
        numberOfDays: undefined,
        reason: "",
        isReasonError: false,
      });
    }, 3000);
  }, [
    formDetails.fromDate,
    formDetails.leaveType,
    formDetails.reason,
    formDetails.toDate,
  ]);

  return (
    <div className="w-full h-full">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Apply new leave
        </CustomLabel>
      </div>
      <div className="mt-5 w-full">
        <PrivateApplicationApplyFormPageComponent
          leaveTypeList={leaveType}
          isDropdownError={formDetails.isLeaveTypeError}
          onChangeDropdown={(value) => onChangeLeaveType(value as string)}
          dropdownValue={formDetails.leaveType}
          requestedDate={formDetails.requestedDate}
          userUniqueId={formDetails.userUniqueId}
          onChangeFromDate={onChangeFromDate}
          fromDateValue={formDetails.fromDate}
          isFromDateError={formDetails.isFromDateError}
          onChangeToDate={onChangeToDate}
          toDateValue={formDetails.toDate}
          isToDateError={formDetails.isToDateError}
          numberOfDays={formDetails.numberOfDays}
          onChangeReason={onChangeReason}
          isReasonError={formDetails.isReasonError}
          reasonValue={formDetails.reason}
          onClick={handleSubmit}
        />
      </div>
      <div>{isLoading && <CustomLoader />}</div>
    </div>
  );
};

export default PrivateApplicationApplyLeavePageTemplate;
