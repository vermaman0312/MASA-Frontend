import React from "react";
import { TResponseBodyApiType } from "../../../api/models/api.reasponse.body.model";
import PrivateProfileCardPageComponent from "./components/page.profile-card.component";
import PrivateProfileCardDetailsPageComponent from "./components/page.profile-card-details.component";

type props = {
  profileData?: TResponseBodyApiType;
};

const PrivateProfilePageTemplate = ({ profileData }: props) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-1">
      <div className="w-full md:w-[30rem] flex flex-col">
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
            userPhoneNumber={`${profileData?.userCountryCode} ${profileData?.userPhoneNumber}`}
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
      <div className="h-full w-full">
        <div className="w-full flex flex-wrap items-center justify-between p-1 gap-5 mt-5 md:mt-auto">
          <div className="border w-full md:w-60 h-60 flex items-center justify-center shadow-lg rounded-lg">A</div>
          <div className="border w-full md:w-60 h-60 flex items-center justify-center shadow-lg rounded-lg">A</div>
          <div className="border w-full md:w-60 h-60 flex items-center justify-center shadow-lg rounded-lg">A</div>
          <div className="border w-full md:w-60 h-60 flex items-center justify-center shadow-lg rounded-lg">A</div>
          <div className="border w-full md:w-60 h-60 flex items-center justify-center shadow-lg rounded-lg">A</div>
        </div>
      </div>
    </div>
  );
};

export default PrivateProfilePageTemplate;
