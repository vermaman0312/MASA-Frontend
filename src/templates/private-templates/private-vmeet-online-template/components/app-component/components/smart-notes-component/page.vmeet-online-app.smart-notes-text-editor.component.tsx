import { Bold, Italic, Underline } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const PrivateVMeetOnlineAppSmartNotesTextEditorPageComponent = () => {
  const [content, setContent] = useState<string>("");
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedContent = localStorage.getItem("editor-content");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("editor-content", content);
  }, [content]);

  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.textContent || "");
    }
  };

  const handleBold = () => {
    if (document.getSelection()) {
      document.execCommand("bold");
    }
  };

  const handleItalic = () => {
    if (document.getSelection()) {
      document.execCommand("italic");
    }
  };

  const handleUnderline = () => {
    if (document.getSelection()) {
      document.execCommand("underline");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-4 border-b p-2">
        <button
          onClick={handleBold}
          className="bg-gray-800 p-2 text-xs font-display flex items-center justify-center rounded-lg text-white"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={handleItalic}
          className="bg-gray-800 p-2 text-xs font-display flex items-center justify-center rounded-lg text-white"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={handleUnderline}
          className="bg-gray-800 p-2 text-xs font-display flex items-center justify-center rounded-lg text-white"
        >
          <Underline className="w-4 h-4" />
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        style={{
          height: "100%",
          padding: "10px",
          outline: "none",
          textAlign: "left",
          direction: "ltr",
          overflowY: "auto",
        }}
        onInput={handleInput}
      >
        {content}
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppSmartNotesTextEditorPageComponent;
