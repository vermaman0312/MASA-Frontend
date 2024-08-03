import { useMutation } from "react-query";
import { userLoginApi } from "../../api/public-api/authentication.public.api";
import { useDispatch } from "react-redux";
import {
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
} from "../../redux/actions/public-actions/public-authentication-login.action";

// Login
export const useUserLoginMutation = () => {
  const dispatch = useDispatch();

  return useMutation(userLoginApi, {
    onMutate: () => {
      dispatch(userLoginRequest());
    },
    onSuccess: (data) => {
      dispatch(userLoginSuccess(data));
    },
    onError: (error) => {
      dispatch(userLoginFailure(error as string));
    },
  });
};
