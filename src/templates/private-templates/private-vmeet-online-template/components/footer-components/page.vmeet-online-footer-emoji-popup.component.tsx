import React, { useEffect } from "react";

type props = {
  isEmojiOpen: boolean;
  emoji: string;
  setEmoji: (emoji: string) => void;
  onClick?: (value: string) => void;
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
  onClick,
}: props) => {
  useEffect(() => {
    if (emoji) {
      setTimeout(() => {
        setEmoji("");
      }, 10000);
    }
  }, [emoji, setEmoji]);

  return isEmojiOpen ? (
    <div
      className={`absolute rounded-full bottom-28 md:left-[24.8%] left-0 z-10 bg-[#1F2937] bg-opacity-50 ${
        isEmojiOpen ? "animate-slideUp" : "animate-slideDown"
      } hidden md:flex items-center justify-between gap-1 p-1`}
    >
      {emojiList.map((emoji, index) => {
        return (
          <span
            onClick={() => onClick && onClick(emoji)}
            key={index}
            className="p-1 bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            {emoji}
          </span>
        );
      })}
    </div>
  ) : null;
};

export default PrivateVMeetOnlineFooterEmojiPopupPageComponent;
