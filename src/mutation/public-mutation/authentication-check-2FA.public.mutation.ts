import { useMutation } from "react-query";
import { userCheck2FA } from "../../api/public-api/authentication-check-2FA-public.api";
import { useNavigate } from "react-router-dom";
import { check2FAInterface } from "../../api-models/public-api-models/public-authentication-login-api.model";

export const useUserCheck2FAMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    ({ verifyToken, token }: check2FAInterface) =>
      userCheck2FA({ verifyToken: verifyToken, token: token }),
    {
      onMutate: () => {},
      onSuccess: (data, context) => {
        if (data.Success) {
          navigate(`/user/auth/2FA?token=${context.verifyToken}`);
        } else {
          localStorage.setItem("token", context.token);
          navigate(`/user/auth/dashboard?token=${context.verifyToken}`);
        }
      },
      onError: (error) => {
        console.log("Error");
      },
    }
  );
};
