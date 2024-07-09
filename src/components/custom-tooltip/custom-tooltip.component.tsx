import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./custom-tooltip.ui";

type props = {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
};

const CustomToolTip = ({ icon, children, className }: props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent className={className}>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomToolTip;
