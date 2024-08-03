import React, { useEffect, useState } from "react";

const Popup = () => {
  const [macAddress, setMacAddress] = useState("");

  useEffect(() => {
    chrome.runtime.sendMessage({ action: "getMacAddress" }, (response) => {
      setMacAddress(response.macAddress);
    });
  }, []);
  return (
    <div>
      <h1>Your MAC Address</h1>
      <p>{macAddress}</p>
    </div>
  );
};

export default Popup;
