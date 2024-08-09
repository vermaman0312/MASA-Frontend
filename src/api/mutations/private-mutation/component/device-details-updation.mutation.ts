import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { updateDeviceDetailsApi } from "../../../api/private-api/component/device-updation.api";
import {
  updateDeviceDetailsFailure,
  updateDeviceDetailsRequest,
  updateDeviceDetailsSuccess,
} from "../../../../redux/actions/private-actions/private.component.action";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

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
    }: TBodyApiType) =>
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
      } as TBodyApiType),
    {
      onMutate: () => {
        updateDeviceDetailsRequest();
      },
      onSuccess: (data) => {
        if (data.Success) {
          dispatch(updateDeviceDetailsSuccess(data as TResponseApiType));
        } else {
          dispatch(updateDeviceDetailsFailure(data as TResponseApiType));
        }
      },
    }
  );
};
