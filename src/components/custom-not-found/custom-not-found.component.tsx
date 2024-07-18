import NotFoundIllustration from "../../assets/illustrations/not-found-illustration";
import { CustomLabel } from "../custom-label/custom-label.component";

const CustomNotFound = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-64 h-64">
        <NotFoundIllustration />
      </div>
      <div>
        <CustomLabel className="text-3xl font-display font-medium text-gray-700">
          No results found!
        </CustomLabel>
      </div>
    </div>
  );
};

export default CustomNotFound;
