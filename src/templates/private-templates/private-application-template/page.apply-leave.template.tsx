import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PrivateApplicationApplyFormPageComponent from "./components/page.approval-appyleave-form.component";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";
import { useDispatch, useSelector } from "react-redux";
import {
  fromDate,
  isFromDateError,
  isLeaveReasonError,
  isLeaveTypeError,
  isToDateError,
  leaveReason,
  leaveType,
  numberOfDays,
  requestedDate,
  toDate,
} from "../../../redux/actions/private-actions/private.application.action";
import { RootState } from "../../../redux/redux-index";

const leaveTypeList = ["Full leave", "Half leave", "Quarter leave"];

const PrivateApplicationApplyLeavePageTemplate = () => {
  const dispatch = useDispatch();
  const applyFormData = useSelector(
    (state: RootState) =>
      state.applicationMenu.applicationData.myApproval.applyLeave.formData
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onChangeLeaveType = useCallback(
    (value: string) => {
      dispatch(leaveType(value));
      dispatch(isLeaveTypeError(false));
      dispatch(requestedDate(new Date()));
    },
    [dispatch]
  );
  const onChangeFromDate = useCallback(
    (date: Date) => {
      dispatch(fromDate(date));
      dispatch(isFromDateError(false));
    },
    [dispatch]
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
      dispatch(toDate(date));
      dispatch(isToDateError(false));
      dispatch(
        numberOfDays(
          calculateNumberOfDays(applyFormData.fromDate as Date, date)
        )
      );
    },
    [applyFormData.fromDate, dispatch]
  );
  const onChangeReason = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(leaveReason(event.target.value));
      dispatch(isLeaveReasonError(false));
    },
    [dispatch]
  );
  const handleSubmit = useCallback(() => {
    setIsLoading(true);
    if (!applyFormData.leaveType) {
      setIsLoading(false);
      dispatch(isLeaveTypeError(true));
      return;
    }
    if (!applyFormData.fromDate) {
      setIsLoading(false);
      dispatch(isFromDateError(true));
      return;
    }
    if (!applyFormData.toDate) {
      setIsLoading(false);
      dispatch(isToDateError(true));
      return;
    }
    if (!applyFormData.leaveReason) {
      setIsLoading(false);
      dispatch(isLeaveReasonError(true));
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      dispatch(leaveType(null));
      dispatch(requestedDate(null));
      dispatch(fromDate(null));
      dispatch(toDate(null));
      dispatch(numberOfDays(null));
      dispatch(leaveReason(null));
    }, 3000);
  }, [
    applyFormData.fromDate,
    applyFormData.leaveReason,
    applyFormData.leaveType,
    applyFormData.toDate,
    dispatch,
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
          leaveTypeList={leaveTypeList}
          isDropdownError={applyFormData.isLeaveTypeError as boolean}
          onChangeDropdown={(value) => onChangeLeaveType(value as string)}
          dropdownValue={(applyFormData.leaveType as string) ?? ""}
          requestedDate={applyFormData.requestedDate as Date}
          userUniqueId={"20SEOCE11091"}
          onChangeFromDate={onChangeFromDate}
          fromDateValue={applyFormData.fromDate as Date}
          isFromDateError={applyFormData.isFromDateError as boolean}
          onChangeToDate={onChangeToDate}
          toDateValue={applyFormData.toDate as Date}
          isToDateError={applyFormData.isToDateError as boolean}
          numberOfDays={applyFormData.numberOfDays as number}
          onChangeReason={onChangeReason}
          isReasonError={applyFormData.isLeaveReasonError as boolean}
          reasonValue={(applyFormData.leaveReason as string) ?? ""}
          onClick={handleSubmit}
        />
      </div>
      <div>{isLoading && <CustomLoader />}</div>
    </div>
  );
};

export default PrivateApplicationApplyLeavePageTemplate;
