import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { userDetailsAPI } from "../../../api/private-api/profile/user-details.api";
import {
  profileDetailsFailure,
  profileDetailsRequest,
  profileDetailsSuccess,
} from "../../../../redux/actions/private-actions/private.profile.action";
import { profileDetailsResponseType } from "../../../models/private-api-models/private-profile-details-api.model";
import { TBodyApiType } from "../../../models/api.body.model";

export const useUserDetailsMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ verifyToken, token, userId }: TBodyApiType) =>
      userDetailsAPI({
        verifyToken: verifyToken,
        token: token,
        userId: userId,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(profileDetailsRequest());
      },
      onSuccess: (data: profileDetailsResponseType) => {
        if (data.Success) {
          dispatch(profileDetailsSuccess(data as profileDetailsResponseType));
        } else {
          dispatch(profileDetailsFailure(data as profileDetailsResponseType));
        }
      },
    }
  );
};
