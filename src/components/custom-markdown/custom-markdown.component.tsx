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
        height={height ?? 700}
        onChange={(newValue, event, state) => {
          setValue && setValue(newValue);
        }}
        className="w-full h-full"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}
    </div>
  );
};

export default CustomMarkDown;
