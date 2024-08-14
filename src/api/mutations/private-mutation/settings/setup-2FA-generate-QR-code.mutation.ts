import { useMutation } from "react-query";
import { generateQRCodeSetup2FAApi } from "../../../api/private-api/settings/setup-2FA-generate-QR-code.api";
import { TBodyApiType } from "../../../models/api.body.model";
import { useDispatch } from "react-redux";
import {
  generateQRCodeRequest,
  generateQRCodeSuccess,
} from "../../../../redux/actions/private-actions/private.settings.action";
import { TResponseApiType } from "../../../models/api.response.model";

export const useGenerateQRSetup2FAMutation = () => {
  const dispatch = useDispatch();
  return useMutation(
    ({ verifyToken, token }: TBodyApiType) =>
      generateQRCodeSetup2FAApi({
        verifyToken: verifyToken,
        token: token,
      } as TBodyApiType),
    {
      onMutate: () => {
        dispatch(generateQRCodeRequest());
      },
      onSuccess: (data: TResponseApiType) => {
        dispatch(generateQRCodeSuccess(data as TResponseApiType));
      },
    }
  );
};
