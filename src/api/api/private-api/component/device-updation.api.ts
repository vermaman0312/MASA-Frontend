import { TBodyApiType } from "../../../models/api.body.model";

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
}: TBodyApiType) => {
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
    const data = response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
