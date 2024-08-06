import {
  getUserNameInterface,
  ResponseType,
} from "../../models/public-api-models/public-get-username-api.model";

export const getUserNamePublicApi = async ({
  verifyToken,
  ipAddress,
}: getUserNameInterface) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_LOCAL_API_URL}user/fetch/user-details?token=${verifyToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ipAddress: ipAddress,
        }),
      }
    );
    const data = await response.json();
    return data as ResponseType;
  } catch (error) {
    throw error;
  }
};
