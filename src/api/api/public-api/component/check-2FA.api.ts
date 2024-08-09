import { TBodyApiType } from "../../../models/api.body.model";
import { TResponseApiType } from "../../../models/api.response.model";

export const userCheck2FA = async ({
  verifyToken,
  token,
}: TBodyApiType): Promise<TResponseApiType> => {
  try {
    const response = await fetch(
      `http://localhost:7005/api/v1/private/auth/user/check-2FA?token=${verifyToken}`,
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
