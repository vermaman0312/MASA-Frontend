export type userDetailsType = {
  verifyToken: string;
  token: string;
  userId?: string;
};

export type userDetailsAPIResponseType = {
  userId?: string;
  userUniqueId?: string;
  userFirstName?: string;
  userLastName?: string;
  userProfileImage?: string;
  userGender?: string;
  userDateOfBirth?: string;
  userAddress1?: string;
  userAddress2?: string;
  userCountry?: string;
  userState?: string;
  userPinCode?: string;
  userDocuments?: string;
  userFatherName?: string;
  userMotherName?: string;
  userFatherOccupation?: string;
  userMotherOccupation?: string;
  userLocalGuardianName?: string;
  userBloodGroup?: string;
  userEmailAddress?: string;
  userCountryCode?: string;
  userPhoneNumber?: string;
  userDepartment?: string;
  userBranch?: string;
  userFaculty?: string;
  userAddmissionDate?: string;
  userDesignation?: string;
  userJoiningDate?: string;
  userRole?: string;
};

export type userDetailsResponseType = {
  Type: string;
  Success: boolean;
  Status: number;
  Message: string;
  Data?: userDetailsAPIResponseType;
};

export interface userDetailsResponseInterface {
  loading: boolean;
  error: userDetailsResponseType | null;
  data: userDetailsResponseType | null;
}
