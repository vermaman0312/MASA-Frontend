import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { getUserNamePublicApi } from "../../../api/public-api/component/get-username.api";
import {
  getUserNamePublicViaIpRequest,
  getUserNamePublicViaIpSuccess,
} from "../../../../redux/actions/public-actions/public-component.action";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

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
        dispatch(getUserNamePublicViaIpSuccess(data as TResponseApiType));
      },
    }
  );
};
