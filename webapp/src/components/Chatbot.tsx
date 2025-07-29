import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Sparkles } from 'lucide-react';

interface Message {
  sender: 'user' | 'angel';
  text: string;
}

const Chatbot: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'angel', text: 'Hello! How can I help you today?' },
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('http://localhost:8080/api/openai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const angelReply: Message = { sender: 'angel', text: data.response };
      setMessages((prev) => [...prev, angelReply]);
    } catch (err) {
      console.error('Error fetching angel reply:', err);
      const errorReply: Message = {
        sender: 'angel',
        text: 'Something went wrong. Try again later.',
      };
      setMessages((prev) => [...prev, errorReply]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col h-full p-4 space-y-3">
      <div className="flex items-center space-x-2">
        <Sparkles className="text-yellow-500" />
        <h2 className="text-xl font-semibold text-gray-800">AlchemyAI</h2>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-2 px-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded-xl px-4 py-2 max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-100 self-end text-right text-blue-900'
                : 'bg-purple-100 self-start text-purple-900'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Ask the Chatbot..."
          className="flex-grow rounded-xl px-3 py-2 border focus:outline-none focus:ring focus:ring-purple-300 text-sm"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-2 rounded-xl text-sm hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

