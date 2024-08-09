import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { userDetailsAPI } from "../../../api/private-api/profile/user-details.api";
import {
  profileDetailsFailure,
  profileDetailsRequest,
  profileDetailsSuccess,
} from "../../../../redux/actions/private-actions/private.profile.action";
import {
  profileDetailsResponseType,
  profileDetailsType,
} from "../../../models/private-api-models/private-profile-details-api.model";

export const useUserDetailsMutation = () => {
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
