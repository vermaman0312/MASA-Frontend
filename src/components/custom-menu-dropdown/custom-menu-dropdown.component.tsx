import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "./custom-menu-dropdown.ui";

type props = {
  className?: string;
  buttonComponent?: ReactNode | string;
  children?: ReactNode;
  width?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
};

const CustomMenuDropdown = ({
  className,
  buttonComponent,
  children,
  width,
  marginTop,
  marginLeft,
  marginRight,
}: props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={className}>{buttonComponent}</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${width} ${marginRight} ${marginLeft} ${marginTop} z-50 text-[#0d1b2a] rounded-xl`}
      >
        <DropdownMenuGroup>{children}</DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomMenuDropdown;
