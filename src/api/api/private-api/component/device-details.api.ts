import { deviceDetailsInterface } from "../../../models/private-api-models/private-device-details-api.model";

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
