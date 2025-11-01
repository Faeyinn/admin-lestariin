import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import ChatHeader from '@/components/chatbot/ChatHeader';
import ChatInterface from '@/components/chatbot/ChatInterface';

const ChatbotPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!token || !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 overflow-hidden">
      {/* Sidebar (dari komponen Tuan yang ada) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Konten Utama */}
      <div className="flex-1 flex flex-col overflow-hidden ml-0 lg:ml-[calc(18rem+1.5rem)]">
        {/* Header Khusus untuk Halaman Chat */}
        <ChatHeader onMenuClick={() => setSidebarOpen(true)} />

        <main
          className="flex-1 overflow-hidden p-4 md:p-6"
          data-aos="fade-in"
        >
          <div className="h-full max-w-[1600px] mx-auto">
            <ChatInterface />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatbotPage;