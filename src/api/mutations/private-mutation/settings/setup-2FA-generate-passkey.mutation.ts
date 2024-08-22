import { useMutation } from "react-query";
import { generatePasskeyApi } from "../../../api/private-api/settings/setup-2FA-generate-passkey.api";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";
import { useDetails2FAMutation } from "./setup-2FA-details-2FA.mutation";
import { customGetCookies } from "../../../../utils/custom-cookies/custom-cookies.util";

export const useGeneratePasskeyMutation = () => {
  const mutate = useDetails2FAMutation();
  const { userToken, deviceToken } = customGetCookies("userAuthToken");

  return useMutation(
    ({ deviceToken, token, userPassKey }: TBodyApiType) =>
      generatePasskeyApi({
        deviceToken: deviceToken,
        token: token,
        userPassKey: userPassKey,
      } as TBodyApiType),
    {
      onMutate: () => {},
      onSuccess: (data: TResponseApiType) => {
        if (data.Success) {
          mutate.mutate({
            deviceToken: deviceToken,
            token: userToken,
          } as TBodyApiType);
          console.log("Generated Passkey Successfully");
        } else {
          console.error(data);
        }
      },
    }
  );
};
