import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PrivateWorkFromHomeFormPageComponent from "./components/page.workfromhome-newform.component";

const workFromHomeList = ["Full WFH", "Half WFH", "Quarter WFH"];

const PrivateApplicationWorkFromHomePageTemplate = () => {
  const [workFromHomeData, setWorkFromHomeData] = useState({
    WFHType: "",
    requestedDateTime: "",
    requestedBy: {
      uniqueId: "",
      userFirstName: "",
      userLastName: "",
      userProfileImage: "",
      userEmailAddress: "",
      userPhoneNumber: "",
    },
    requestedTo: {
      uniqueId: "",
      userFirstName: "",
      userLastName: "",
      userProfileImage: "",
      userEmailAddress: "",
      userPhoneNumber: "",
    },
    fromDate: "",
    toDate: "",
    numberOfDays: 0,
    reason: "",
  });

  return (
    <div className="w-full h-full">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Apply work from home
        </CustomLabel>
      </div>
      <div className="w-full mt-5">
        <PrivateWorkFromHomeFormPageComponent
          dropdownList={workFromHomeList}
          // onChangeDropdown={}
          // dropdownValue={}
          // isDropdownError={}
          // requestedDateTime={}
          // onChangeFromDate={}
          // fromDateValue={}
          // isFromDateError={}
          // onChangeToDate={}
          // toDateValue={}
          // isToDateError={}
          // numberOfDays={}
          // onChangeReason={}
          // reasonValue={}
          // isReasonError={}
          // onClick={}
        />
      </div>
    </div>
  );
};

export default PrivateApplicationWorkFromHomePageTemplate;
