import React, { useEffect, useState, useRef } from "react";
import bell_icon from "../../../../../assets/images/bell_icon.png";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";

type Props = {
  isOpen: string;
  setIsOpen: (value: string) => void;
};

const PrivateVMeetOnlineParticipantsPingToStartVideoPopupPageComponent = ({
  isOpen,
  setIsOpen,
}: Props) => {
  const [animationClass, setAnimationClass] = useState<string>("");
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen === "visible") {
      setShowComponent(true);
      setAnimationClass("animate-zoomIn");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setAnimationClass("animate-zoomOut");
        timeoutRef.current = setTimeout(() => {
          setIsOpen("hide");
          setShowComponent(false);
        }, 1000);
      }, 5000);
    } else {
      setAnimationClass("");
      setShowComponent(false);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, setIsOpen]);

  return showComponent ? (
    <div className="w-screen h-screen absolute left-0 top-0 flex items-center justify-center">
      <div
        className={`w-[25rem] h-64 ${animationClass} relative shadow-lg shadow-gray-500 rounded-[35px]`}
      >
        <div className="absolute inset-x-0 top-[-50%] z-10">
          <img src={bell_icon} alt="" className="w-full animate-bounce" />
        </div>
        <div className="p-4 bg-white w-full h-full relative rounded-[35px] flex flex-col items-center justify-center">
          <CustomLabel className="text-xl font-display font-semibold text-blue-600">
            Please open your webcam!
          </CustomLabel>
          <CustomLabel className="text-xl font-display font-semibold text-blue-600">
            🔔🔔🔔
          </CustomLabel>
        </div>
      </div>
    </div>
  ) : null;
};

export default PrivateVMeetOnlineParticipantsPingToStartVideoPopupPageComponent;
