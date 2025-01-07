"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm your AI assistant. Ask me anything about Surya!" },
  ]);
  const [input, setInput] = useState("");
  const [showText, setShowText] = useState(false); // Control text animation

  // Show floating text smoothly when the page loads
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 500); // Delay to make it appear smoothly
  }, []);

  // Predefined chatbot responses
  const responses: { [key: string]: string } = {
    "who are you": "I'm an AI chatbot that helps you learn more about Suryaprakash Uppalapati!",
    "what are your skills": "Suryaprakash is skilled in Machine Learning, Python, SQL, AWS, and Deep Learning.",
    "what projects have you worked on": "Some key projects: Rolex Price Prediction, Diamond Price Estimation, and AI-powered recommendations.",
    "where can I see your GitHub": "Check out my GitHub: [GitHub](https://github.com/suryaprakash737).",
    "how can I contact you": "LinkedIn: [LinkedIn](https://www.linkedin.com/in/suryaprakash55) | Email: suppala6@gmu.edu",
    "show resume": "Download my resume here: [Resume](/resume).",
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const botResponse = responses[input.toLowerCase()] || "🤖 Sorry, I don't understand that. Try asking about skills, projects, or contact info.";
    setTimeout(() => {
      setMessages([...messages, userMessage, { sender: "bot", text: botResponse }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-center">
      {/* Floating Text (Always Visible) */}
      {showText && (
        <div className="mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg transition-opacity duration-700 opacity-100 animate-fade-in">
          Ask me something about Surya
        </div>
      )}

      {/* Chatbot Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <Image src="/chatbot-avatar.png" width={50} height={50} alt="Chatbot Avatar" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-gray-900 text-white rounded-lg shadow-lg p-4 mt-3 absolute bottom-20 right-0">
          <h3 className="text-lg font-semibold">Ask Me Anything! 🤖</h3>
          <div className="h-48 overflow-y-auto p-2 border border-gray-700 rounded">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 p-2 rounded ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="mt-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              className="flex-1 p-2 bg-gray-800 text-white border border-gray-700 rounded-l"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 px-4 py-2 rounded-r hover:bg-green-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
