import { useEffect } from "react";
import WifiSignalIllustration from "../../../../assets/illustrations/wifi-signal.illustration";

type props = {
  isSlowNetwork: boolean;
  setIsSlowNetwork: (isSlowNetwork: boolean) => void;
};

const PrivateVMeetOnlineNetworkCheckPageComponent = ({
  isSlowNetwork,
  setIsSlowNetwork,
}: props) => {
  useEffect(() => {
    const checkNetworkStatus = () => {
      if ((navigator as any).connection) {
        const connection =
          (navigator as any).connection ||
          (navigator as any).mozConnection ||
          (navigator as any).webkitConnection;
        const { effectiveType } = connection;
        setIsSlowNetwork(effectiveType === "2g" || effectiveType === "3g");
      } else {
        setIsSlowNetwork(false);
      }
    };
    checkNetworkStatus();
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;
    if (connection) {
      connection.addEventListener("change", checkNetworkStatus);
    }
    const intervalId = setInterval(checkNetworkStatus, 2000);
    return () => {
      if (connection) {
        connection.removeEventListener("change", checkNetworkStatus);
      }
      clearInterval(intervalId);
    };
  }, [setIsSlowNetwork]);

  return isSlowNetwork ? (
    <div className="w-screen h-screen bg-[#101826] absolute top-0 left-0 bg-opacity-50 flex items-center justify-center">
      <WifiSignalIllustration />
    </div>
  ) : null;
};

export default PrivateVMeetOnlineNetworkCheckPageComponent;
