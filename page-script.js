chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg && msg.type === 'pb_ready') {
    const tabId = sender.tab.id;
    const eventId = msg.eventId;

   
    chrome.scripting.executeScript({
      target: { tabId },
      world: 'MAIN',
      func: function(evt) { 
    console.log("Received event:", evt);  
    window.__PB_EVENT_ID__ = evt;
}
 },
      args: [eventId]
    }, () => {
  
      const extUrl = chrome.runtime.getURL('page-script.js');
      chrome.scripting.executeScript({
        target: { tabId },
        world: 'MAIN',
        files: [extUrl]
      }, () => {
        if (chrome.runtime.lastError) {
          console.error('file injection failed', chrome.runtime.lastError);
        } else {
          console.log('page-script.js injected');
        }
      });
    });
  }
});
