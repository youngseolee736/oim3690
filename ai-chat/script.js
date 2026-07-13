const chatForm = document.querySelector("#chat-form");
const questionInput = document.querySelector("#question");
const sendButton = document.querySelector("#send-button");
const chat = document.querySelector("#chat");

// Every past user question and AI answer is stored in this array.
const messages = [
  {
    role: "assistant",
    content: "Hi! The chat interface is ready. AI responses will work after the course API is connected."
  }
];

async function askAI(question) {
  // Replace this function with the askAI helper from the course slides.
  // The helper should use COURSE_API_KEY from config.js and return answer text.
  throw new Error("Add the askAI helper from the course slides first.");
}

function renderMessages() {
  chat.replaceChildren();

  for (const item of messages) {
    const message = document.createElement("div");
    message.classList.add("message", item.role);
    message.textContent = item.content;
    chat.appendChild(message);
  }

  chat.scrollTop = chat.scrollHeight;
}

function addMessage(role, content) {
  messages.push({ role, content });
  renderMessages();
}

chatForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const question = questionInput.value.trim();

  if (question === "") {
    return;
  }

  addMessage("user", question);
  chatForm.reset();
  sendButton.disabled = true;
  sendButton.textContent = "Thinking...";

  try {
    const answer = await askAI(question);
    addMessage("assistant", answer);
  } catch (error) {
    addMessage(
      "assistant",
      "AI connection is not set up yet. Your question is saved in this chat."
    );
    console.error(error);
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = "Send";
    questionInput.focus();
  }
});

renderMessages();
