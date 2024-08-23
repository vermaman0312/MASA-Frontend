import { useSelector } from "react-redux";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomSignatureName from "../../../components/custom-signature-name/custom-signature-name.component";
import { RootState } from "../../../redux/redux-index";
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";
import PrivateProfilePageTemplate from "../../../templates/private-templates/private-profile-template/page.template";

const PrivateProfilePageLayout = () => {
  const profileDetails = useSelector(
    (state: RootState) => state.privateProfileState.profileDetails
  );
  const profileData = (profileDetails as TStateResponseApiType).data?.Data;

  return (
    <div className="w-full h-full">
      <PrivateProfilePageTemplate profileData={profileData} />
    </div>
  );
};

export default PrivateProfilePageLayout;
