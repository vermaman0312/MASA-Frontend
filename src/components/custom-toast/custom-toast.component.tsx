import { ReactNode } from "react";
import { toast } from "react-toastify";

type props = {
  body?: ReactNode;
};

const CustomToast = ({ body }: props) => {
  return toast(<div>{body}</div>, {
    className: "success",
    icon: false,
  });
};

export default CustomToast;
