import React from "react";
import { CustomLabel } from "../custom-label/custom-label.component";
import "../../css/scroll-container.css";

type props = {
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
};

const CustomNotificationBody = ({ isOpen, setIsOpen }: props) => {
  return isOpen ? (
    <div className="w-[80%] md:w-[20%] h-[45rem] border absolute right-2 top-24 bg-white shadow-lg z-50 rounded-lg animate-zoomIn p-2 flex flex-col">
      <div>
        <CustomLabel className="text-xl font-display">
          Notifications
        </CustomLabel>
      </div>
      <div className="w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mt-2" />
      <div className="w-full h-full flex flex-col items-center justify-start gap-2 scroll-container pt-2">
        <div className="border w-full p-2 rounded-lg">Aman</div>
      </div>
    </div>
  ) : null;
};

export default CustomNotificationBody;
