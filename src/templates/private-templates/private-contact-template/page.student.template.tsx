import { Search } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import ContactIllustration from "../../../assets/illustrations/contact-illustration";
import { getRandomColor } from "../../../themes/color";
import CustomAvatar from "../../../components/custom-avatar/custom-avatar.component";

type props = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PrivateContactHeadingPageTemplate = ({
  value,
  onChange,
}: props) => {
  return (
    <div className="flex items-center justify-center gap-1 p-2 border rounded-full">
      <input
        type="text"
        className="w-full outline-none border-none ml-1 font-display text-xs"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <Search className="w-5 h-5" />
    </div>
  );
};

export const PrivateContactNotFoundPageTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center transition-all">
      <div className="w-[18rem]">
        <ContactIllustration />
      </div>
      <div>
        <CustomLabel className="text-4xl font-display font-medium">
          No users found...
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-center">
          Please contact with admistration!
        </CustomLabel>
      </div>
    </div>
  );
};

type detailsProps = {
  key?: number;
  firstName?: string;
  lastName?: string;
  userProfileImage?: string;
  role?: string;
  emailAddress?: string;
  phoneNumber?: string;
  buttonTitle?: string;
  onClick?: () => void;
};

export const PrivateContactCardDetailPageTemplate = ({
  key,
  firstName,
  lastName,
  userProfileImage,
  role,
  emailAddress,
  phoneNumber,
  buttonTitle,
  onClick,
}: detailsProps) => {
  return (
    <div
      key={key}
      className="w-full rounded-lg shadow-md flex items-center justify-center flex-col cursor-pointer p-4"
      style={{ background: getRandomColor() }}
    >
      <div>
        <CustomAvatar
          src={userProfileImage ?? "https://github.com/shadcn.png"}
          title={`${firstName} ${lastName}`}
        />
      </div>
      <div className="w-full truncate flex items-center justify-center mt-2">
        <CustomLabel className="font-display text-xs font-bold cursor-pointer">
          {`${firstName} ${lastName}`}
        </CustomLabel>
      </div>
      <div className="w-full truncate flex items-center justify-center">
        <CustomLabel className="font-display text-xs font-medium cursor-pointer text-blue-600">
          {role ? role : "Student"}
        </CustomLabel>
      </div>
      <div className="w-full truncate flex items-center justify-center">
        <CustomLabel className="font-display text-xs font-light cursor-pointer truncate">
          <a
            href={`mailto:${emailAddress}`}
            className="font-display text-xs font-light cursor-pointer truncate hover:text-blue-600"
          >
            {emailAddress}
          </a>
        </CustomLabel>
      </div>
      <div className="w-full truncate flex items-center justify-center">
        <CustomLabel className="font-display text-xs font-light cursor-pointer">
          <a
            href={`tel:${phoneNumber}`}
            className="font-display text-xs font-light cursor-pointer hover:text-blue-600"
          >
            {phoneNumber}
          </a>
        </CustomLabel>
      </div>
      <div className="mt-2">
        <button
          onClick={onClick}
          className="text-xs border w-24 p-2 rounded-xl font-display bg-[#0d1b2a] text-white"
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};
