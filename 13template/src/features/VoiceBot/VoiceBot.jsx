import React, { useState } from 'react';

export default function VoiceBot() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [reply, setReply] = useState('');

  function handleListen() {
    setListening(true);
    setTranscript('Listening... (simulated)');
    setTimeout(() => {
      setTranscript('User said: Hello');
      setReply('AI (voice) replies: Hi, how can I help?');
      setListening(false);
    }, 1500); // Simulate voice input and AI reply
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className={`px-4 py-2 rounded ${listening ? 'bg-gray-400' : 'bg-purple-500 text-white'}`}
        onClick={handleListen}
        disabled={listening}
      >
        🎙️ {listening ? 'Listening...' : 'Start Voice Bot'}
      </button>
      {transcript && <div className="text-gray-700">{transcript}</div>}
      {reply && <div className="text-green-600">{reply}</div>}
    </div>
  );
}
