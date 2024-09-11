import React, { useCallback, useEffect, useState } from "react";

// Simple styles for the popup
const popupStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "white",
  border: "1px solid black",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const PrivateVMeetOnlineAppTimerClockTimerPageComponent = () => {
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [timerDuration, setTimerDuration] = useState<number>(5000); // Default 5 seconds

  // Function to start the timer
  const startTimer = useCallback(() => {
    // Clear any existing timer
    setIsPopupVisible(false);

    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, timerDuration);

    // Cleanup function to clear the timer when the component unmounts or timerDuration changes
    return () => clearTimeout(timer);
  }, [timerDuration]);

  useEffect(() => {
    // Start the timer when the component mounts or timerDuration changes
    const cleanup = startTimer();

    // Cleanup timer if component unmounts or timerDuration changes
    return cleanup;
  }, [startTimer]);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      <button onClick={() => setTimerDuration(5000)}>Start Timer</button>

      {isPopupVisible && (
        <div style={popupStyle}>
          <p>Time is up!</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PrivateVMeetOnlineAppTimerClockTimerPageComponent;
