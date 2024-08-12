import { sha256 } from "js-sha256";
import { wordlists } from "bip39";

const wordList = wordlists.english;

export const generate2FAPasskey = (
  userToken: string,
  wordCount: number = 24
): string => {
  const hash = sha256(userToken);
  const words = [];

  for (let i = 0; i < wordCount; i++) {
    const hashSegment = parseInt(hash.slice(i * 2, i * 2 + 2), 16);
    const wordIndex = hashSegment % wordList.length;
    words.push(wordList[wordIndex]);
  }

  return words.join(" ");
};
