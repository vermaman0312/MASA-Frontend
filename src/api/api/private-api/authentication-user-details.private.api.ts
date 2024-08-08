import {
  userDetailsResponseType,
  userDetailsType,
} from "../../models/private-api-models/private-user-details-api.model";

export const userDetailsAPI = async ({
  verifyToken,
  token,
  userId,
}: userDetailsType): Promise<userDetailsResponseType> => {
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
    return data as userDetailsResponseType;
  } catch (error) {
    throw error;
  }
};
