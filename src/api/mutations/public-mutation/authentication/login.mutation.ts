import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLoginApi } from "../../../api/public-api/authentication/login.api";
import {
  userEmailAddressAction,
  userLoginRequest,
  userLoginSuccess,
  userPasswordAction,
} from "../../../../redux/actions/public-actions/public-authentication-login.action";
import { useUserCheck2FAMutation } from "../component/check-2FA.mutation";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

// Login
export const useUserLoginMutation = ({
  userEmailAddress,
  userPassword,
  verifyToken,
}: TBodyApiType) => {
  const dispatch = useDispatch();
  const check2FA = useUserCheck2FAMutation();

  return useMutation(
    () =>
      userLoginApi({
        userEmailAddress: userEmailAddress,
        userPassword: userPassword,
        verifyToken: verifyToken,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(userLoginRequest());
      },
      onSuccess: (data) => {
        if (!data.Success) {
          toast(data.Message, {
            className: "error",
            icon: false,
          });
          dispatch(userLoginSuccess(data as TResponseApiType));
        } else {
          check2FA.mutate({
            verifyToken: verifyToken,
            token: data.Data,
          } as unknown as TBodyApiType);
          dispatch(userLoginSuccess(data as TResponseApiType));
          dispatch(userEmailAddressAction(null));
          dispatch(userPasswordAction(null));
        }
      },
    }
  );
};
