import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { updateDeviceDetailsApi } from "../../../api/private-api/component/device-updation.api";
import {
  updateDeviceDetailsFailure,
  updateDeviceDetailsRequest,
  updateDeviceDetailsSuccess,
} from "../../../../redux/actions/private-actions/private.component.action";
import { deviceDetailsApiInterface } from "../../../models/private-api-models/private-device-details-api.model";

export const useDeviceDetailsUpdationMutation = () => {
  const dispatch = useDispatch();
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
      onMutate: () => {
        updateDeviceDetailsRequest();
      },
      onSuccess: (data) => {
        if (data.Success) {
          dispatch(updateDeviceDetailsSuccess(data));
        } else {
          dispatch(updateDeviceDetailsFailure(data));
        }
      },
    }
  );
};
