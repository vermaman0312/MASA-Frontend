import React from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { Textarea } from "../../../../../components/custom-textarea/custom-textarea.component";
import { CustomInputField } from "../../../../../components/custom-input-field/custom-input-field.component";

const PrivateForgotIdCardNewRequestFormPageComponent = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="w-full h-full flex flex-col items-start justify-start gap-2">
        <div className="w-full">
          <CustomLabel className="text-xl font-display text-gray-500">
            Your information
          </CustomLabel>
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Date:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={new Date()
              .toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })
              .replace(/\//g, "-")}
            placeholder="write a date..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Time:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={new Date().toLocaleTimeString()}
            placeholder="write a time..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Unique ID:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={`20SOECE11091`}
            placeholder="write a user unique ID..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            First name:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={`Aman`}
            placeholder="write a first name..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Last name:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={`Verma`}
            placeholder="write a last name..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Email address:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={`averma500@rku.ac.in`}
            placeholder="write a email address..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Phone number:
          </CustomLabel>
          <CustomInputField
            disabled
            type="text"
            value={`6205240414`}
            placeholder="write a email address..."
            className={`focus:outline-none focus:border-none active:border-none active:outline-none text-xs font-display`}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-start justify-start gap-2">
        <div className="w-full">
          <CustomLabel className="text-xl font-display text-gray-500">
            Reason
          </CustomLabel>
        </div>
        <div className="w-full">
          <CustomLabel className="text-xs font-display text-gray-900">
            Comment:
          </CustomLabel>
          <Textarea
            className="border-2 h-96 rounded-lg p-2 scroll-container"
            placeholder="write a comment..."
          />
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="bg-gray-900 text-white text-xs font-display p-2 w-full md:w-32 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateForgotIdCardNewRequestFormPageComponent;
