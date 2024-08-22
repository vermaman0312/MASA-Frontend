import { useMutation } from "react-query";
import { details2FASettingApi } from "../../../api/private-api/settings/setup-2FA-details-2FA.api";
import { TBodyApiType } from "../../../models/api.body.model";
import {
  getDetails2FARequest,
  getDetails2FASuccess,
} from "../../../../redux/actions/private-actions/private.settings.action";
import { TResponseApiType } from "../../../models/api.response.model";
import { useDispatch } from "react-redux";

export const useDetails2FAMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ deviceToken, token }: TBodyApiType) =>
      details2FASettingApi({
        deviceToken: deviceToken,
        token: token,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(getDetails2FARequest());
      },
      onSuccess: (data: TResponseApiType) => {
        dispatch(getDetails2FASuccess(data as TResponseApiType));
      },
    }
  );
};
