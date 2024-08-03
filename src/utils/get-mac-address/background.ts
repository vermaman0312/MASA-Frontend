chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getMacAddress") {
    const port = chrome.runtime.connectNative("com.example.macaddress");
    port.onMessage.addListener((response) => {
      sendResponse({ macAddress: response.macAddress });
    });
    port.postMessage({});
    return true;
  }
});

export {};
