import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const getDeviceDetailsApi = async ({
  verifyToken,
  token,
}: TBodyApiType): Promise<TResponseApiType> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PRIVATE_LOCAL_API_URL}user/fetch/device-details?token=${verifyToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data as TResponseApiType;
  } catch (error) {
    throw error;
  }
};
