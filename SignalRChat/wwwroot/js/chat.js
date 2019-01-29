"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function(user, message) {
  var userInput = document.getElementById("userInput").value;
  var msg = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  var encodedMsg = user + " says " + msg;
  var li = document.createElement("li");
  li.textContent = encodedMsg;
  document.getElementById("messages").appendChild(li);
});

connection.start().catch(function(err) {
  return console.error(err.toString());
});

document
  .getElementById("sendButton")
  .addEventListener("click", function(event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function(err) {
      return console.error(err.toString());
    });
    event.preventDefault();
  });
