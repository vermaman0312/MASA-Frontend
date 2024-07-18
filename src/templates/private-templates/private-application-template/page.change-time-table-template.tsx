import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import "../../../css/scroll-container.css";
import PrivateChangeTimeTableFormPageComponent from "./components/page.changetimetable-form.component";
import PrivateChangeTimeTableHeaderOptionPageComponent from "./components/page.changetimetable-headeroption.component";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";

const changeTimetableTypes = [
  "Change timetable for class",
  "Change timetable form work",
  "Change timetable for WFH",
  "Change timetable for exams",
];

type changeTimeTableType = {
  changeTimetableType: string;
  isChangeTimetableTypeError: boolean;
  requestedDateTime: Date;
  fromDate: Date | undefined;
  isFromDateError: boolean;
  toDate: Date | undefined;
  isToDateError: boolean;
  reason: string;
  isReasonError: boolean;
};

const PrivateApplicationChangeTimeTablePageTemplate = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNewRequest, setIsNewRequest] = useState<boolean>(true);
  const [formData, setFormData] = useState<changeTimeTableType>({
    changeTimetableType: "",
    isChangeTimetableTypeError: false,
    requestedDateTime: new Date(),
    fromDate: undefined,
    isFromDateError: false,
    toDate: undefined,
    isToDateError: false,
    reason: "",
    isReasonError: false,
  });

  const handleSelectTypeChangeTimeTable = useCallback(
    (value: string) => {
      setFormData((prevState) => ({
        ...prevState,
        changeTimetableType: value,
        isChangeTimetableTypeError: false,
      }));
    },
    [setFormData]
  );
  const handleChangeFromDate = useCallback(
    (date: Date) => {
      setFormData((prevState) => ({
        ...prevState,
        fromDate: date,
        isFromDateError: false,
      }));
    },
    [setFormData]
  );
  const handleChangeToDate = useCallback(
    (date: Date) => {
      setFormData((prevState) => ({
        ...prevState,
        toDate: date,
        isToDateError: false,
      }));
    },
    [setFormData]
  );
  const handleChangeReason = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prevState) => ({
        ...prevState,
        reason: event.target.value,
        isReasonError: false,
      }));
    },
    [setFormData]
  );
  const handleSubmit = useCallback(() => {
    setIsLoading(true);
    if (!formData.changeTimetableType) {
      setIsLoading(false);
      setFormData((prevState) => ({
        ...prevState,
        isChangeTimetableTypeError: true,
      }));
      return;
    }
    if (!formData.fromDate) {
      setIsLoading(false);
      setFormData((prevState) => ({
        ...prevState,
        isFromDateError: true,
      }));
      return;
    }
    if (!formData.toDate) {
      setIsLoading(false);
      setFormData((prevState) => ({
        ...prevState,
        isToDateError: true,
      }));
      return;
    }
    if (!formData.reason) {
      setIsLoading(false);
      setFormData((prevState) => ({
        ...prevState,
        isReasonError: true,
      }));
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      setFormData({
        changeTimetableType: "",
        isChangeTimetableTypeError: false,
        requestedDateTime: new Date(),
        fromDate: undefined,
        isFromDateError: false,
        toDate: undefined,
        isToDateError: false,
        reason: "",
        isReasonError: false,
      });
    }, 3000);
  }, [
    formData.changeTimetableType,
    formData.fromDate,
    formData.reason,
    formData.toDate,
  ]);

  return (
    <div className="w-full h-full">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Apply for change timetable
        </CustomLabel>
      </div>
      <div>
        <PrivateChangeTimeTableHeaderOptionPageComponent
          items={changeTimetableTypes}
          onChangeDropdown={(value) =>
            handleSelectTypeChangeTimeTable(value as string)
          }
          dropdownValue={formData.changeTimetableType}
          isDropdownError={formData.isChangeTimetableTypeError}
          onClickRequest={() => setIsNewRequest(false)}
          onClickNewRequest={() => setIsNewRequest(true)}
          isNewRequest={isNewRequest}
        />
      </div>
      <div>
        <PrivateChangeTimeTableFormPageComponent
          requestedDateTime={formData.requestedDateTime}
          onChangeFromDateTime={handleChangeFromDate}
          fromDateTimeValue={formData.fromDate}
          isFromDateTimeError={formData.isFromDateError}
          onChangeToDateTime={handleChangeToDate}
          toDateTimeValue={formData.toDate}
          isToDateTimeError={formData.isToDateError}
          onChangeReason={handleChangeReason}
          reasonValue={formData.reason || ""}
          isReasonError={formData.isReasonError}
          onClick={handleSubmit}
        />
      </div>

      {isLoading && <CustomLoader />}
    </div>
  );
};

export default PrivateApplicationChangeTimeTablePageTemplate;
