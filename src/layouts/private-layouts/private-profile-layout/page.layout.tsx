import { useSelector } from "react-redux";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomSignatureName from "../../../components/custom-signature-name/custom-signature-name.component";
import { RootState } from "../../../redux/redux-index";
import { TStateResponseApiType } from "../../../api/models/api.state.response.model";

const PrivateProfilePageLayout = () => {
  const profileDetails = useSelector(
    (state: RootState) => state.privateProfileState.profileDetails
  );
  const profileData = (profileDetails as TStateResponseApiType).data?.Data;

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-1">
        <div className="h-full w-full md:w-[30rem] flex flex-col">
          <div className="w-full h-[10rem] p-1">
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-gray-500">
              <CustomSignatureName userName="Aman Verma" />
            </div>
            <div className="w-[5rem] h-[5rem] bg-gray-200 rounded-full relative -top-8 left-[5%] shadow-md shadow-gray-500 z-1">
              <img
                className="w-full h-full rounded-full"
                src={
                  profileData?.userGender?.toLowerCase() === "male"
                    ? profileData?.userProfileImage
                      ? profileData?.userProfileImage
                      : "https://randomuser.me/api/portraits/men/1.jpg"
                    : profileData?.userProfileImage
                    ? profileData?.userProfileImage
                    : "https://randomuser.me/api/portraits/women/18.jpg"
                }
                alt=""
              />
            </div>
            <div className="w-full relative -top-16 flex flex-col items-end justify-end">
              <CustomLabel className="font-display text-lg text-gray-500">
                {`${profileData?.userFirstName} ${profileData?.userLastName}`}
              </CustomLabel>
              <CustomLabel className="font-display text-xs text-gray-400">
                {profileData?.userRole}
              </CustomLabel>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-start mt-16">
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Email address
              </CustomLabel>
              <CustomInputField
                disabled
                id="email"
                type="text"
                value={profileData?.userEmailAddress}
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Phone number
              </CustomLabel>
              <CustomInputField
                disabled
                id="phoneNumber"
                type="text"
                value={
                  profileData?.userPhoneNumber
                    ? `${profileData?.userCountryCode}-${profileData?.userPhoneNumber}`
                    : "N/A"
                }
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Department
              </CustomLabel>
              <CustomInputField
                disabled
                id="department"
                type="text"
                value={
                  profileData?.userDepartment
                    ? profileData?.userDepartment
                    : "N/A"
                }
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Branch
              </CustomLabel>
              <CustomInputField
                disabled
                id="branch"
                type="text"
                value={
                  profileData?.userBranch ? profileData?.userBranch : "N/A"
                }
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Faculty
              </CustomLabel>
              <CustomInputField
                disabled
                id="faculty"
                type="text"
                value={
                  profileData?.userFaculty ? profileData?.userFaculty : "N/A"
                }
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Designation
              </CustomLabel>
              <CustomInputField
                disabled
                id="designation"
                type="text"
                value={
                  profileData?.userRole?.toLowerCase() === "student"
                    ? "Student"
                    : profileData?.userDesignation
                    ? profileData?.userDesignation
                    : "N/A"
                }
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                Joining date
              </CustomLabel>
              <CustomInputField
                disabled
                id="date"
                type="text"
                value={
                  profileData?.userRole?.toLowerCase() === "student"
                    ? profileData.userAddmissionDate
                      ? profileData.userAddmissionDate
                      : "N/A"
                    : profileData?.userJoiningDate
                    ? profileData?.userJoiningDate
                    : "N/A"
                }
              />
            </div>
          </div>
        </div>
        <div className="border h-full w-full"></div>
      </div>
    </div>
  );
};

export default PrivateProfilePageLayout;
