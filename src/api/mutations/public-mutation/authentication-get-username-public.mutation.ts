import { useMutation } from "react-query";
import { getUserNamePublicApi } from "../../api/public-api/authentication-get-username.public.api";
import { useDispatch } from "react-redux";
import {
  getUserNamePublicViaIpFailure,
  getUserNamePublicViaIpRequest,
  getUserNamePublicViaIpSuccess,
} from "../../../redux/actions/public-actions/public-component.action";
import {
  getUserNameInterface,
  ResponseType,
} from "../../models/public-api-models/public-get-username-api.model";

export const useGetUserNameMutation = () => {
  const dispatch = useDispatch();

  return useMutation(
    ({ verifyToken, ipAddress }: getUserNameInterface) =>
      getUserNamePublicApi({ verifyToken: verifyToken, ipAddress: ipAddress }),
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
