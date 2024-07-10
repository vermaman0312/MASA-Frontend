import MDEditor from "@uiw/react-md-editor";
import React from "react";
import rehypeSanitize from "rehype-sanitize";

type props = {
  setValue?: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: any
  ) => void;
  value?: string;
  height?: number;
};

const CustomMarkDown = ({ value, setValue, height }: props) => {
  return (
    <div className="w-full h-full">
      <MDEditor
        value={value}
        height={height ?? 650}
        preview="edit"
        onChange={(newValue, event, state) => {
          setValue && setValue(newValue);
        }}
        className="w-full h-full"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
};

export default CustomMarkDown;
