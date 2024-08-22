import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const updateUserIs2FAApi = async ({
  deviceToken,
  token,
  userIs2FA,
}: TBodyApiType): Promise<TResponseApiType> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PRIVATE_LOCAL_API_URL}user/update/2FA?token=${deviceToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userIs2FA: userIs2FA,
        }),
      }
    );
    const data = await response.json();
    return data as TResponseApiType;
  } catch (error) {
    throw error;
  }
};
