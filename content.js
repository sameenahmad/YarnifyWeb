console.log("HEYYYYYY!!");
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  if (message.txt == "Hello") {
    const elements = document.getElementsByTagName("*");
 document.body.innerHTML = document.body.innerHTML.replace(
   /npm init/gi,
   "yarn init"
 );
  document.body.innerHTML = document.body.innerHTML.replace(
    /npm run/gi,
    "yarn run"
  );
 document.body.innerHTML = document.body.innerHTML.replace(
   /npm link/gi,
   "yarn link"
 );
 document.body.innerHTML = document.body.innerHTML.replace(
   /npm publish/gi,
   "yarn publish"
 );
 document.body.innerHTML = document.body.innerHTML.replace(
   /npm install (.*) --global/gi,
   "yarn global add"
 );
 document.body.innerHTML = document.body.innerHTML.replace(
   /npm uninstall /gi,
   "yarn remove"
 );
document.body.innerHTML = document.body.innerHTML.replace(
  /npm install (.*) --save /gi,
  /yarn add /
);

  document.body.innerHTML = document.body.innerHTML.replace(
    /npm (install|i)/gi,
    "yarn add"
  );




  
 

  }
}
