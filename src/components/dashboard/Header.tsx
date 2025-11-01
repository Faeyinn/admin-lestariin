import React from 'react';
import { Search, Filter, User, Menu, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-linear-to-r from-green-50 to-cyan-50 p-4 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        {/* Menu Button (Mobile) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-white rounded-lg transition-colors"
        >
          <Menu size={24} className="text-gray-700" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Telusuri Lokasi"
              className="w-full pl-4 pr-10 py-2.5 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition-colors"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Filter Button */}
        <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors">
          <Filter size={18} />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* Chat Button */}
        <button className="relative p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all">
          <MessageSquare size={22} className="text-gray-700" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all">
          <div className="w-10 h-10 bg-linear-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <span className="hidden md:block font-semibold text-gray-800">Admin</span>
        </div>

        {/* Logout Icon */}
        <button className="hidden lg:block p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-red-50">
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
    </header>
  );
};

export default Header;