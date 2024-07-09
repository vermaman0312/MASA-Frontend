import { BookOpen } from "lucide-react";
import React from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateCoursesPageLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen />
          <CustomLabel className="text-xl font-display font-bold">
            Courses
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default PrivateCoursesPageLayout;
