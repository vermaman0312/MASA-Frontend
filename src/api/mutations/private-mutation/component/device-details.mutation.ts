import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { getDeviceDetailsApi } from "../../../api/private-api/component/device-details.api";
import {
  getDeviceDetailsFailure,
  getDeviceDetailsRequest,
  getDeviceDetailsSuccess,
} from "../../../../redux/actions/private-actions/private.component.action";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const useDeviceDetailsMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ verifyToken, token }: TBodyApiType) =>
      getDeviceDetailsApi({
        verifyToken: verifyToken,
        token: token,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(getDeviceDetailsRequest());
      },
      onSuccess: (data) => {
        if (data.Success) {
          dispatch(getDeviceDetailsSuccess(data as TResponseApiType));
        } else {
          dispatch(getDeviceDetailsFailure(data as TResponseApiType));
        }
      },
    }
  );
};
