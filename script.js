document.getElementById("sendBtn").addEventListener("click", () => {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value.trim();
  if (userText) {
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userText;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("p");
    botMessage.textContent = "Ava: I’m here, let’s keep building 💡";
    chatBox.appendChild(botMessage);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
