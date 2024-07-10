import { Loader } from "lucide-react";

type props = {
  backgroundTransparent?: boolean;
  backgroundLoader?: string;
  loaderColor?: string;
};

const CustomLoader = ({
  backgroundTransparent,
  backgroundLoader,
  loaderColor,
}: props) => {
  return (
    <div
      className={`w-screen h-screen absolute left-0 top-0 ${
        backgroundTransparent ? "bg-transparent" : "bg-gray-500 bg-opacity-75"
      }  flex items-center justify-center transform transition-all zoom-in`}
    >
      <div
        className={`${
          backgroundLoader ? backgroundLoader : "bg-blue-100"
        } p-5 rounded-xl shadow-lg`}
      >
        <Loader className={`animate-spin ${loaderColor && loaderColor}`} />
      </div>
    </div>
  );
};

export default CustomLoader;
