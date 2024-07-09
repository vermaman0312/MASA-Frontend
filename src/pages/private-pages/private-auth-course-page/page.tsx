import React from "react";
import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateCoursesPageLayout from "../../../layouts/private-layouts/private-courses-layout/page.student.layout";

const PrivateAuthCoursePage = () => {
  return (
    <CustomSideBar>
      <PrivateCoursesPageLayout />
    </CustomSideBar>
  );
};

export default PrivateAuthCoursePage;
