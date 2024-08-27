import { MessageSquareMore, X } from "lucide-react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import moment from "moment";

type props = {
  userName?: string;
  timeStamp?: Date;
  messageType?: "Message" | "Post" | "Like" | "Dislike" | "Comment" | "";
  message?: string;
  media?: string;
  onClose?: () => void;
  onClickMarkasRead?: () => void;
  onClick?: () => void;
  isRead?: boolean;
};

const PrivateNotificationMessagePageComponent = ({
  userName,
  timeStamp,
  messageType,
  message,
  media,
  onClose,
  onClickMarkasRead,
  onClick,
  isRead,
}: props) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isRead ? "border" : "border border-blue-300"
      } rounded-xl p-2 cursor-pointer shadow-md`}
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div>
            <MessageSquareMore
              className={`${
                isRead ? "text-gray-500" : "text-blue-500"
              } w-5 h-5 cursor-pointer`}
            />
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <CustomLabel
              className={`text-md font-display font-semibold ${
                isRead ? "text-gray-500" : "text-blue-500"
              } cursor-pointer`}
            >
              {userName}
            </CustomLabel>
            <CustomLabel
              className={`text-xs font-display font-normal ${
                isRead ? "text-gray-500" : "text-blue-500"
              } cursor-pointer`}
            >
              {`| ${moment(timeStamp).fromNow()}`}
            </CustomLabel>
          </div>
        </div>
        <div>
          <X
            onClick={onClose}
            className="text-red-500 w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="pl-7">
        <CustomLabel
          className={`text-md font-display ${
            isRead ? "text-gray-500" : "text-blue-500"
          } font-normal cursor-pointer`}
        >
          New Notification - {messageType}
        </CustomLabel>
      </div>
      <div className="pl-7 mt-2">
        {messageType === "Message" ? (
          <CustomLabel className="text-xs font-display text-gray-400 font-normal text-justify line-clamp-3 break-words cursor-pointer">
            {message}
          </CustomLabel>
        ) : (
          <div>
            <CustomLabel className="text-xs font-display text-gray-400 font-normal text-justify line-clamp-3 break-words cursor-pointer">
              {message}
            </CustomLabel>
            <div className="mt-2 h-16">
              <img src={media} alt="" className="w-full h-full object-fill" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 flex items-center justify-end gap-2">
        <button
          disabled={isRead}
          onClick={onClickMarkasRead}
          className={`border text-xs font-display p-2 rounded-lg ${
            isRead
              ? "border-gray-300 bg-gray-200 text-gray-500"
              : "border-orange-300 bg-orange-200 text-orange-500"
          }`}
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default PrivateNotificationMessagePageComponent;
