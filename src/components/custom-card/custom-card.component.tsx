import { ReactNode } from "react";

type props = {
  children: ReactNode;
  padding?: number;
};

const CustomCard = ({ children, padding }: props) => {
  return (
    <div
      className={`w-full rounded-2xl p-${
        padding ?? "4"
      } shadow-input bg-white dark:bg-black shadow-lg flex flex-col items-center justify-center gap-2`}
    >
      {children}
    </div>
  );
};

export default CustomCard;
