import {
  deviceDetailsApiInterface,
  deviceDetailsInterface,
} from "../../models/private-api-models/private-device-details-api.model";

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
}: deviceDetailsApiInterface) => {
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

export const getDeviceDetailsApi = async ({
  verifyToken,
  token,
}: {
  verifyToken: string;
  token: string;
}): Promise<deviceDetailsInterface> => {
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
    return data as deviceDetailsInterface;
  } catch (error) {
    throw error;
  }
};
