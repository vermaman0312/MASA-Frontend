// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "getMacAddress") {
//     const port = chrome.runtime.connectNative("com.example.macaddress");
//     port.onMessage.addListener((response) => {
//       sendResponse({ macAddress: response.macAddress });
//     });
//     port.postMessage({});
//     return true;
//   }
// });
chrome.runtime.onInstalled.addListener(function () {
  //some other code here
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.url) {
    chrome.downloads.download({
      url: message.url,
      conflictAction: "uniquify",
      saveAs: false,
    });
  }
});

export {};
