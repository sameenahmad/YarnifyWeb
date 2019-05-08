console.log("Hi You!!");
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  if (message.txt == "Hello") {
    const elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      var element = elements[i];
      for (let j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
          var text = node.nodeValue;
          var replacedText = text.replace(/npm (install|i)/gi, "yarn add");
          if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
          }
        }
      }
    }
  }
}
