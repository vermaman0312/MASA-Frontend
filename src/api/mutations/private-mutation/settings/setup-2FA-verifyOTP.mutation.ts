import { useMutation } from "react-query";
import { verifyOtpApi } from "../../../api/private-api/settings/setup-2FA-verifyOTP.api";
import { TBodyApiType } from "../../../models/api.body.model";
import { useDispatch } from "react-redux";
import { useUserIs2FASetupCompletedMutation } from "./setup-2FA-setupCompleted.mutation";
import {
  verify2FAOTPRequest,
  verify2FAOTPSuccess,
} from "../../../../redux/actions/private-actions/private.settings.action";
import { toast } from "react-toastify";

export const useVerifyOTPMutation = () => {
  const dispatch = useDispatch();
  const mutate = useUserIs2FASetupCompletedMutation();

  return useMutation(
    ({ verifyToken, token, userOTP }: TBodyApiType) =>
      verifyOtpApi({
        verifyToken: verifyToken,
        token: token,
        userOTP: userOTP,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(verify2FAOTPRequest());
      },
      onSuccess: (data, context) => {
        dispatch(verify2FAOTPSuccess(data));
        if (data.Success) {
          toast(data.Message);
          mutate.mutate({
            verifyToken: context.verifyToken,
            token: context.token,
            userIs2FASetupCompleted: true,
          } as TBodyApiType);
        } else {
          toast(data.Message);
        }
      },
    }
  );
};
