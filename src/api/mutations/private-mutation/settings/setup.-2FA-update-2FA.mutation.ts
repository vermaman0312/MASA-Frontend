import { useMutation } from "react-query";
import { updateUserIs2FAApi } from "../../../api/private-api/settings/setup-2FA-update-2FA.api";
import { TBodyApiType } from "../../../models/api.body.model";
import { useDispatch } from "react-redux";
import {
  updateUserIs2FARequest,
  updateUserIs2FASuccess,
} from "../../../../redux/actions/private-actions/private.settings.action";
import { TResponseApiType } from "../../../models/api.response.model";
import { useGenerateQRSetup2FAMutation } from "./setup-2FA-generate-QR-code.mutation";
import { useDetails2FAMutation } from "./setup-2FA-details-2FA.mutation";

export const useSetup2FAUpdate2FAMutation = () => {
  const dispatch = useDispatch();
  const mutate = useGenerateQRSetup2FAMutation();
  const fetchDetails = useDetails2FAMutation();
  return useMutation(
    ({ deviceToken, token, userIs2FA }: TBodyApiType) =>
      updateUserIs2FAApi({
        deviceToken: deviceToken,
        token: token,
        userIs2FA: userIs2FA,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(updateUserIs2FARequest());
      },
      onSuccess: (data: TResponseApiType, context) => {
        dispatch(updateUserIs2FASuccess(data));
        if (data.Success) {
          fetchDetails.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
          } as TBodyApiType);
          mutate.mutate({
            deviceToken: context.deviceToken,
            token: context.token,
          } as TBodyApiType);
        }
      },
    }
  );
};
