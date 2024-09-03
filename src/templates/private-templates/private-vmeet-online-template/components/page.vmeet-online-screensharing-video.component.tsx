import React, { useEffect } from "react";

type props = {
  videoRef: React.RefObject<HTMLVideoElement>;
  stream: MediaStream | null;
};

const PrivateVMeetOnlineScreeSharingVideoPageComponent = ({
  videoRef,
  stream,
}: props) => {
  
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, videoRef]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <video
        ref={videoRef}
        className="border-2 border-[#374151] border-opacity-50 p-1 rounded-xl md:w-[85rem]"
        autoPlay
        playsInline
      />
    </div>
  );
};

export default PrivateVMeetOnlineScreeSharingVideoPageComponent;
