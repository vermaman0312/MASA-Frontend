import { useMutation } from "react-query";
import { deviceDetailsApiInterface } from "../../models/private-api-models/private-device-details-api.model";
import { updateDeviceDetailsApi } from "../../api/public-api/authentication-update-device-details.public.api";

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
