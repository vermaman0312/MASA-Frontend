import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userCheck2FA } from "../../../api/public-api/component/check-2FA.api";
import { RootState } from "../../../../redux/redux-index";
import { check2FAInterface } from "../../../models/public-api-models/public-authentication-login-api.model";
import { useDeviceDetailsMutation } from "../../private-mutation/component/device-details.mutation";
import { useDeviceDetailsUpdationMutation } from "../../private-mutation/component/device-details-updation.mutation";

export const useUserCheck2FAMutation = () => {
  const navigate = useNavigate();
  const updateDeviceDetails = useDeviceDetailsUpdationMutation();
  const deviceDetails = useSelector(
    (state: RootState) => state.privateComponentState.device.deviceDetails
  );
  const getDeviceDetails = useDeviceDetailsMutation();
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
          updateDeviceDetails.mutate({
            verifyToken: context.verifyToken,
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
          });
          getDeviceDetails.mutate({
            verifyToken: context.verifyToken,
            token: context.token,
          });
        }
      },
    }
  );
};
