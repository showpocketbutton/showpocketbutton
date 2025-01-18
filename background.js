// listen message from content-script 
browser.runtime.onMessage.addListener((message, sender) => {
//  console.log('backgound script receives message');
  if (message.action === "closeTab") {
    // close current tab
    browser.tabs.remove(sender.tab.id);
  }
});

