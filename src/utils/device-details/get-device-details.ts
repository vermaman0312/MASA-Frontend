interface ILocationType {
  latitude: number;
  longitude: number;
}

interface DeviceDetails {
  browserName: string;
  browserVersion: string;
  browserId: string;
  browserOS: string;
  browserEngine: string;
  ipAddress: string;
  macAddress: string;
  location: ILocationType;
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
  let location = {
    longitude: 0,
    latitude: 0,
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      location.latitude = position.coords.latitude;
      location.longitude = position.coords.longitude;
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  return {
    browserName,
    browserVersion,
    browserId,
    browserOS,
    browserEngine,
    ipAddress,
    macAddress,
    location,
  };
};
