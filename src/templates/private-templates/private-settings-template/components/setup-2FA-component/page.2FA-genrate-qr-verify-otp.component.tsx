import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import CustomOtpInputField from "../../../../../components/custom-otp-input-field/custom-otp-input-field.component";

const Private2FAGeneratingQRCodeVerifyOTPPageComponent = () => {
  return (
    <div className="border w-full rounded-lg p-2 flex flex-col items-start">
      <div>
        <CustomLabel className="font-display text-lg text-gray-500">
          Setup authenticator app
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Authenticator apps and browser extensions like 1Password, Authy,
          Microsoft Authenticator, etc. generate one-time passwords that are
          used as a second factor to verify your identity when prompted during
          sign-in.
        </CustomLabel>
      </div>
      <div className="mt-5">
        <CustomLabel className="font-display font-seminbold text-gray-500">
          Scan the QR code
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Use an authenticator app or browser extension to scan. Learn more
          about enabling 2FA.
        </CustomLabel>
      </div>
      <div className="border rounded-lg p-1 mt-5 w-full md:w-auto flex items-center justify-center">
        <img
          src="data:image/png;base64,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"
          alt=""
          style={{ width: "250px", height: "100%" }}
        />
      </div>
      <div className="mt-5">
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Unable to scan? You can use the{" "}
          <span
            onClick={() => alert("Setup key")}
            className="text-blue-500 cursor-pointer underline"
          >
            setup key
          </span>{" "}
          to manually configure your authenticator app.
        </CustomLabel>
      </div>
      <div className="mt-5">
        <CustomLabel className="font-display text-xs font-normal text-gray-500">
          Verify the code from the app
        </CustomLabel>
      </div>
      <div className="w-full md:w-[30%]">
        <CustomOtpInputField />
      </div>
      <div className="w-full mt-5 flex items-center justify-end gap-5">
        <button className="text-xs font-display p-2 border rounded-lg w-32 bg-red-100 border-red-300">
          Cancel
        </button>
        <button className="text-xs font-display p-2 border rounded-lg w-32 bg-blue-100 border-blue-300">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Private2FAGeneratingQRCodeVerifyOTPPageComponent;
