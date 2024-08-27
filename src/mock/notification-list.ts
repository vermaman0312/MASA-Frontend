export interface notificationDataType {
  notificationId: string;
  userName: string;
  timeStamp: Date;
  messageType: string;
  message: string;
  media?: string;
  status: boolean;
  isRead: boolean;
}

export const notificationList: Array<notificationDataType> = [
  {
    notificationId: "1",
    userName: "User1",
    timeStamp: new Date("2024-08-22T10:39:53.069+00:00"),
    messageType: "Message",
    message:
      "lazy returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. lazy returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend.",
    status: true,
    isRead: true,
  },
  {
    notificationId: "2",
    userName: "User2",
    timeStamp: new Date("2024-08-21T10:39:53.069+00:00"),
    messageType: "Post",
    message: "This is a message for item 2",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "3",
    userName: "User3",
    timeStamp: new Date("2024-08-20T10:39:53.069+00:00"),
    messageType: "Like",
    message: "This is a message for item 3",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "4",
    userName: "User4",
    timeStamp: new Date("2024-08-19T10:39:53.069+00:00"),
    messageType: "Dislike",
    message: "This is a message for item 4",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "5",
    userName: "User5",
    timeStamp: new Date("2024-08-18T10:39:53.069+00:00"),
    messageType: "Comment",
    message: "This is a message for item 5",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "6",
    userName: "User6",
    timeStamp: new Date("2024-08-17T10:39:53.069+00:00"),
    messageType: "Message",
    message: "This is a message for item 6",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "7",
    userName: "User7",
    timeStamp: new Date("2024-08-16T10:39:53.069+00:00"),
    messageType: "Post",
    message: "This is a message for item 7",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "8",
    userName: "User8",
    timeStamp: new Date("2024-08-15T10:39:53.069+00:00"),
    messageType: "Like",
    message: "This is a message for item 8",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "9",
    userName: "User9",
    timeStamp: new Date("2024-08-14T10:39:53.069+00:00"),
    messageType: "Dislike",
    message: "This is a message for item 9",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
  {
    notificationId: "10",
    userName: "User10",
    timeStamp: new Date("2024-08-13T10:39:53.069+00:00"),
    messageType: "Comment",
    message: "This is a message for item 10",
    media: "https://random-image-pepebigotes.vercel.app/api/random-image",
    status: true,
    isRead: false,
  },
];
