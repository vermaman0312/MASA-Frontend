export const privateApiheader = (method: string, token: string) => {
  return {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
