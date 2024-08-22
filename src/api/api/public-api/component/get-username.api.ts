import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const getUserNamePublicApi = async ({
  deviceToken,
  ipAddress,
}: TBodyApiType): Promise<TResponseApiType> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_LOCAL_API_URL}user/fetch/user-details?token=${deviceToken}`,
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
    return data as TResponseApiType;
  } catch (error) {
    throw error;
  }
};
