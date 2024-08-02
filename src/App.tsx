import { useCallback, useEffect } from "react";
import "./App.css";
import RouteIndex from "./routes/route.index";
import { useDispatch } from "react-redux";
import { getDeviceDetails } from "./utils/device-details/get-device-details";
import {
  browserEngine,
  browserId,
  browserName,
  browserOs,
  browserVersion,
  ipAddress,
  latitude,
  longitude,
  macAddress,
} from "./redux/actions/public-actions/public-component-device-details.action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const fetchDetails = useCallback(async () => {
    const deviceDetails = await getDeviceDetails();
    dispatch(browserName(deviceDetails.browserName));
    dispatch(browserVersion(deviceDetails.browserVersion));
    dispatch(browserId(deviceDetails.browserId));
    dispatch(browserOs(deviceDetails.browserOS));
    dispatch(browserEngine(deviceDetails.browserEngine));
    dispatch(ipAddress(deviceDetails.ipAddress));
    dispatch(macAddress(deviceDetails.macAddress));
    dispatch(longitude(deviceDetails.location.longitude));
    dispatch(latitude(deviceDetails.location.latitude));
  }, [dispatch]);
  useEffect(() => {
    fetchDetails();
  }, [dispatch, fetchDetails]);

  return (
    <div className="flex items-center flex-col justify-center h-screen w-screen">
      <RouteIndex />
    </div>
  );
}

export default App;
