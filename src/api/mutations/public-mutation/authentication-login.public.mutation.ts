import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  loginFormAPIInterface,
  loginResponseAPIInterface,
} from "../../models/public-api-models/public-authentication-login-api.model";
import { useUserCheck2FAMutation } from "./authentication-check-2FA.public.mutation";
import { userLoginApi } from "../../api/public-api/authentication-login.public.api";
import {
  userEmailAddressAction,
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
  userPasswordAction,
} from "../../../redux/actions/public-actions/public-authentication-login.action";

// Login
export const useUserLoginMutation = ({
  userEmailAddress,
  userPassword,
  verifyToken,
}: loginFormAPIInterface) => {
  const dispatch = useDispatch();
  const check2FA = useUserCheck2FAMutation();

  return useMutation(
    () => userLoginApi({ userEmailAddress, userPassword, verifyToken }),
    {
      onMutate: () => {
        dispatch(userLoginRequest());
      },
      onSuccess: (data) => {
        if (!data.Success) {
          dispatch(userLoginFailure(data as loginResponseAPIInterface));
          toast(data.Message, {
            className: "error",
            icon: false,
          });
        } else {
          check2FA.mutate({ verifyToken: verifyToken, token: data.Data });
          dispatch(userLoginSuccess(data as loginResponseAPIInterface));
          dispatch(userEmailAddressAction(null));
          dispatch(userPasswordAction(null));
        }
      },
    }
  );
};
