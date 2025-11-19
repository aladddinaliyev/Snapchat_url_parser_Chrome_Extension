"use strict";

function getParam(url, name) {
  try {
    return new URLSearchParams(String(url).split("?")[1]).get(name);
  } catch {
    return null;
  }
}


console.log("Background worker active");


chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs.length === 0) return;

  const tabUrl = tabs[0].url;

  const continueParam = getParam(tabUrl, "continue");
  const clientId = getParam(tabUrl, "client_id");

  console.log("continue =", continueParam);
  console.log("client_id =", clientId);

 
  console.log("Analytics function called with URL:", tabUrl);
});

self.addEventListener("install", () => console.log("Service Worker installing..."));
self.addEventListener("activate", () => console.log("Service Worker activated!"));
