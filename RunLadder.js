chrome.action.onClicked.addListener(async (tab) => {
  const currentUrl = tab.url;
  const ladderUrl = `http://localhost:8080/${currentUrl}`;
  chrome.tabs.update(tab.id, { url: ladderUrl });
});
