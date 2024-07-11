import React from "react";
import CustomSearchBox from "../../../../components/custom-searchbox/custom-searchbox.component";

type props = {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel?: () => void;
};

const PrivateContactHeadingPageComponent = ({
  value,
  onChange,
  onCancel,
}: props) => {
  return (
    <div className="w-full">
      <CustomSearchBox placeholder="Search..." onChange={onChange} value={value} onCancel={onCancel} />
    </div>
  );
};

export default PrivateContactHeadingPageComponent;
