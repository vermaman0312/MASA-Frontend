import { useEffect } from "react";

const PrivateVMeetOnlineJoiningSoundPageComponent = () => {
  useEffect(() => {
    const audio = new Audio("/assets/sounds/joining_meeting.mp3");
    audio.play().catch((error) => {
      console.error("Error playing the sound:", error);
    });
  }, []);
  return null;
};

export default PrivateVMeetOnlineJoiningSoundPageComponent;
