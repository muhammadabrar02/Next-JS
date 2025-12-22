import { useState } from "react";
import axios from "axios";
import "./chat.css";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const currentInput = input;

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(
        "https://backend-deploy-yt.onrender.com/chat",
        { message: currentInput },
        { headers: { "Content-Type": "application/json" } }
      );

      const botReply =
        res.data.reply ||
        res.data.response ||
        res.data.message ||
        "No response from server";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply },
      ]);
    } catch (err) {
      const errorMsg =
        err.response?.data?.error ||
        err.message ||
        "Unable to reach server";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Error: ${errorMsg}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="chat-widget">
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬 AI Chat
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <span>AI Assistant</span>
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.sender}`}>
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="chat-bubble bot typing">
                Typing…
              </div>
            )}
          </div>

          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about robotics, AI, ROS2..."
              disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
