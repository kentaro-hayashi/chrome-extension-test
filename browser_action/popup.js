function send() {
  const queryInfo = {
    active: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT
  };

  chrome.tabs.query(queryInfo, (result) => {
    const currentTab = result.shift();
    chrome.tabs.sendMessage(currentTab.id, 'hayashi');
  });
}

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#send').addEventListener('click', send);
});
