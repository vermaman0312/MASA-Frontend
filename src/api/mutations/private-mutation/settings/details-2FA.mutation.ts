import { useMutation } from "react-query";
import { details2FASettingApi } from "../../../api/private-api/settings/details-2FA.api";
import { TBodyApiType } from "../../../models/api.body.model";
import {
  getDetails2FAFailure,
  getDetails2FARequest,
  getDetails2FASuccess,
} from "../../../../redux/actions/private-actions/private.settings.action";
import { TResponseApiType } from "../../../models/api.response.model";
import { useDispatch } from "react-redux";

export const useDetails2FAMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ verifyToken, token }: TBodyApiType) =>
      details2FASettingApi({
        verifyToken: verifyToken,
        token: token,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(getDetails2FARequest());
      },
      onSuccess: (data: TResponseApiType) => {
        if (data.Success) {
          dispatch(getDetails2FASuccess(data as TResponseApiType));
        } else {
          dispatch(getDetails2FAFailure(data as TResponseApiType));
        }
      },
    }
  );
};
