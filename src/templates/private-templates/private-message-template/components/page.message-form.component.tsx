import { File, NotebookTabs } from "lucide-react";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import CustomMarkDown from "../../../../components/custom-markdown/custom-markdown.component";

type props = {
  onClose?: () => void;
};

const PrivateMessageFormPageComponent = ({ onClose }: props) => {
  return (
    <div className="bg-white w-full md:w-[70%] h-full animate-zoomIn shadow-xl rounded-lg border">
      <div className="w-full flex flex-wrap items-center justify-between p-2 gap-2">
        <CustomLabel className="font-display font-bold text-xl">
          New Message
        </CustomLabel>
        <div className="p-2 flex items-center justify-end">
          <div className="flex gap-2">
            <button className="w-24 bg-blue-900 text-white text-xs font-display p-1 flex items-center justify-center rounded-lg">
              Send
            </button>
            <button className="w-24 bg-gray-900 text-white text-xs font-display p-1 flex items-center justify-center rounded-lg">
              Save Draft
            </button>
            <button
              onClick={onClose}
              className="w-24 bg-red-500 text-white text-xs font-display p-1 flex items-center justify-center rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-start p-2 gap-2">
        <div className="w-full p-2 flex flex-col gap-2 items-center justify-center">
          <div className="w-full flex items-center justify-start gap-1">
            <CustomLabel className="text-xs font-display text-gray-600">
              Signature:
            </CustomLabel>
            <input
              type="text"
              value="Aman Verma"
              placeholder="Signature"
              className="outline-none border p-1 text-xs w-full font-display rounded-md"
            />
            <File />
          </div>
          <div className="w-full flex items-center justify-start gap-1">
            <CustomLabel className="text-xs font-display text-gray-600">
              To:
            </CustomLabel>
            <input
              type="text"
              value=""
              placeholder="username"
              className="outline-none border p-1 text-xs w-full font-display rounded-md"
            />
            <NotebookTabs />
          </div>
          <div className="w-full flex items-center justify-start gap-1">
            <CustomLabel className="text-xs font-display text-gray-600">
              Subject:
            </CustomLabel>
            <input
              type="text"
              value=""
              placeholder="Subject"
              className="outline-none border p-1 text-xs w-full font-display rounded-md"
            />
          </div>
          <div className="w-full flex items-center justify-start gap-1">
            <CustomLabel className="text-xs font-display text-gray-600">
              5 attachment are included with this message.
            </CustomLabel>
          </div>
        </div>
        <div className="w-full h-full">
          <CustomMarkDown />
        </div>
      </div>
    </div>
  );
};

export default PrivateMessageFormPageComponent;
