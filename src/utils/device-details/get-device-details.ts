interface DeviceDetails {
  browserName: string;
  browserVersion: string;
  browserId: string;
  browserOS: string;
  browserEngine: string;
  ipAddress: string;
  macAddress: string;
}

const getPublicIpAddress = async (): Promise<string> => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "";
  }
};

export const getDeviceDetails = async (): Promise<DeviceDetails> => {
  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;
  const browserId = navigator.userAgent;
  const browserOS = navigator.platform;
  const browserEngine = navigator.product;
  const ipAddress = await getPublicIpAddress();
  let macAddress = "";

  // chrome.runtime.sendMessage(
  //   "abcdefghijklmnopabcdefghijklmnop",
  //   { message: "version 1.0" },
  //   (response) => {
  //     if (chrome.runtime.lastError) {
  //       console.error("Error:", chrome.runtime.lastError.message);
  //       console.log("No extension or unable to connect");
  //       return;
  //     }
  //     if (!response) {
  //       console.log("No extension");
  //       return;
  //     }
  //     console.log("Extension found", response);
  //   }
  // );

  return {
    browserName,
    browserVersion,
    browserId,
    browserOS,
    browserEngine,
    ipAddress,
    macAddress,
  };
};
