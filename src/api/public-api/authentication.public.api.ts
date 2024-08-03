// Login api function
export const userLoginApi = async ({
  userEmailAddress,
  userPassword,
  token,
}: {
  userEmailAddress: string;
  userPassword: string;
  token: string;
}) => {
  try {
    const response = await fetch(
      `http://localhost:7005/api/v1/public/auth/user/login?token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmailAddress, userPassword }),
      }
    );
    if (response.status !== 200) {
      throw new Error("HTTP error!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
