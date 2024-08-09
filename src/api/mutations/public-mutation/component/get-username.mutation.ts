import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { getUserNamePublicApi } from "../../../api/public-api/component/get-username.api";
import {
  getUserNamePublicViaIpFailure,
  getUserNamePublicViaIpRequest,
  getUserNamePublicViaIpSuccess,
} from "../../../../redux/actions/public-actions/public-component.action";
import { ResponseType } from "../../../models/public-api-models/public-get-username-api.model";
import { TBodyApiType } from "../../../models/api.body.model";

export const useGetUserNameMutation = () => {
  const dispatch = useDispatch();

  return useMutation(
    ({ verifyToken, ipAddress }: TBodyApiType) =>
      getUserNamePublicApi({
        verifyToken: verifyToken,
        ipAddress: ipAddress,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(getUserNamePublicViaIpRequest());
      },
      onSuccess: (data) => {
        if (data.Success) {
          dispatch(getUserNamePublicViaIpSuccess(data as ResponseType));
        } else {
          dispatch(getUserNamePublicViaIpFailure(data as ResponseType));
        }
      },
    }
  );
};
