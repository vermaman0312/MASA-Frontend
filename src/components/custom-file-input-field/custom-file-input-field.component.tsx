import { CloudUpload } from "lucide-react";
import React, { useEffect, useRef } from "react";

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: File | null;
  isError?: boolean;
  placeholder?: string;
};

const CustomFileInputField = ({
  onChange,
  value,
  isError,
  placeholder,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (!value) {
      clearInput();
    }
  }, [value]);

  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center justify-center w-full h-64 border-2 ${
            isError ? "border-red-500" : "border-gray-300"
          } border-dashed rounded-lg cursor-pointer ${
            isError ? "bg-red-50" : "bg-gray-50"
          } dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="mb-4">
              <CloudUpload
                className={`${isError ? "text-red-500" : "text-gray-500"}`}
              />
            </div>
            <p
              className={`mb-2 text-sm ${
                isError ? "text-red-500" : "text-gray-500"
              } dark:text-gray-400`}
            >
              {value ? (
                <>{value?.name}</>
              ) : (
                <>
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </>
              )}
            </p>
            <p
              className={`text-xs ${
                isError ? "text-red-500" : "text-gray-500"
              } dark:text-gray-400`}
            >
              {placeholder ?? "SVG, PNG, JPG or GIF (MAX. 800x400px)"}
            </p>
          </div>
          <input
            ref={inputRef}
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onChange && onChange(event)}
          />
        </label>
      </div>
    </div>
  );
};

export default CustomFileInputField;
