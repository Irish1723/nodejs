import React, { useState } from 'react';

export default function AIChatbot() {
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Chat with your AI tutor.' },
  ]);
  const [input, setInput] = useState('');

  function handleSend() {
    if (!input) return;
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', text: 'AI response or summary...' }]);
    }, 500); // Simulated API call
    setInput('');
  }

  return (
    <div className="flex flex-col h-64">
      <div className="flex-1 overflow-y-auto mb-2 bg-gray-50 p-2 border rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 p-2 rounded ${msg.type === 'user' ? 'bg-blue-100 self-end' : 'bg-green-100 self-start'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a question..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}
