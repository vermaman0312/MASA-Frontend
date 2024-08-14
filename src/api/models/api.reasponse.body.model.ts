// import {
//   keyof,
//   number,
//   string,
//   type,
//   TypeOf,
//   union,
//   nullType,
//   array,
//   undefined as undefinedType,
// } from "io-ts";

// export const TResponseType = type({
//   // id: number,
//   // first_name: string,
//   // last_name: string,
//   // email: union([string, nullType]),
//   // unverified_email: string,
//   // phone_number: union([string, nullType]),
//   // model_name: string,
//   // status: keyof({
//   //   invitation_sent: null,
//   //   active: null,
//   //   blocked: null,
//   // }),
//   browserName: union([string, undefinedType]),
//   browserVersion: union([string, undefinedType]),
//   browserId: union([string, undefinedType]),
//   browserOS: union([string, undefinedType]),
//   browserEngine: union([string, undefinedType]),
//   ipAddress: union([string, undefinedType]),
//   macAddress: union([string, undefinedType]),
//   longitude: union([string, undefinedType]),
//   latitude: union([string, undefinedType]),
//   timeStamps: union([string, undefinedType]),
//   userId: union([string, undefinedType]),
//   userUniqueId: union([string, undefinedType]),
//   userFirstName: union([string, undefinedType]),
//   userLastName: union([string, undefinedType]),
//   userProfileImage: union([string, undefinedType]),
//   userGender: union([string, undefinedType]),
//   userDateOfBirth: union([string, undefinedType]),
//   userAddress1: union([string, undefinedType]),
//   userAddress2: union([string, undefinedType]),
//   userCountry: union([string, undefinedType]),
//   userState: union([string, undefinedType]),
//   userPinCode: union([string, undefinedType]),
//   userDocuments: union([string, undefinedType]),
//   userFatherName: union([string, undefinedType]),
//   userMotherName: union([string, undefinedType]),
//   userFatherOccupation: union([string, undefinedType]),
//   userMotherOccupation: union([string, undefinedType]),
//   userLocalGuardianName: union([string, undefinedType]),
//   userBloodGroup: union([string, undefinedType]),
//   userEmailAddress: union([string, undefinedType]),
//   userCountryCode: union([string, undefinedType]),
//   userPhoneNumber: union([string, undefinedType]),
//   userDepartment: union([string, undefinedType]),
//   userBranch: union([string, undefinedType]),
//   userFaculty: union([string, undefinedType]),
//   userAddmissionDate: union([string, undefinedType]),
//   userDesignation: union([string, undefinedType]),
//   userJoiningDate: union([string, undefinedType]),
//   userRole: union([string, undefinedType]),
//   user2FAId: union([string, undefinedType]),
//   userIs2FA: union([string, undefinedType]),
//   userPassKey: union([string, undefinedType]),
//   userPreffered2FAApp: union([string, undefinedType]),
//   user2FAMethod: {
//     userAuthenticatorApp: union([string, undefinedType]),
//     userTextSMS: union([string, undefinedType]),
//   },
//   userSecurityKey: union([string, undefinedType]),
//   userRecoveryCode: union([string, undefinedType]),
//   qrKey: union([string, undefinedType]),
//   qrImage: union([string, undefinedType]),
// });

// export type TResponseBodyApiType = TypeOf<typeof TResponseType>;

export type TResponseBodyApiType = {
  browserName?: string;
  browserVersion?: string;
  browserId?: string;
  browserOS?: string;
  browserEngine?: string;
  ipAddress?: string;
  macAddress?: string;
  longitude?: number;
  latitude?: number;
  timeStamps?: Date;
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
  user2FAId?: string;
  userIs2FA?: boolean;
  userPassKey?: string;
  userPreffered2FAApp?: string;
  user2FAMethod?: {
    userAuthenticatorApp?: boolean;
    userTextSMS?: boolean;
  };
  userSecurityKey?: string;
  userRecoveryCode?: string;
  qrKey?: string;
  qrImage?: string;
};
