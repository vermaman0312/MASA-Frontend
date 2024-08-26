import React, { useCallback, useRef, useState } from "react";
import CustomSignatureName from "../../../../components/custom-signature-name/custom-signature-name.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import CustomMenuDropdown from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";
import { Eye, Pencil } from "lucide-react";

type props = {
  userName?: string;
  userProfileImage?: string;
  userGender?: string;
  userRole?: string;
};

const PrivateProfileCardPageComponent = ({
  userName,
  userProfileImage,
  userGender,
  userRole,
}: props) => {
  const [isView, setIsView] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMenuItemClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Selected file:", file);
      }
    },
    []
  );

  return (
    <div className="w-full h-[10rem] p-1">
      <div className="w-full h-full bg-white rounded-xl shadow-sm shadow-gray-500">
        <CustomSignatureName userName={userName} />
      </div>
      <div className="w-[5rem] h-[5rem] bg-gray-200 rounded-full relative -top-10 left-[5%] shadow-sm shadow-gray-500 z-1 cursor-pointer">
        <CustomMenuDropdown
          buttonComponent={
            <img
              className="w-full h-full rounded-full"
              src={
                userGender?.toLowerCase() === "male"
                  ? userProfileImage
                    ? userProfileImage
                    : "https://randomuser.me/api/portraits/men/16.jpg"
                  : userProfileImage
                  ? userProfileImage
                  : "https://randomuser.me/api/portraits/women/18.jpg"
              }
              alt=""
            />
          }
          marginRight="mr-6"
        >
          <DropdownMenuItem
            onClick={() => setIsView(true)}
            className="hover:bg-gray-100 cursor-pointer"
          >
            <Eye className="mr-2 h-4 w-4" />
            <span className="font-display text-xs">View profile image</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleMenuItemClick}
            className="hover:bg-gray-100 cursor-pointer"
          >
            <Pencil className="mr-2 h-4 w-4" />
            <span className="font-display text-xs">Update profile image</span>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </DropdownMenuItem>
        </CustomMenuDropdown>
      </div>
      <div className="w-full relative -top-16 flex flex-col items-end justify-end">
        <CustomLabel className="font-display text-lg text-gray-500">
          {userName}
        </CustomLabel>
        <CustomLabel className="font-display text-xs text-gray-400">
          {userRole}
        </CustomLabel>
      </div>

      {isView && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsView(false)}
        >
          <img
            src={
              userGender?.toLowerCase() === "male"
                ? userProfileImage
                  ? userProfileImage
                  : "https://randomuser.me/api/portraits/men/1.jpg"
                : userProfileImage
                ? userProfileImage
                : "https://randomuser.me/api/portraits/women/18.jpg"
            }
            alt="Full screen"
            className="object-contain h-48 w-96"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PrivateProfileCardPageComponent;
