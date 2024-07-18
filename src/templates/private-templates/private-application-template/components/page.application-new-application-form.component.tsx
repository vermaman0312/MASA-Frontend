import React from "react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../../components/custom-input-field/custom-input-field.component";
import { allUserList } from "../../../../mock/user-data";
import CustomDropdown from "../../../../components/custom-dropdown/custom-dropdown.component";
import CustomMarkDown from "../../../../components/custom-markdown/custom-markdown.component";

type props = {
  onChangeSubject?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  subjectValue?: string;
  isSubjectError?: boolean;
  onChangeDropdown?: (value: number | string) => void;
  dropdownValue?: string;
  isDropdownError?: boolean;
  setValue?: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: any
  ) => void;
  value?: string;
  onClick?: () => void;
};

const PrivateApplicationFormPageComponent = ({
  onChangeSubject,
  subjectValue,
  isSubjectError,
  onChangeDropdown,
  dropdownValue,
  isDropdownError,
  setValue,
  value,
  onClick,
}: props) => {
  const userList = allUserList
    .filter((filter) => filter.userRole.toLowerCase() !== "student")
    .map(
      (user) =>
        user.userFirstName +
        " " +
        user.userLastName +
        `(${user.userDesignation})`
    );

  return (
    <div className="w-full h-full">
      <div>
        <CustomLabel className="text-xs font-display text-gray-900">
          Subject:
        </CustomLabel>
        <CustomInputField
          type="text"
          onChange={(event) => onChangeSubject && onChangeSubject(event)}
          value={subjectValue}
          placeholder="write a subject..."
          className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display ${
            isSubjectError && "border-red-500 placeholder:text-red-500"
          }`}
        />
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-gray-900">
          Submited to:
        </CustomLabel>
        <CustomDropdown
          title="Select the name"
          list={userList}
          onChange={onChangeDropdown}
          value={dropdownValue}
          isError={isDropdownError}
        />
      </div>
      <div className="mt-5">
        <CustomMarkDown height={450} setValue={setValue} value={value} />
      </div>
      <div className="mt-3 w-full flex items-center justify-end">
        <button
          onClick={onClick}
          className="text-xs font-display text-white bg-gray-700 p-2 w-24 rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PrivateApplicationFormPageComponent;
