import { useMutation } from "react-query";
import { updateDeviceDetailsApi } from "../../api/public-api/authentication-update-device-details.public.api";
import { deviceDetailsApiInterface } from "../../api-models/private-api-models/private-device-details-api.model";

export const useDeviceDetailsMutation = () => {
  return useMutation(
    ({
      verifyToken,
      token,
      browserName,
      browserVersion,
      browserId,
      browserOS,
      browserEngine,
      ipAddress,
      macAddress,
      longitude,
      latitude,
    }: deviceDetailsApiInterface) =>
      updateDeviceDetailsApi({
        verifyToken,
        token,
        browserName,
        browserVersion,
        browserId,
        browserOS,
        browserEngine,
        ipAddress,
        macAddress,
        longitude,
        latitude,
      }),
    {
      onMutate: () => {},
      onSuccess: () => {},
      onError: () => {},
    }
  );
};
