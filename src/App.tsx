import { useCallback, useEffect } from "react";
import "./App.css";
import RouteIndex from "./routes/route.index";
import { useDispatch } from "react-redux";
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
} from "./redux/actions/private-actions/private-device-details-action";
import { getDeviceDetails } from "./utils/device-details/get-device-details";
import { useGetUserNameMutation } from "./api/mutations/public-mutation/authentication-get-username-public.mutation";

function App() {
  const dispatch = useDispatch();
  const getPublicUserDetails = useGetUserNameMutation();

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(longitude(position.coords.longitude));
          dispatch(latitude(position.coords.latitude));
        },
        (error) => {
          console.error("Error occurred while retrieving location: ", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    await getDeviceDetails().then((response) => {
      dispatch(browserName(response.browserName));
      dispatch(browserVersion(response.browserVersion));
      dispatch(browserId(response.browserId));
      dispatch(browserOs(response.browserOS));
      dispatch(browserEngine(response.browserEngine));
      dispatch(ipAddress(response.ipAddress));
      dispatch(macAddress(response.macAddress));
      getPublicUserDetails.mutate({
        verifyToken: "123",
        ipAddress: response.ipAddress as string,
      });
    });
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
