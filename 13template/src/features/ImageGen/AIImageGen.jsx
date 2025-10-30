import React, { useState } from 'react';

export default function AIImageGen() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setLoading(true);
    setTimeout(() => {
      setImage('https://via.placeholder.com/300x180?text=AI+Image'); // Fake image placeholder
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="border p-2 rounded w-full mb-2"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Describe image..."
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-2"
        disabled={loading}
        onClick={handleGenerate}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>
      <div className="mt-4">
        {image && <img src={image} alt="Generated" className="rounded shadow-md" />}
      </div>
    </div>
  );
}
