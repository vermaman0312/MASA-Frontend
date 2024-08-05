import { useMutation } from "react-query";
import { userCheck2FA } from "../../api/public-api/authentication-check-2FA-public.api";
import { useNavigate } from "react-router-dom";

export const useUserCheck2FAMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    ({ verifyToken, token }: { verifyToken: string; token: string }) =>
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
