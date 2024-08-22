import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import "../../../css/scroll-container.css";
import PublicVerify2FAOTPPageComponent from "./components/page.veryfy-2FA-OTP.component";

const PublicAuth2FAPageTemplate = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <CustomLabel className="text-3xl font-medium font-display text-[#0d1b2a] text-center">
            Two Factor Authentication
          </CustomLabel>
          <CustomLabel className="sm:text-lg md:text-md lg:text-md font-light font-display text-[#0d1b2a] text-center">
            Enter the 6-digit otp from google authenticator or text/message and
            get access to this system!
          </CustomLabel>
        </div>
        <div className="w-full">
          <PublicVerify2FAOTPPageComponent />
        </div>
      </div>
    </div>
  );
};

export default PublicAuth2FAPageTemplate;
