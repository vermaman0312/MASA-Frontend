import { X } from "lucide-react";
import React from "react";
import { CustomLabel } from "../custom-label/custom-label.component";

type props = {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

const CustomDialogBox2 = ({
  title,
  isOpen,
  onClose,
  children,
}: props) => {
  return isOpen ? (
    <div className="w-screen h-screen absolute top-0 left-0 bg-gray-500 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="w-full md:w-[30%] bg-white rounded-3xl p-4 animate-zoomIn shadow-2xl border">
        <div className="w-full flex items-center justify-between gap-2">
          <CustomLabel className="font-display text-xl text-gray-500">
            {title}
          </CustomLabel>
          <X
            onClick={onClose}
            className="text-white border rounded-lg bg-red-500 cursor-pointer"
          />
        </div>
        <div className="w-full mt-5">{children}</div>
      </div>
    </div>
  ) : null;
};

export default CustomDialogBox2;
