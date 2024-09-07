import React, { useEffect, useState } from "react";

type props = {
  isEmojiOpen: boolean;
  emoji: string;
  setEmoji: (emoji: string) => void;
};

const emojiList: string[] = [
  "💖",
  "💔",
  "👍",
  "👎",
  "🙌",
  "👏",
  "✋",
  "😀",
  "😉",
  "😧",
  "😯",
  "😴",
  "😠",
  "😏",
  "😲",
  "🎉",
];

const PrivateVMeetOnlineFooterEmojiPopupPageComponent = ({
  isEmojiOpen,
  emoji,
  setEmoji,
}: props) => {
  const [hoveredEmoji, setHoveredEmoji] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmoji("");
    }, 10000);
    return () => clearTimeout(timer);
  }, [emoji, setEmoji]);

  const addEmoji = (newEmoji: string) => {
    setEmoji(newEmoji);
  };

  return isEmojiOpen ? (
    <div
      className={`absolute bottom-28 md:left-[24.8%] left-0 z-10 ${
        isEmojiOpen ? "animate-slideUp" : "animate-slideDown"
      } flex flex-col items-center gap-1`}
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <span className="text-[50px] animate-bounce">{hoveredEmoji}</span>
      </div>
      <div
        onMouseLeave={() => setHoveredEmoji("")}
        className={`rounded-full  bg-[#1F2937] bg-opacity-50  hidden md:flex items-center justify-between gap-1 p-1`}
      >
        {emojiList.map((emoji, index) => {
          return (
            <span
              onClick={() => addEmoji(emoji)}
              onMouseLeave={() => setHoveredEmoji("")}
              onMouseEnter={() => setHoveredEmoji(emoji as string)}
              key={index}
              className="p-1 bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default PrivateVMeetOnlineFooterEmojiPopupPageComponent;
