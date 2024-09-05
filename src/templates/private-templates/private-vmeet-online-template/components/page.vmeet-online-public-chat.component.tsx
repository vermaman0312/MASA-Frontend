import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import {
  ChevronRight,
  Paperclip,
  SmilePlus,
  SendHorizontal,
} from "lucide-react";
import "../../../../css/scroll-container.css";
import PrivateVMeetOnlineChatHeaderPageComponent from "./chat-component/page.vmeet-online-chat-header.component";
import PrivateVMeetOnlineChatMessageListPageComponent from "./chat-component/page.vmeet-online-chat-message-list.component";

const PrivateVMeetOnlinePublicChatPageComponent = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <div className="w-full">
          <PrivateVMeetOnlineChatHeaderPageComponent />
        </div>

        <div className="w-full">
          <PrivateVMeetOnlineChatMessageListPageComponent />
        </div>
        {/* <div className="w-full h-full flex items-center justify-center">
          <CustomLabel className="text-[#9CA3AF] text-xl font-display">
            No Messages
          </CustomLabel>
        </div> */}
      </div>

      <div className="w-full border-t-2 border-[#374151] border-opacity-50 flex flex-col items-center justify-between">
        <div className="w-full p-4 flex items-center justify-between gap-2 flex-wrap">
          <div className="w-full flex items-center justify-between">
            <div className="bg-[#374151] bg-opacity-50 p-3.5 flex items-center justify-center gap-4 rounded-lg">
              <CustomLabel className="text-xs font-display text-[#9CA3AF]">
                Everyone
              </CustomLabel>
              <ChevronRight className="w-4 h-4 text-[#9CA3AF]" />
            </div>
            <div className="flex items-center gap-4">
              <Paperclip
                onClick={() => alert("file")}
                className="text-[#9CA3AF] w-5 h-5 cursor-pointer"
              />
              <SmilePlus
                onClick={() => alert("emoji")}
                className="text-[#9CA3AF] w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-[#374151] border-opacity-50 p-[18px] flex items-center justify-between gap-2 flex-wrap">
          <div className="w-full flex items-center justify-between gap-4">
            <div className="w-full bg-[#374151] bg-opacity-50 flex items-center justify-center gap-4 rounded-lg">
              <input
                type="text"
                placeholder="write a message..."
                className="w-full p-3 rounded-lg outline-none border-none bg-transparent text-[#9CA3AF] text-xs font-display placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#2D8CFF] p-2 flex items-center justify-center w-12 cursor-pointer rounded-xl">
                <SendHorizontal className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlinePublicChatPageComponent;
