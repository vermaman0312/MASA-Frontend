import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const updateDeviceDetailsApi = async ({
  verifyToken,
  token,
  browserName,
  browserVersion,
  browserId,
  browserOS,
  browserEngine,
  ipAddress,
  macAddress,
  longitude,
  latitude,
}: TBodyApiType): Promise<TResponseApiType> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PRIVATE_LOCAL_API_URL}user/update/device-details?token=${verifyToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          browserName: browserName ? browserName : undefined,
          browserVersion: browserVersion ? browserVersion : undefined,
          browserId: browserId ? browserId : undefined,
          browserOS: browserOS ? browserOS : undefined,
          browserEngine: browserEngine ? browserEngine : undefined,
          ipAddress: ipAddress ? ipAddress : undefined,
          macAddress: macAddress ? macAddress : undefined,
          longitude: longitude ? longitude : undefined,
          latitude: latitude ? latitude : undefined,
        }),
      }
    );
    const data = await response.json();
    return data as TResponseApiType;
  } catch (error) {
    throw error;
  }
};
