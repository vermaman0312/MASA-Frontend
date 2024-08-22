import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userCheck2FA } from "../../../api/public-api/component/check-2FA.api";
import { RootState } from "../../../../redux/redux-index";
import { useDeviceDetailsMutation } from "../../private-mutation/component/device-details.mutation";
import { useDeviceDetailsUpdationMutation } from "../../private-mutation/component/device-details-updation.mutation";
import { TBodyApiType } from "../../../models/api.body.model";
import { customSetCookies } from "../../../../utils/custom-cookies/custom-cookies.util";

export const useUserCheck2FAMutation = () => {
  const navigate = useNavigate();
  const updateDeviceDetails = useDeviceDetailsUpdationMutation();
  const deviceDetails = useSelector(
    (state: RootState) => state.privateComponentState.device.deviceDetails
  );
  const getDeviceDetails = useDeviceDetailsMutation();
  return useMutation(
    ({ deviceToken, token }: TBodyApiType) =>
      userCheck2FA({ deviceToken: deviceToken, token: token } as TBodyApiType),
    {
      onSuccess: (data, context) => {
        if (data.Success) {
          navigate(`/user/auth/2FA?token=${context.deviceToken}`);
          customSetCookies("userTempToken", context.token, 7);
          updateDeviceDetails.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
            browserName: deviceDetails.browserName as string,
            browserVersion: deviceDetails.browserVersion as string,
            browserId: deviceDetails.browserId as string,
            browserOS: deviceDetails.browserOs as string,
            browserEngine: deviceDetails.browserEngine as string,
            ipAddress: deviceDetails.ipAddress as string,
            macAddress: deviceDetails.macAddress as string,
            longitude: deviceDetails.location.longitude as number,
            latitude: deviceDetails.location.latitude as number,
          } as TBodyApiType);
          getDeviceDetails.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
          } as TBodyApiType);
        } else {
          localStorage.setItem("token", context.token);
          customSetCookies("userAuthToken", context.token, 7);
          navigate(`/user/auth/dashboard?token=${context.deviceToken}`);
          updateDeviceDetails.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
            browserName: deviceDetails.browserName as string,
            browserVersion: deviceDetails.browserVersion as string,
            browserId: deviceDetails.browserId as string,
            browserOS: deviceDetails.browserOs as string,
            browserEngine: deviceDetails.browserEngine as string,
            ipAddress: deviceDetails.ipAddress as string,
            macAddress: deviceDetails.macAddress as string,
            longitude: deviceDetails.location.longitude as number,
            latitude: deviceDetails.location.latitude as number,
          } as TBodyApiType);
          getDeviceDetails.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
          } as TBodyApiType);
        }
      },
    }
  );
};
