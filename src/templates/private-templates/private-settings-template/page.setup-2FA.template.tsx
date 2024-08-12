import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { useDetails2FAMutation } from "../../../api/mutations/private-mutation/settings/setup-2FA-details-2FA.mutation";
import { useEffect } from "react";
import { TBodyApiType } from "../../../api/models/api.body.model";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/redux-index";
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import PrivateSetup2FAPreffered2FAMethodPageComponent from "./components/setup-2FA-component/page.preffered-2FA-method.component";
import PrivateSetup2FADecalaration2FAPageComponent from "./components/setup-2FA-component/page.decalaration-2FA.component";
import PrivateSetup2FAPasswordlessSignInPasskeyPageComponent from "./components/setup-2FA-component/page.passwordless-signin-passkey.component";
import PrivateSetup2FAMethodPageComponent from "./components/setup-2FA-component/page.2FA-method.component";

const PrivateSettingSetup2FAPageTemplate = () => {
  const mutate = useDetails2FAMutation();
  useEffect(() => {
    mutate.mutate({
      verifyToken: "123",
      token: localStorage.getItem("token"),
    } as TBodyApiType);
  }, []);
  const details2FA = useSelector(
    (state: RootState) => state.privateSettingState.setup2FA.getDetails2FA
  );
  const data2FA = (details2FA as TStateResponseApiType).data?.Data;
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full mt-3 md:mt-1">
        <CustomLabel className="text-xl font-display">
          Setup Two-factor authentication
        </CustomLabel>
      </div>
      <div>
        <PrivateSetup2FADecalaration2FAPageComponent />
      </div>
      <div>
        <PrivateSetup2FAPreffered2FAMethodPageComponent
          preffered2FAMethod={data2FA?.userPreffered2FAApp as string}
        />
      </div>
      <div>
        <PrivateSetup2FAPasswordlessSignInPasskeyPageComponent
          passkey={data2FA?.userPassKey as string}
        />
      </div>
      <div>
        <PrivateSetup2FAMethodPageComponent data2FA={data2FA} />
      </div>
    </div>
  );
};

export default PrivateSettingSetup2FAPageTemplate;
