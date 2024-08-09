import { useMutation } from "react-query";
import {
  profileDetailsResponseType,
  profileDetailsType,
} from "../../models/private-api-models/private-profile-details-api.model";
import { useDispatch } from "react-redux";
import {
  profileDetailsFailure,
  profileDetailsRequest,
  profileDetailsSuccess,
} from "../../../redux/actions/private-actions/private.profile.action";
import { userDetailsAPI } from "../../api/private-api/profile/user-details.api";

export const useProfileDetailsMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ verifyToken, token, userId }: profileDetailsType) =>
      userDetailsAPI({
        verifyToken: verifyToken,
        token: token,
        userId: userId,
      }),
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
