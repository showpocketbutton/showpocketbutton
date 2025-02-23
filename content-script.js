// create a close button
const closeButton = document.createElement("button");
closeButton.textContent = "X";
closeButton.id= "addon-show-tab-close-button";
var url=browser.runtime.getURL('/icons/cross-128.png');
closeButton.style.backgroundImage=`url('${url}')`;
closeButton.style.backgroundRepeat="no-repeat";
closeButton.style.backgroundSize="cover";
closeButton.style.backgroundColor="transparent";
closeButton.style.position="fixed";
closeButton.style.top="10px";
closeButton.style.right="10px";
closeButton.style.zIndex="9999";
closeButton.style.color="transparent";
closeButton.style.border="none";
closeButton.style.width="24px";
closeButton.style.height="24px";
closeButton.style.cursor="pointer";

// create a pocket button
const pocketButton = document.createElement("button");
pocketButton.textContent = "P";
pocketButton.id= "addon-show-pocket-button";
url=browser.runtime.getURL('/icons/pocket-128.png');
pocketButton.style.backgroundImage=`url('${url}')`;
pocketButton.style.backgroundRepeat="no-repeat";
pocketButton.style.backgroundSize="cover";
pocketButton.style.backgroundColor="transparent";
pocketButton.style.position="fixed";
pocketButton.style.top="60px";
pocketButton.style.right="10px";
pocketButton.style.zIndex="9999";
pocketButton.style.color="transparent";
pocketButton.style.border="none";
pocketButton.style.width="24px";
pocketButton.style.height="24px";
pocketButton.style.cursor="pointer";

	document.body.appendChild(closeButton);
	closeButton.insertAdjacentElement("afterend", pocketButton);
//	 console.log('button not found');
	// add the button to current page
//	document.body.appendChild(pocketButton);

// click the button to send a message to background script. request close current tab 
pocketButton.addEventListener("click", (e) => {
    // save page to pocket
    const pocketUrl = "https://getpocket.com/save?url=" + encodeURIComponent(window.location.href) + "&title=" + encodeURIComponent(document.title);
    window.open(pocketUrl, '_blank', 'width=550,height=420');
});

// click the button to send a message to background script. request close current tab 
closeButton.addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "closeTab" });
});
