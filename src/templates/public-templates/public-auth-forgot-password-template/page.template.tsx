import React from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import { Loader } from "lucide-react";
import CustomCheckBox from "../../../components/custom-checkbox/custom-checkbox.component";

type props = {
  isLoading?: boolean;
  onChangeEmail?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailValue?: string;
  isEmailError?: boolean;
  onChangeCheck?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isCheckError?: boolean;
  onClick?: () => void;
};

const PublicAuthForgotPasswordPageTemplate = ({
  isLoading,
  onChangeEmail,
  emailValue,
  isEmailError,
  onChangeCheck,
  isChecked,
  isCheckError,
  onClick,
}: props) => {
  return (
    <div className="w-full">
      <div>
        <CustomLabel
          className="font-medium text-md font-display text-[#0d1b2a]"
          htmlFor="email"
        >
          Email address
        </CustomLabel>
        <CustomInputField
          id="email"
          type="email"
          placeholder="example@example.com"
          onChange={(event) => onChangeEmail && onChangeEmail(event)}
          value={emailValue}
          className={isEmailError ? `border-red-500` : undefined}
        />
      </div>
      <div className="mt-3 flex items-center justify-start">
        <CustomCheckBox
          title="I accept the terms and condition"
          onChange={(event) => onChangeCheck && onChangeCheck(event)}
          value={isChecked}
          isError={isCheckError}
        />
      </div>
      <div className="mt-8">
        <button
          onClick={onClick}
          className="p-3 rounded-xl w-full flex items-center justify-center text-md text-white font-display font-bold bg-[#0d1b2a]"
        >
          {isLoading ? (
            <Loader className="animate-spin" />
          ) : (
            <>Check account &rarr;</>
          )}
        </button>
      </div>
      <div className="w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mt-5" />
      <div className="flex items-center justify-center mt-3">
        <CustomLabel className="lg:text-lg md:text-xs sm:text-xs font-light font-display text-[#0d1b2a] text-center">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </CustomLabel>
      </div>
    </div>
  );
};

export default PublicAuthForgotPasswordPageTemplate;
