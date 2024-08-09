import { check2FAInterface } from "../../../models/public-api-models/public-authentication-login-api.model";

export const userCheck2FA = async ({
  verifyToken,
  token,
}: check2FAInterface) => {
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
    return data;
  } catch (error) {
    throw error;
  }
};
