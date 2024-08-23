import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../../components/custom-input-field/custom-input-field.component";

type props = {
  userEmailAddress?: string;
  userPhoneNumber?: string;
  userDepartment?: string;
  userBranch?: string;
  userDesignation?: string;
  userFaculty?: string;
  userAdmissionDate?: string;
  userJoiningDate?: string;
  userRole?: string;
};

const PrivateProfileCardDetailsPageComponent = ({
  userEmailAddress,
  userPhoneNumber,
  userDepartment,
  userBranch,
  userDesignation,
  userFaculty,
  userAdmissionDate,
  userJoiningDate,
  userRole,
}: props) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start mt-16">
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Email address
        </CustomLabel>
        <CustomInputField
          disabled
          id="email"
          type="text"
          value={userEmailAddress}
        />
      </div>
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Phone number
        </CustomLabel>
        <CustomInputField
          disabled
          id="phoneNumber"
          type="text"
          value={userPhoneNumber ? userPhoneNumber : "N/A"}
        />
      </div>
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Department
        </CustomLabel>
        <CustomInputField
          disabled
          id="department"
          type="text"
          value={userDepartment ? userDepartment : "N/A"}
        />
      </div>
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Branch
        </CustomLabel>
        <CustomInputField
          disabled
          id="branch"
          type="text"
          value={userBranch ? userBranch : "N/A"}
        />
      </div>
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Faculty
        </CustomLabel>
        <CustomInputField
          disabled
          id="faculty"
          type="text"
          value={userFaculty ? userFaculty : "N/A"}
        />
      </div>
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Designation
        </CustomLabel>
        <CustomInputField
          disabled
          id="designation"
          type="text"
          value={
            userRole?.toLowerCase() === "student"
              ? "Student"
              : userDesignation
              ? userDesignation
              : "N/A"
          }
        />
      </div>
      <div className="w-full">
        <CustomLabel
          className="font-medium text-xs font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Joining date
        </CustomLabel>
        <CustomInputField
          disabled
          id="date"
          type="text"
          value={
            userRole?.toLowerCase() === "student"
              ? userAdmissionDate
                ? userAdmissionDate
                : "N/A"
              : userJoiningDate
              ? userJoiningDate
              : "N/A"
          }
        />
      </div>
    </div>
  );
};

export default PrivateProfileCardDetailsPageComponent;
