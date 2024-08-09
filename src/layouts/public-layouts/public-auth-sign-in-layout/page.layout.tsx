import { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import PublicAuthSignInPageTemplate from "../../../templates/public-templates/public-auth-sign-in-template/page.template";
import PublicAuthForgotPasswordPageTemplate from "../../../templates/public-templates/public-auth-forgot-password-template/page.template";
import CustomLoader from "../../../components/custom-loader/custom-loader.component";
import CustomToast from "../../../components/custom-toast/custom-toast.component";
import CustomToastBody from "../../../components/custom-toast/custom-toast-body";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  isUserEmailAddressErrorAction,
  isUserPasswordErrorAction,
  userEmailAddressAction,
  userPasswordAction,
} from "../../../redux/actions/public-actions/public-authentication-login.action";
import { RootState } from "../../../redux/redux-index";
import { getUserNameResponseAPIInterface } from "../../../api/models/public-api-models/public-get-username-api.model";
import { useUserLoginMutation } from "../../../api/mutations/public-mutation/authentication/login.mutation";

const PublicAuthSignInPageLayout = () => {
  const dispatch = useDispatch();
  const loginFormData = useSelector(
    (state: RootState) => state.publicAuthState.loginDetails.formData
  );
  const publicUserName = useSelector(
    (state: RootState) => state.publicComponentState.publicUserDetails
  );

  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);
  const [isForgotPassword, setIsForgotPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCheckError, setIsCheckError] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const mutation = useUserLoginMutation({
    userEmailAddress: loginFormData.userEmailAddress as string,
    userPassword: loginFormData.userPassword as string,
    verifyToken: "123",
  });

  const handleClickForgotPassword = useCallback(() => {
    setIsPageLoading(true);
    setTimeout(() => {
      setIsPageLoading(false);
      setIsForgotPassword(true);
    }, 5000);
  }, [setIsForgotPassword, setIsPageLoading]);

  const onChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(userEmailAddressAction(event.target.value));
      dispatch(isUserEmailAddressErrorAction(false));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(userPasswordAction(event.target.value));
      dispatch(isUserPasswordErrorAction(false));
    },
    [dispatch]
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
    if (!loginFormData.userEmailAddress) {
      dispatch(isUserEmailAddressErrorAction(true));
      setIsLoading(false);
      return;
    }
    if (!loginFormData.userPassword) {
      dispatch(isUserPasswordErrorAction(true));
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      if (rememberMe) {
        Cookies.set("userEmailAddress", `Aman`, { expires: 7 });
        Cookies.set("userPassword", `userPassword`, { expires: 7 });
      }
      mutation.mutate();
      setIsLoading(false);
      setRememberMe(false);
    }, 3000);
  }, [
    dispatch,
    loginFormData.userEmailAddress,
    loginFormData.userPassword,
    mutation,
    rememberMe,
  ]);

  const onSubmitForgotPassword = useCallback(() => {
    setIsLoading(true);
    if (!loginFormData.userEmailAddress) {
      dispatch(isUserEmailAddressErrorAction(true));
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
      setIsChecked(false);
      setIsForgotPassword(false);
    }, 3000);
  }, [dispatch, isChecked, loginFormData.userEmailAddress]);

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
              emailValue={loginFormData.userEmailAddress as string}
              isEmailError={loginFormData.isUserEmailAddressError as boolean}
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
              {(publicUserName as getUserNameResponseAPIInterface).data?.Data
                ?.userFirstName
                ? `Welcome back, ${
                    (publicUserName as getUserNameResponseAPIInterface).data
                      ?.Data?.userFirstName
                  }`
                : `Welcome to MASA`}
            </CustomLabel>
            <CustomLabel className="sm:text-lg md:text-xl lg:text-xl font-light font-display text-[#0d1b2a] text-center">
              Enter your email below to login your account
            </CustomLabel>
          </div>
          <div className="lg:w-[50%] mt-3">
            <PublicAuthSignInPageTemplate
              isLoading={isLoading}
              onChangeEmail={onChangeEmail}
              emailValue={loginFormData.userEmailAddress as string}
              isEmailError={loginFormData.isUserEmailAddressError as boolean}
              onChangePassword={onChangePassword}
              passwordValue={loginFormData.userPassword as string}
              isPasswordError={loginFormData.isUserPasswordError as boolean}
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
