import { Bell } from "lucide-react";

type props = {
  onClick?: () => void;
};

const NotificationNavBar = ({ onClick }: props) => {
  return (
    <div onClick={onClick} className="flex items-center">
      <Bell className="w-7 h-7 text-white cursor-pointer" />
    </div>
  );
};

export default NotificationNavBar;
