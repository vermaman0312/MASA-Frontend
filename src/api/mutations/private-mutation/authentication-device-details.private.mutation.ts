import { useMutation } from "react-query";
import {
  deviceDetailsApiInterface,
  deviceDetailsInterface,
} from "../../models/private-api-models/private-device-details-api.model";
import { useDispatch } from "react-redux";
import {
  getDeviceDetailsFailure,
  getDeviceDetailsRequest,
  getDeviceDetailsSuccess,
  updateDeviceDetailsFailure,
  updateDeviceDetailsRequest,
  updateDeviceDetailsSuccess,
} from "../../../redux/actions/private-actions/private.component.action";
import { updateDeviceDetailsApi } from "../../api/private-api/component/device-updation.api";
import { getDeviceDetailsApi } from "../../api/private-api/component/device-details.api";

export const useDeviceDetailsMutation = () => {
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

export const useGetDeviceDetailsMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ verifyToken, token }: { verifyToken: string; token: string }) =>
      getDeviceDetailsApi({ verifyToken: verifyToken, token: token }),
    {
      onMutate: () => {
        dispatch(getDeviceDetailsRequest());
      },
      onSuccess: (data) => {
        if (data.Success) {
          dispatch(getDeviceDetailsSuccess(data as deviceDetailsInterface));
        } else {
          dispatch(getDeviceDetailsFailure(data as deviceDetailsInterface));
        }
      },
    }
  );
};
