import {
  profileDetailsResponseType,
  profileDetailsType,
} from "../../models/private-api-models/private-profile-details-api.model";

export const userDetailsAPI = async ({
  verifyToken,
  token,
  userId,
}: profileDetailsType): Promise<profileDetailsResponseType> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PRIVATE_LOCAL_API_URL}user/fetch/user-details?token=${verifyToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: userId }),
      }
    );
    const data = await response.json();
    return data as profileDetailsResponseType;
  } catch (error) {
    throw error;
  }
};
