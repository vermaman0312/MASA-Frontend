import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./custom-otp-input-field.ui";

type props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isOtpError?: boolean;
};

const CustomOtpInputField = ({
  onChange,
  isOtpError,
}: props) => {
  return (
    <div className="w-full">
      <InputOTP
        maxLength={6}
        onChange={(value) => {
          onChange &&
            onChange({
              target: { value },
            } as React.ChangeEvent<HTMLInputElement>);
        }}
      >
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className={`${isOtpError && "border-red-500"}`}
          />
          <InputOTPSlot
            index={1}
            className={`${isOtpError && "border-red-500"}`}
          />
          <InputOTPSlot
            index={2}
            className={`${isOtpError && "border-red-500"}`}
          />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot
            index={3}
            className={`${isOtpError && "border-red-500"}`}
          />
          <InputOTPSlot
            index={4}
            className={`${isOtpError && "border-red-500"}`}
          />
          <InputOTPSlot
            index={5}
            className={`${isOtpError && "border-red-500"}`}
          />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default CustomOtpInputField;
