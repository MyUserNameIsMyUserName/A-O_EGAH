function console_prnt_to_container(elemId="null", msg, msgtype="log"){
  const newLogItem = document.createElement('p');
  
  // and give it some content
  const newContent = document.createTextNode(msg);

  // add the text node to the newly created div
  newLogItem.appendChild(newContent);
  newLogItem.classList.add(msgtype)

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById(elemId);
  currentDiv.appendChild(newLogItem);

  console.clear();
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1) {
    console.error("Script Error: See Browser Console for Detail");
  } else {
    var message = [
      "Message: " + msg,
      "URL: " + url,
      "Line: " + lineNo,
      "Column: " + columnNo,
      "Error object: " + JSON.stringify(error),
    ].join(" - ");
    console_prnt_to_container("egahErrorListDisplay", message, "error");
  }
  console.clear();
  return false;
};


function info_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg,"info");
}
function log_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg)
}
function warn_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg,"warn")
}
function error_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg,"error")
}

window.console.info = info_console;
window.console.log = log_console;
window.console.warn = warn_console;
window.console.error = error_console;

console.info = info_console;
console.log = log_console;
console.warn = warn_console;
console.error = error_console;