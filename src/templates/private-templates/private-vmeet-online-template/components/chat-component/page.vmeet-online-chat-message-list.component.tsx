import { CircleChevronDown } from "lucide-react";
import PrivateVMeetOnlineChatReceiverMessagePageComponent from "./page.vmeet-online-chat-receiver-message.component";
import PrivateVMeetOnlineChatSenderMessagePageComponent from "./page.vmeet-online-chat-sender-message.component";
import { useCallback, useEffect, useRef, useState } from "react";

const PrivateVMeetOnlineChatMessageListPageComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const scrollToBottom = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const start = container.scrollTop;
      const end = container.scrollHeight;
      const duration = 2000;
      let startTime: number | null = null;

      const scroll = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollTop = start + (end - start) * easeInOutQuad(progress);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      requestAnimationFrame(scroll);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      if (container) {
        const { scrollTop } = container;
        setIsAtTop(scrollTop === 0);
      }
    };
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);
  return (
    <div
      className="w-full flex flex-col p-4 gap-5 scroll-container"
      ref={scrollContainerRef}
      style={{ maxHeight: "calc(100vh - 282px)" }}
    >
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatSenderMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatSenderMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatSenderMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatSenderMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatSenderMessagePageComponent />
      </div>
      <div>
        <PrivateVMeetOnlineChatReceiverMessagePageComponent />
      </div>

      {isAtTop && (
        <div className="absolute bottom-52 right-4 rounded-full flex items-center justify-center animate-zoomIn">
          <CircleChevronDown
            className="text-white cursor-pointer"
            onClick={scrollToBottom}
          />
        </div>
      )}
    </div>
  );
};

export default PrivateVMeetOnlineChatMessageListPageComponent;
