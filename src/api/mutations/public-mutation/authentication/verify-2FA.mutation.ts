import { useMutation } from "react-query";
import { TBodyApiType } from "../../../models/api.body.model";
import { verify2FAOtpApi } from "../../../api/public-api/authentication/verify-2FA.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  publicUserOTP2FA,
  publicVerify2FARequest,
  publicVerify2FASuccess,
} from "../../../../redux/actions/public-actions/public-authentication-verify-2FA.action";
import { TResponseApiType } from "../../../models/api.response.model";
import { toast } from "react-toastify";
import {
  customGetCookies,
  customRemoveCookies,
  customSetCookies,
} from "../../../../utils/custom-cookies/custom-cookies.util";

export const useVerify2FAOTPMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken, deviceToken } = customGetCookies("userTempToken");
  return useMutation(
    ({ userOTP }: TBodyApiType) =>
      verify2FAOtpApi({
        deviceToken: deviceToken,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzcxNThiY2JmYTI1OTExZTlhZTRjYSIsImlhdCI6MTcyNDMyMzg1MiwiZXhwIjoxNzI0NDEwMjUyfQ.uM_SPSndB1IwQ9d_fvkZhox_mS6Vht-M2dxHdgnI6cI",
        userOTP: userOTP,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(publicVerify2FARequest());
      },
      onSuccess: (data, context) => {
        dispatch(publicVerify2FASuccess(data as TResponseApiType));
        if (data.Success) {
          customSetCookies("userAuthToken", userToken as string, 7);
          toast(data.Message);
          dispatch(publicUserOTP2FA(null));
          customRemoveCookies("userTempToken");
          navigate(`/user/auth/dashboard?token=${context.deviceToken}`);
        } else {
          toast(data.Message);
          dispatch(publicUserOTP2FA(null));
        }
      },
    }
  );
};
