"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Surya's AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Auto-expand briefly when page loads
  useEffect(() => {
    // Wait a moment after page load, then show expanded state briefly
    const timer = setTimeout(() => {
      setIsExpanded(true);
      
      // After showing expanded state, collapse back
      const collapseTimer = setTimeout(() => {
        setIsExpanded(false);
        setHasAnimated(true);
      }, 3000);
      
      return () => clearTimeout(collapseTimer);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending a message
  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages([...messages, { text: inputValue, isBot: false }]);
    setInputValue("");

    // Simulate bot response (replace with your actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for asking! Surya is an AI and ML expert with experience in computer vision and NLP. Would you like to know more about his projects or skills?", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Bubble Button with Bounce Animation */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          y: [0, -15, 0] // Bouncing animation
        }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: 1,
          y: {
        repeat: hasAnimated ? 0 : Infinity,
        repeatType: "reverse",
        duration: 1.2,
        repeatDelay: 2
          }
        }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.button
          onClick={toggleChat}
          className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            width: isExpanded ? 'auto' : '70px',
            height: isExpanded ? '60px' : '70px',
            borderRadius: isExpanded ? '30px' : '35px',
          }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <div className="flex items-center px-5 py-3 space-x-3">
              <span className="whitespace-nowrap font-medium">Chat with Surya's AI Assistant</span>
              <div className="relative flex-shrink-0">
                <Image 
                  src="/images/profile/chatbot-avatar.png" 
                  alt="AI Assistant" 
                  width={40} 
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <motion.div 
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
            </div>
          ) : (
            <div className="relative">
              <Image 
                src="/images/profile/chatbot-avatar.png" 
                alt="AI Assistant" 
                width={50} 
                height={50}
                className="rounded-full border-2 border-white"
              />
              <motion.div 
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{ maxHeight: '500px' }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/images/profile/chatbot-avatar.png" 
                  alt="AI Assistant" 
                  width={32} 
                  height={32}
                  className="rounded-full"
                />
                <span className="font-medium text-white">Surya's AI Assistant</span>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`mb-3 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isBot 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <form onSubmit={sendMessage} className="bg-gray-800 p-3 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Surya..."
                  className="flex-1 bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={!inputValue.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}