import React from 'react';
import { User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/utils/auth';

interface ChatHeaderProps {
  onMenuClick: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className="bg-gradient-to-r from-green-50 to-cyan-50 p-4 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Sisi Kiri: Tombol Menu (Mobile) & Judul "Chat" */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-white rounded-lg transition-colors"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Chat
          </h1>
        </div>

        {/* Sisi Kanan: Profil Admin & Logout (Sama seperti header Tuan) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <span className="hidden md:block font-semibold text-gray-800">
              Admin
            </span>
          </div>
          <button 
            onClick={handleLogout}
            className="hidden lg:block p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-red-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;