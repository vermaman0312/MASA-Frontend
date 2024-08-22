// cookieUtils.ts
export const customSetCookies = (
  name: string,
  value: string,
  days: number = 7
): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  const expiresString = `expires=${expires.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expiresString}; path=/`;
};

export const customGetCookies = (name: string) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nameEQ) === 0) {
      return {
        userToken: c.substring(nameEQ.length, c.length),
        deviceToken: "123",
      };
    }
  }
  return {
    userToken: null,
    deviceToken: null,
  };
};

export const customRemoveCookies = (name: string): void => {
  const expires = new Date(0);
  document.cookie = `${name}=; expires=${expires.toUTCString()}; path=/`;
};
