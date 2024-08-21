import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { useDetails2FAMutation } from "../../../api/mutations/private-mutation/settings/setup-2FA-details-2FA.mutation";
import { useCallback, useEffect, useState } from "react";
import { TBodyApiType } from "../../../api/models/api.body.model";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-index";
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import PrivateSetup2FAPreffered2FAMethodPageComponent from "./components/setup-2FA-component/page.preffered-2FA-method.component";
import PrivateSetup2FADecalaration2FAPageComponent from "./components/setup-2FA-component/page.decalaration-2FA.component";
import PrivateSetup2FAPasswordlessSignInPasskeyPageComponent from "./components/setup-2FA-component/page.passwordless-signin-passkey.component";
import PrivateSetup2FAMethodPageComponent from "./components/setup-2FA-component/page.2FA-method.component";
import { generate2FAPasskey } from "../../../utils/generate-2FA-passkey/generate-passkey";
import PrivateSetup2FAPasswordlessSignInPasskeyGenerateKeyPageComponent from "./components/setup-2FA-component/page.passwordless-signin-passkey-generate-key.component";
import Private2FAGeneratingQRCodeVerifyOTPPageComponent from "./components/setup-2FA-component/page.2FA-genrate-qr-verify-otp.component";
import Private2FAEnablePageComponent from "./components/setup-2FA-component/page.2FA-enable-2FA.component";
import { useSetup2FAUpdate2FAMutation } from "../../../api/mutations/private-mutation/settings/setup.-2FA-update-2FA.mutation";
import { Loader } from "lucide-react";

const PrivateSettingSetup2FAPageTemplate = () => {
  const [isPasskeyOpen, setIsPasskeyOpen] = useState<boolean>(false);
  const newPasskey = generate2FAPasskey(
    localStorage.getItem("token") as string
  );
  const { mutate, isLoading } = useDetails2FAMutation();
  const update2FAMutate = useSetup2FAUpdate2FAMutation();
  useEffect(() => {
    mutate({
      verifyToken: "123",
      token: localStorage.getItem("token"),
    } as TBodyApiType);
  }, []);
  const details2FA = useSelector(
    (state: RootState) => state.privateSettingState.setup2FA.getDetails2FA
  );
  const data2FA = (details2FA as TStateResponseApiType).data?.Data;

  const handleUpdate2FA = useCallback(() => {
    update2FAMutate.mutate({
      verifyToken: "123",
      token: localStorage.getItem("token"),
      userIs2FA: true,
    } as TBodyApiType);
  }, [update2FAMutate]);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  ) : (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full mt-3 md:mt-1">
        <CustomLabel className="text-xl font-display">
          Setup Two-factor authentication
        </CustomLabel>
      </div>
      <div>
        <PrivateSetup2FADecalaration2FAPageComponent />
      </div>
      {!data2FA?.userPassKey && (
        <div>
          <PrivateSetup2FAPasswordlessSignInPasskeyPageComponent
            setIsOpen={setIsPasskeyOpen}
          />
        </div>
      )}

      {!data2FA?.userIs2FA && (
        <div>
          <Private2FAEnablePageComponent onClick={handleUpdate2FA} />
        </div>
      )}

      {data2FA?.userIs2FA && !data2FA.userIs2FASetupCompleted && (
        <div>
          <Private2FAGeneratingQRCodeVerifyOTPPageComponent />
        </div>
      )}

      {data2FA?.userIs2FA && data2FA.userIs2FASetupCompleted && (
        <div>
          <PrivateSetup2FAPreffered2FAMethodPageComponent
            preffered2FAMethod={data2FA?.userPreffered2FAApp as string}
          />
        </div>
      )}
      {data2FA?.userIs2FA && data2FA.userIs2FASetupCompleted && (
        <div>
          <PrivateSetup2FAMethodPageComponent
            data2FA={data2FA}
            onClickViewPasskey={() => setIsPasskeyOpen(true)}
          />
        </div>
      )}

      {/* DIALOG BOX */}
      <div>
        <PrivateSetup2FAPasswordlessSignInPasskeyGenerateKeyPageComponent
          passkey={data2FA?.userPassKey as string}
          newPasskey={newPasskey as string}
          isOpen={isPasskeyOpen}
          setIsOpen={setIsPasskeyOpen}
          userUniqueId={data2FA?.userUniqueId as string}
        />
      </div>
    </div>
  );
};

export default PrivateSettingSetup2FAPageTemplate;
