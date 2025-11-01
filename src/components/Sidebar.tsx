import React from 'react';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import IconSrc from '@/assets/icon.png';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: FileText, label: 'Laporan', path: '/laporan' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    // floating sidebar: fixed with offset from left/top, rounded, heavy shadow
    <aside className="hidden lg:flex flex-col w-72 h-[calc(100vh-64px)] bg-gradient-to-b from-green-700 to-green-800 text-white shadow-2xl rounded-2xl fixed left-6 top-6 z-40 ring-1 ring-black/10 overflow-hidden">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <img src={IconSrc} alt="Lestari.in" className="w-10 h-10 object-contain" />
        </div>
        <span className="text-2xl font-bold">Lestari.in</span>
      </div>
      {/* Menu */}
      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                isActive
                  ? 'bg-white text-green-800 font-semibold shadow-lg'
                  : 'text-white hover:bg-green-600'
              }`}
            >
              <Icon size={22} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
      {/* Logout */}
      <div className="p-4 mt-auto">
        <button
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            window.location.href = '/';
          }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white hover:bg-red-600 transition-all"
        >
          <LogOut size={22} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;