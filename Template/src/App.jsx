import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TabNav from './components/TabNav';
import Card from './components/Card';
import ZoomMeetingEmbed from './features/ZoomMeetingEmbed';
import AIChatbot from './features/Chatbot';
import AIImageGen from './features/Image';
import VoiceBot from './features/VoiceBot';
import CourseAnalyticsDashboard from './features/Dashboard';

const TABS = [
  { id: 'zoom', label: 'Zoom Meeting' },
  { id: 'chat', label: 'AI Chatbot' },
  { id: 'image', label: 'AI Image Gen' },
  { id: 'voice', label: 'Voice Bot' },
  { id: 'dashboard', label: 'Analytics' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col items-center mt-4">
        <TabNav tabs={TABS} activeTab={activeTab} onTabSwitch={setActiveTab} />
        <div className="w-full max-w-4xl p-4">
          {activeTab === 'zoom' && <Card title="Zoom Meeting"><ZoomMeetingEmbed /></Card>}
          {activeTab === 'chat' && <Card title="AI Chatbot"><AIChatbot /></Card>}
          {activeTab === 'image' && <Card title="AI Image Generator"><AIImageGen /></Card>}
          {activeTab === 'voice' && <Card title="Voice Bot"><VoiceBot /></Card>}
          {activeTab === 'dashboard' && <Card title="Course Analytics"><CourseAnalyticsDashboard /></Card>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
