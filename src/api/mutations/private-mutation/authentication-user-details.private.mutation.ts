import { useMutation } from "react-query";
import { userDetailsAPI } from "../../api/private-api/authentication-user-details.private.api";
import {
  userDetailsResponseType,
  userDetailsType,
} from "../../models/private-api-models/private-user-details-api.model";

export const useUserDetailsMutation = () => {
  return useMutation(
    ({ verifyToken, token, userId }: userDetailsType) =>
      userDetailsAPI({
        verifyToken: verifyToken,
        token: token,
        userId: userId,
      }),
    {
      onMutate: () => {},
      onSuccess: (data: userDetailsResponseType) => {
        if (data.Success) {
            
        } else {
            
        }
      },
    }
  );
};
