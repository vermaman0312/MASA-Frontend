import React from "react";

const ExtensionPrompt = () => {
  const handleInstall = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/abcdefghijklmnoabcdefghijklmn",
      "_blank"
    );
  };

  return (
    <div className="w-screen h-screen absolute bg-gray-900 bg-opacity-55 z-50 flex items-center justify-center p-4">
      <div className="w-full md:w-[30%] h-[15rem] bg-white rounded-lg p-2 shadow-xl">
        <p>Install our browser extension for additional features!</p>
        <button onClick={handleInstall}>Install Extension</button>
      </div>
    </div>
  );
};

export default ExtensionPrompt;
