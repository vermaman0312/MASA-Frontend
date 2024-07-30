import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import "./style.css";

type props = {
  setValue?: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: any
  ) => void;
  value?: string;
  height?: number;
};

const CustomMarkDown = ({ value, setValue }: props) => {
  return (
    <div className="md-editor-container">
      <MDEditor
        value={value}
        height="85%"
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
