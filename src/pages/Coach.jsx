import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import './Coach.css';

const INITIAL_MESSAGES = [
  { id: 1, sender: 'bot', text: "Hey! I'm your AI Fit Buddy. How are you feeling today?" }
];

const QUICK_REPLIES = [
  "I slept badly",
  "My legs are sore",
  "I have 15 minutes"
];

const Coach = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    // Mock AI reply
    setTimeout(() => {
      let replyText = "I've updated your plan based on that. Let's take it easy and focus on mobility today.";
      if (text.includes('15 minutes')) {
        replyText = "Got it. I've switched your workout to a 15-minute high-intensity core circuit. Let's make every minute count!";
      } else if (text.includes('sore')) {
        replyText = "Recovery is important. I've scheduled a gentle stretching routine to help with the soreness.";
      }

      const newBotMsg = { id: Date.now() + 1, sender: 'bot', text: replyText };
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="page-coach">
      <div className="chat-container">
        <div className="messages-area">
          {messages.map(msg => (
            <div key={msg.id} className={`message-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="message-bubble bot typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-replies">
          {QUICK_REPLIES.map(reply => (
            <button 
              key={reply} 
              className="quick-reply-btn"
              onClick={() => handleSend(reply)}
            >
              {reply}
            </button>
          ))}
        </div>

        <form 
          className="chat-input-form"
          onSubmit={(e) => { e.preventDefault(); handleSend(inputText); }}
        >
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className="send-btn" disabled={!inputText.trim()}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Coach;
