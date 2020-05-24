chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(`received: ${request}`);
    document.title = request
  }
);
