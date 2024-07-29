import { useEffect, useState } from "react";
import PrivateMessagePageTemplate from "../../../templates/private-templates/private-message-template/page.template";

const PrivateMessagePageLayout = () => {
  const [isUnread, setIsUnread] = useState<boolean>(false);
  const [isMailSelected, setIsMailSelected] = useState<Array<string>>([
    "1",
    "",
  ]);
  const [text, setText] = useState("");
  const [linkedText, setLinkedText] = useState("");
  const [isCompose, setIsCompose] = useState<boolean>(false);
  const maxWords = 800;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxWords) {
      setText(event.target.value);
    }
  };
  useEffect(() => {
    const urlRegex = /\b(https?:\/\/[^\s]+)/g;
    const linkedText = text.replace(urlRegex, (url) => {
      return `<a href="${url}" style="color: blue;">${url}</a>`;
    });
    setLinkedText(linkedText);
  }, [text]);

  return (
    <div className="w-full h-full">
      <PrivateMessagePageTemplate />
    </div>
  );
};

export default PrivateMessagePageLayout;
