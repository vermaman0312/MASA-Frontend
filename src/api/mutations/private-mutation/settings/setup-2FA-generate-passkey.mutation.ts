import { useMutation } from "react-query";
import { generatePasskeyApi } from "../../../api/private-api/settings/setup-2FA-generate-passkey.api";
import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";
import { useDetails2FAMutation } from "./setup-2FA-details-2FA.mutation";

export const useGeneratePasskeyMutation = () => {
  const mutate = useDetails2FAMutation();

  return useMutation(
    ({ verifyToken, token, userPassKey }: TBodyApiType) =>
      generatePasskeyApi({
        verifyToken: verifyToken,
        token: token,
        userPassKey: userPassKey,
      } as TBodyApiType),
    {
      onMutate: () => {},
      onSuccess: (data: TResponseApiType) => {
        if (data.Success) {
          mutate.mutate({
            verifyToken: "123",
            token: localStorage.getItem("token"),
          } as TBodyApiType);
          console.log("Generated Passkey Successfully");
        } else {
          console.error(data);
        }
      },
    }
  );
};
