import { useCallback, useState } from "react";
import PrivateNotificationMessagePageComponent from "./components/page.notification-message.component";
import {
  notificationDataType,
  notificationList,
} from "../../../mock/notification-list";

const PrivateNotificationPageTemplate = () => {
  const [notificationLists, setNotificationList] =
    useState<Array<notificationDataType>>(notificationList);

  const handleDeleteNotification = useCallback(
    (notificationId: string) => {
      setNotificationList(
        notificationLists.filter(
          (notification) => notification.notificationId !== notificationId
        )
      );
    },
    [notificationLists]
  );
  const handleMarkAsReadNotification = useCallback((notificationId: string) => {
    setNotificationList((prevList) => {
      return prevList.map((notification) => {
        if (notification.notificationId === notificationId) {
          return {
            ...notification,
            isRead: true,
          };
        }
        return notification;
      });
    });
  }, []);

  return (
    <div className="h-full flex  flex-col gap-2">
      {notificationLists
        .filter((filter) => filter.status)
        .sort((a, b) => {
          if (a.isRead === b.isRead) {
            return 0;
          }
          return a.isRead ? 1 : -1;
        })
        .map((data, index) => {
          return (
            <div key={index}>
              <PrivateNotificationMessagePageComponent
                userName={data.userName}
                timeStamp={new Date(data.timeStamp)}
                messageType={
                  data.messageType as
                    | "Message"
                    | "Post"
                    | "Like"
                    | "Dislike"
                    | "Comment"
                }
                message={data.message}
                media={data.media}
                isRead={data.isRead}
                onClose={() => handleDeleteNotification(data.notificationId)}
                onClickMarkasRead={() =>
                  handleMarkAsReadNotification(data.notificationId)
                }
              />
            </div>
          );
        })}
    </div>
  );
};

export default PrivateNotificationPageTemplate;
