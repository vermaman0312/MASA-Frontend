import { useMutation } from "react-query";
import { userIs2FASetupCompletedApi } from "../../../api/private-api/settings/setup-2FA-setupCompleted.api";
import { TBodyApiType } from "../../../models/api.body.model";
import { useDispatch } from "react-redux";
import {
  userIs2FASetupCompletedRequest,
  userIs2FASetupCompletedSuccess,
} from "../../../../redux/actions/private-actions/private.settings.action";
import { TResponseApiType } from "../../../models/api.response.model";
import { useDetails2FAMutation } from "./setup-2FA-details-2FA.mutation";

export const useUserIs2FASetupCompletedMutation = () => {
  const dispatch = useDispatch();
  const mutation = useDetails2FAMutation();
  return useMutation(
    ({ deviceToken, token, userIs2FASetupCompleted }: TBodyApiType) =>
      userIs2FASetupCompletedApi({
        deviceToken: deviceToken,
        token: token,
        userIs2FASetupCompleted: userIs2FASetupCompleted,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(userIs2FASetupCompletedRequest());
      },
      onSuccess: (data, context) => {
        dispatch(userIs2FASetupCompletedSuccess(data as TResponseApiType));
        if (data.Success) {
          mutation.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
          } as TBodyApiType);
        }
      },
    }
  );
};
