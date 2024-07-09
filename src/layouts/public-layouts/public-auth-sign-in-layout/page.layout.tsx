import { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PublicAuthSignInPageTemplate from "../../../templates/public-templates/public-auth-sign-in-template/page.template";
import PublicAuthForgotPasswordPageTemplate from "../../../templates/public-templates/public-auth-forgot-password-template/page.template";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";
import { useNavigate } from "react-router-dom";
import CustomToast from "../../../components/custom-toast/custom-toast.component";
import CustomToastBody from "../../../components/custom-toast/custom-toast-body";
import Cookies from "js-cookie";

const PublicAuthSignInPageLayout = () => {
  const navigate = useNavigate();
  const token = "123";
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userEmailAddress, setUserEmailAddress] = useState<string>("");
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [userPassword, setUserPassword] = useState<string>("");
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCheckError, setIsCheckError] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleClickForgotPassword = useCallback(() => {
    setIsPageLoading(true);
    setTimeout(() => {
      setIsPageLoading(false);
      setIsForgotPassword(true);
    }, 5000);
  }, [setIsForgotPassword, setIsPageLoading]);

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserEmailAddress(event.target.value);
      setIsEmailError(false);
    },
    [setUserEmailAddress, setIsEmailError]
  );
  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserPassword(event.target.value);
      setIsPasswordError(false);
    },
    [setUserPassword, setIsPasswordError]
  );
  const onChangeChecked = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      setIsCheckError(false);
    },
    [setIsChecked, setIsCheckError]
  );
  const onChangeRememberMe = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRememberMe(event.target.checked);
    },
    [setRememberMe]
  );
  const onSubmitLogin = useCallback(() => {
    setIsLoading(true);
    if (!userEmailAddress) {
      setIsEmailError(true);
      setIsLoading(false);
      return;
    }
    if (!userPassword) {
      setIsPasswordError(true);
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      if (rememberMe) {
        Cookies.set("userEmailAddress", userEmailAddress, { expires: 7 });
        Cookies.set("userPassword", userPassword, { expires: 7 });
      }
      setIsLoading(false);
      setUserEmailAddress("");
      setRememberMe(false);
      setUserPassword("");
      navigate(`/user/auth/2FA?token=${token}`);
    }, 5000);
  }, [navigate, rememberMe, userEmailAddress, userPassword]);

  const onSubmitForgotPassword = useCallback(() => {
    setIsLoading(true);
    if (!userEmailAddress) {
      setIsEmailError(true);
      setIsLoading(false);
      return;
    }
    if (!isChecked) {
      setIsCheckError(true);
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      setIsLoading(false);
      setUserEmailAddress("");
      setIsChecked(false);
      setIsForgotPassword(false);
    }, 5000);
  }, [isChecked, userEmailAddress]);

  return (
    <div className="w-full h-screen grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 overflow-hidden">
      <div className="w-full bg-[#0d1b2a] flex flex-col items-center justify-between">
        <div
          onClick={() => CustomToast({ body: <CustomToastBody /> })}
          className="w-full flex items-center justify-start p-4 text-white cursor-pointer font-display"
        >
          Logo
        </div>
        <div className="w-full flex flex-col items-center justify-center p-4 text-white">
          <CustomLabel className="text-3xl font-medium font-display text-white">
            Management and Strategic Automation System
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center p-4 text-white">
          <CustomLabel className="text-xs font-light font-display text-white text-center">
            Copy right 2024 ⓒ verma
          </CustomLabel>
        </div>
      </div>
      {isForgotPassword ? (
        <div className="w-full flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <CustomLabel className="text-3xl font-medium font-display text-[#0d1b2a]">
              Forgot your password?
            </CustomLabel>
            <CustomLabel className="sm:text-lg md:text-xl lg:text-xl font-light font-display text-[#0d1b2a] text-center">
              Enter your email below to reset your password
            </CustomLabel>
          </div>
          <div className="lg:w-[50%] mt-3">
            <PublicAuthForgotPasswordPageTemplate
              isLoading={isLoading}
              onChangeEmail={onChangeEmail}
              emailValue={userEmailAddress}
              isEmailError={isEmailError}
              onChangeCheck={onChangeChecked}
              isChecked={isChecked}
              isCheckError={isCheckError}
              onClick={onSubmitForgotPassword}
            />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <CustomLabel className="text-3xl font-medium font-display text-[#0d1b2a]">
              Welcome back, Aman
            </CustomLabel>
            <CustomLabel className="sm:text-lg md:text-xl lg:text-xl font-light font-display text-[#0d1b2a] text-center">
              Enter your email below to login your account
            </CustomLabel>
          </div>
          <div className="lg:w-[50%] mt-3">
            <PublicAuthSignInPageTemplate
              isLoading={isLoading}
              onChangeEmail={onChangeEmail}
              emailValue={userEmailAddress}
              isEmailError={isEmailError}
              onChangePassword={onChangePassword}
              passwordValue={userPassword}
              isPasswordError={isPasswordError}
              onClick={onSubmitLogin}
              onClickForgot={handleClickForgotPassword}
              onChangeCheck={onChangeRememberMe}
              checkValue={rememberMe}
            />
          </div>
        </div>
      )}
      {isPageLoading && <CustomLoader />}
    </div>
  );
};

export default PublicAuthSignInPageLayout;
