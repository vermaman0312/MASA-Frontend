import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { userDetailsAPI } from "../../../api/private-api/profile/user-details.api";
import {
  profileDetailsFailure,
  profileDetailsRequest,
  profileDetailsSuccess,
} from "../../../../redux/actions/private-actions/private.profile.action";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const useUserDetailsMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ deviceToken, token, userId }: TBodyApiType) =>
      userDetailsAPI({
        deviceToken: deviceToken,
        token: token,
        userId: userId,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(profileDetailsRequest());
      },
      onSuccess: (data: TResponseApiType) => {
        if (data.Success) {
          dispatch(profileDetailsSuccess(data as TResponseApiType));
        } else {
          dispatch(profileDetailsFailure(data as TResponseApiType));
        }
      },
    }
  );
};
