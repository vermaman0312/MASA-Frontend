import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const verifyOtpApi = async ({
  verifyToken,
  token,
  userOTP,
}: TBodyApiType): Promise<TResponseApiType> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_PRIVATE_LOCAL_API_URL}user/2FA/verify/otp-code?token=${verifyToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userOTP: userOTP,
        }),
      }
    );

    const data = await response.json();
    return data as TResponseApiType;
  } catch (error) {
    throw error;
  }
};
