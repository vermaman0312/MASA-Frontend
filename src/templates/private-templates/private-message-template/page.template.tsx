import "../../../css/scroll-container.css";
import PrivateMessageHeadingPageComponent from "./components/page.message-heading.component";
import PrivateMessageListHeadingPageComponent from "./components/page.messagelist-heading.component";
import PrivateMessageListDetailsPageComponent from "./components/page.message-list-details.component";
import { useState } from "react";
import PrivateMessageFormPageComponent from "./components/page.message-form.component";
import PrivateMessageBoxHeadingPageComponent from "./components/page.messagebox-heading.component";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { MessageCircleMore } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";

const PrivateMessagePageTemplate = () => {
  const [isNewMessageOpen, setIsNewMessageOpen] = useState<boolean>(false);
  const [isUnread, setIsUnread] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="w-full h-full border rounded-lg flex flex-col items-center justify-between">
      <div className="w-full">
        <PrivateMessageHeadingPageComponent
          onClickCompose={() => setIsNewMessageOpen(true)}
          onClickAllMessage={() => setIsUnread(false)}
          onClickUnRead={() => setIsUnread(true)}
          isUnread={isUnread}
        />
      </div>
      <div className="w-full h-full flex items-center justify-between">
        <div
          className={`h-full w-full md:w-[30%] md:border-r ${
            message && "hidden"
          } md:flex flex-col items-center justify-start`}
        >
          <div className="w-full">
            <PrivateMessageListHeadingPageComponent />
          </div>
          <div
            className="w-full flex-1 p-2 flex flex-col gap-2 scroll-container"
            style={{
              minHeight: "calc(100vh - 500px)",
              maxHeight: "calc(100vh - 273px)",
            }}
          >
            <PrivateMessageListDetailsPageComponent
              onClick={() => setMessage("Data")}
            />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
            <PrivateMessageListDetailsPageComponent />
          </div>
        </div>
        {message ? (
          <div
            className={`h-full w-full md:w-[70%] ${
              !message && "hidden"
            } md:flex flex-col items-center justify-start`}
          >
            <div className="w-full">
              <PrivateMessageBoxHeadingPageComponent />
            </div>
            <div
              className="w-full flex flex-col items-start justify-start p-2"
              style={{
                minHeight: "calc(100vh - 500px)",
                maxHeight: "calc(100vh - 256px)",
              }}
            >
              <MDEditor.Markdown
                source={"Message here"}
                className="font-display scroll-container"
                style={{
                  whiteSpace: "pre-wrap",
                  fontSize: 12,
                  fontFamily: "Poppins",
                  width: "100%",
                  height: "100%",
                  overflow: "auto ",
                }}
              />
            </div>
          </div>
        ) : (
          <div className="h-full w-full md:w-[70%] hidden md:flex flex-col items-center justify-center">
            <MessageCircleMore className="w-12 h-12" />
            <CustomLabel className="text-3xl font-display font-semibold">
              Message
            </CustomLabel>
          </div>
        )}
        {isNewMessageOpen && (
          <div className="w-screen h-screen absolute left-0 top-0 flex items-center justify-center p-4 md:p-24">
            <PrivateMessageFormPageComponent
              onClose={() => setIsNewMessageOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateMessagePageTemplate;
