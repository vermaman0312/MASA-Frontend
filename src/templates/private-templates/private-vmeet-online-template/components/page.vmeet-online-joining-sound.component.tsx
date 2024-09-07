import { useEffect } from "react";

const PrivateVMeetOnlineJoiningSoundPageComponent = () => {
  useEffect(() => {
    const audio = new Audio("/path/to/your/meeting-sound.mp3");
    audio.play().catch((error) => {
      console.error("Error playing the sound:", error);
    });
  }, []);

  // This component does not render anything
  return null;
};

export default PrivateVMeetOnlineJoiningSoundPageComponent;
