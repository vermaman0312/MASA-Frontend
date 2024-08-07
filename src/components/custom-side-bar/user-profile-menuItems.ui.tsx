import React, { useCallback } from "react";
import CustomMenuDropdown from "../custom-menu-dropdown/custom-menu-dropdown.component";
import CustomAvatar from "../custom-avatar/custom-avatar.component";
import { DropdownMenuItem } from "../custom-menu-dropdown/custom-menu-dropdown.ui";
import { FilePenLine, LogOut, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserProfileMenuItems = () => {
  const navigate = useNavigate();
  const token = "123";
  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/login");
    return;
  }, [navigate]);
  return (
    <div className="flex items-center hidden md:flex">
      <CustomMenuDropdown
        buttonComponent={
          <CustomAvatar
            src="https://github.com/shadcn.png"
            title="Aman Verma"
          />
        }
        marginRight="mr-6"
      >
        <DropdownMenuItem
          onClick={() => {
            navigate(`/user/auth/profile?token=${token}`);
          }}
          className="hover:bg-gray-100 cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            navigate(`/user/auth/settings?token=${token}`);
          }}
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4 text-red-500" />
          <span className="font-display text-xs text-red-500">Logout</span>
        </DropdownMenuItem>
      </CustomMenuDropdown>
    </div>
  );
};

export default UserProfileMenuItems;
