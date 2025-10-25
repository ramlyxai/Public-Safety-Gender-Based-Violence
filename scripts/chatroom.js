
document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");

  let nickname = generateNickname();
  loadChatHistory();

  // Event listener for Send button
  sendBtn.addEventListener("click", () => {
    const message = input.value.trim();
    if (message !== "") {
      displayUserMessage(message);
      handleBotResponse(message);
      saveMessage(nickname, message);
      input.value = "";
    }
  });

  // Generate anonymous nickname
  function generateNickname() {
    const adjectives = ["Brave", "Kind", "Strong", "Hopeful", "Gentle", "Bright", "Calm", "Wise"];
    const animals = ["Lion", "Dove", "Phoenix", "Otter", "Elephant", "Fox", "Butterfly", "Falcon"];
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    return `${adj}${animal}`;
  }

  // Display user message
  function displayUserMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "message user";
    msgDiv.innerHTML = `<strong>${nickname}:</strong> ${text} <span class="timestamp">${getTimestamp()}</span>`;
    chatBox.appendChild(msgDiv);
    scrollToBottom();
  }

  // Display bot response
  function respond(text) {
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerHTML = `<strong>Support Bot:</strong> ${text} <span class="timestamp">${getTimestamp()}</span>`;
    chatBox.appendChild(botDiv);
    scrollToBottom();
  }

  // Get current time
  function getTimestamp() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Scroll to latest message
  function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Handle bot logic based on user input
  function handleBotResponse(message) {
    const msg = message.toLowerCase();

    const badKeywords = ["bad", "terrible", "awful", "rough", "sad", "depressed", "not good", "horrible", "pain", "hurt"];
    const goodKeywords = ["good", "great", "awesome", "fantastic", "amazing", "okay", "fine", "happy", "joy", "peace"];
    const mixedKeywords = ["meh", "confused", "tired", "drained", "neutral"];

    if (msg.includes("bye") || msg.includes("goodbye")) {
      respond("Thank you for chatting today 💙 You're never alone. Take care.");
      saveMessage("Support Bot", "Goodbye message sent.");
      return;
    }

    if (containsKeyword(msg, badKeywords)) {
      respond("I'm really sorry to hear that 💙 Would you like to share what happened today?");
      followUp("You can start wherever feels comfortable. We're here to listen.");
    } else if (containsKeyword(msg, goodKeywords)) {
      respond("That's wonderful to hear! 😊 What made your day so good?");
      followUp("Feel free to share the highlights or moments that brought you joy.");
    } else if (containsKeyword(msg, mixedKeywords)) {
      respond("Sounds like it was a mixed day. Want to talk about what stood out?");
      followUp("Sometimes even small things can weigh us down. You're safe here.");
    } else {
      respond("Thanks for sharing. Would you like to tell me more about your day?");
      followUp("Whether it was quiet or chaotic, your story matters.");
    }
  }

  // Follow-up message
  function followUp(text) {
    setTimeout(() => {
      respond(text);
    }, 1500);
  }

  // Keyword matching
  function containsKeyword(text, keywords) {
    return keywords.some(keyword => text.includes(keyword));
  }

  // Save message to localStorage
  function saveMessage(sender, text) {
    const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
    history.push({ sender, text, time: getTimestamp() });
    localStorage.setItem("chatHistory", JSON.stringify(history));
  }

  // Load chat history
  function loadChatHistory() {
    const history = JSON.parse(localStorage.getItem("chatHistory")) || [];
    history.forEach(entry => {
      const msgDiv = document.createElement("div");
      msgDiv.className = entry.sender === "Support Bot" ? "message bot" : "message user";
      msgDiv.innerHTML = `<strong>${entry.sender}:</strong> ${entry.text} <span class="timestamp">${entry.time}</span>`;
      chatBox.appendChild(msgDiv);
    });
    scrollToBottom();
    setTimeout(() => {
      respond("Hi there 👋 How are you feeling today?");
    }, 500);
  }

  // Clear chat history (optional for teaching)
  function clearHistory() {
    localStorage.removeItem("chatHistory");
    chatBox.innerHTML = "";
    respond("Chat history cleared.");
  }

  // Optional: detect enter key
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });

  // Optional: detect long silence
  let idleTimer;
  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      respond("Still here if you need me 💬");
    }, 60000); // 1 minute
  }

  document.addEventListener("mousemove", resetIdleTimer);
  document.addEventListener("keydown", resetIdleTimer);
  resetIdleTimer();

  // Optional: emoji reactions
  function reactToEmotion(message) {
    if (message.includes("cry")) {
      respond("😢 It's okay to cry. You're safe here.");
    } else if (message.includes("laugh")) {
      respond("😂 Laughter is healing. What made you laugh?");
    } else if (message.includes("angry")) {
      respond("😠 It's valid to feel angry. Want to talk about it?");
    }
  }

  // Optional: detect emotion words
  function detectEmotion(message) {
    const emotions = ["cry", "laugh", "angry", "scared", "lonely"];
    emotions.forEach(emotion => {
      if (message.toLowerCase().includes(emotion)) {
        reactToEmotion(emotion);
      }
    });
  }

  // Optional: nickname reminder
  setTimeout(() => {
    respond(`You're chatting as <strong>${nickname}</strong>. You can stay anonymous.`);
  }, 3000);

  // Optional: daily check-in
  const lastVisit = localStorage.getItem("lastVisit");
  const today = new Date().toDateString();
  if (lastVisit !== today) {
    respond("Welcome back 💙 How are you feeling today?");
    localStorage.setItem("lastVisit", today);
  }
});