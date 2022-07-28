const socket = io("https://fierce-river-57256.herokuapp.com:3000");

socket.on("connect", () => {
    console.log(socket.id);
});

socket.on("msg", (msg) => {
    receiveMessage(msg)
});

const messageContainer = document.querySelector("#messagebox");
const inputField = document.querySelector("#inputbox");
const sendButton = document.querySelector("#send");
const form = document.querySelector("#submit");

const sendMessageListener = (e) => {
  sendMessage(inputField.value);
  e.preventDefault();
};
form.addEventListener("submit", sendMessageListener);
sendButton.addEventListener('click', sendMessageListener)
const sendMessage = (msg) => {
  if (msg) {
    socket.emit("msg", msg);
    let node = document.createElement("div");
    node.className = "sent";
    node.innerHTML = msg;
    inputField.value = "";
    messageContainer.appendChild(node);
  }
};

const receiveMessage = (msg) => {
    if (msg) {
      let node = document.createElement("div");
      node.className = "received";
      node.innerHTML = msg;
      messageContainer.appendChild(node);
    }
  };

