import { TResponseBodyApiType } from "../../../api/models/api.reasponse.body.model";
import PrivateProfileCardPageComponent from "./components/page.profile-card.component";
import PrivateProfileCardDetailsPageComponent from "./components/page.profile-card-details.component";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { ShieldCheck } from "lucide-react";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import PrivateProfileFriendMentorPageComponent from "./components/page.profile-friend-mentor.component";
import "../../../css/scroll-container.css";

type props = {
  profileData?: TResponseBodyApiType;
};

const PrivateProfilePageTemplate = ({ profileData }: props) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-1">
      <div className="w-full md:w-[30rem] md:h-full flex flex-col md:scroll-container">
        <div>
          <PrivateProfileCardPageComponent
            userName={`${profileData?.userFirstName} ${profileData?.userLastName}`}
            userGender={profileData?.userGender}
            userRole={profileData?.userRole}
            userProfileImage={profileData?.userProfileImage}
          />
        </div>
        <div>
          <PrivateProfileCardDetailsPageComponent
            userEmailAddress={profileData?.userEmailAddress}
            userPhoneNumber={`+${profileData?.userCountryCode}-${profileData?.userPhoneNumber}`}
            userDepartment={profileData?.userDepartment}
            userBranch={profileData?.userBranch}
            userDesignation={profileData?.userDesignation}
            userFaculty={profileData?.userFaculty}
            userAdmissionDate={profileData?.userAddmissionDate}
            userJoiningDate={profileData?.userJoiningDate}
            userRole={profileData?.userRole}
          />
        </div>
      </div>
      <div className="h-full w-full flex items-start flex-col md:flex-row p-1 gap-2">
        <div className="w-full">
          <div className="border w-full border-green-300 bg-green-200 rounded-lg p-2 flex items-start justify-start gap-2">
            <div>
              <ShieldCheck className="w-4 h-4 text-gray-500" />
            </div>
            <CustomLabel className="text-xs font-normal font-display text-gray-500 text-justify">
              Your profile is securely protected with advanced security
              measures. We use enhanced authentication and encryption to
              safeguard your personal information. Access is restricted to
              authorized users only, ensuring your data remains confidential. If
              you have any concerns about your profile's security, please
              contact support. Your safety and privacy are our top priorities.
            </CustomLabel>
          </div>

          <div className="mt-5 w-full grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="w-full border shadow-sm rounded-lg p-4 flex flex-col">
              <div>
                <CustomLabel className="text-lg font-display font-semibold text-gray-500">
                  My Personal Information
                </CustomLabel>
              </div>
              <div className="w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mt-2" />
              <div className="flex-grow mt-2">
                <div className="flex">
                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Date of Birth:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="db"
                      type="text"
                      value={
                        profileData?.userDateOfBirth
                          ? new Date(
                              profileData.userDateOfBirth
                            ).toLocaleDateString()
                          : ""
                      }
                    />
                  </div>
                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Gender:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userGender}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <CustomLabel
                    className="font-medium text-xs font-display text-[#0d1b2a]"
                    htmlFor="email"
                  >
                    Blood Group:
                  </CustomLabel>
                  <CustomInputField
                    disabled
                    id="email"
                    type="text"
                    value={profileData?.userBloodGroup}
                  />
                </div>
                <div className="flex">
                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Father's Name:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userFatherName}
                    />
                  </div>

                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Father's Occupation:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userFatherOccupation}
                    />
                  </div>
                </div>

                <div className="flex">
                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Mother's Name:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userMotherName}
                    />
                  </div>

                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Mother's Occupation:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userMotherOccupation}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border shadow-sm rounded-lg p-4 flex flex-col">
              <div>
                <CustomLabel className="text-lg font-display font-semibold text-gray-500">
                  Other Information
                </CustomLabel>
              </div>
              <div className="w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mt-2" />
              <div className="flex-grow mt-2">
                <div className="w-full">
                  <CustomLabel
                    className="font-medium text-xs font-display text-[#0d1b2a]"
                    htmlFor="email"
                  >
                    Address-I:
                  </CustomLabel>
                  <CustomInputField
                    disabled
                    id="email"
                    type="text"
                    value={profileData?.userAddress1}
                  />
                </div>
                <div className="w-full">
                  <CustomLabel
                    className="font-medium text-xs font-display text-[#0d1b2a]"
                    htmlFor="email"
                  >
                    Address-II:
                  </CustomLabel>
                  <CustomInputField
                    disabled
                    id="email"
                    type="text"
                    value={profileData?.userAddress2}
                  />
                </div>
                <div className="w-full">
                  <CustomLabel
                    className="font-medium text-xs font-display text-[#0d1b2a]"
                    htmlFor="email"
                  >
                    State:
                  </CustomLabel>
                  <CustomInputField
                    disabled
                    id="email"
                    type="text"
                    value={profileData?.userState}
                  />
                </div>
                <div className="flex">
                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Country
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userCountry}
                    />
                  </div>
                  <div className="w-full">
                    <CustomLabel
                      className="font-medium text-xs font-display text-[#0d1b2a]"
                      htmlFor="email"
                    >
                      Pin Code:
                    </CustomLabel>
                    <CustomInputField
                      disabled
                      id="email"
                      type="text"
                      value={profileData?.userPinCode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <PrivateProfileFriendMentorPageComponent />
        </div>
      </div>
    </div>
  );
};

export default PrivateProfilePageTemplate;
