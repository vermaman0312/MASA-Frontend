import { useSelector } from "react-redux";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import CustomOtpInputField from "../../../../../components/custom-otp-input-field/custom-otp-input-field.component";
import { RootState } from "../../../../../redux/redux-index";
import { TStateResponseApiType } from "../../../../../api/models/api.state.response.model";

const Private2FAGeneratingQRCodeVerifyOTPPageComponent = () => {
  const generatedData = useSelector(
    (state: RootState) =>
      state.privateSettingState.setup2FA.verify2FA.generatedQR
  );
  const data2Fa = (generatedData as TStateResponseApiType).data?.Data;
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
          src={data2Fa?.qrImage}
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
