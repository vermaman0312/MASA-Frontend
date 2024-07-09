import { Avatar, AvatarFallback, AvatarImage } from "./custom-avatar.ui";

type props = {
  src: string;
  title?: string;
  className?: string;
};

const CustomAvatar = ({ src, title, className }: props) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt="@shadcn" />
      <AvatarFallback>{title}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
