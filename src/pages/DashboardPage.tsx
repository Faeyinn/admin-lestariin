import React, { useState } from 'react';
import { FileText, Trash2, Droplet, Axe, Flame, MessageSquare } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/dashboard/Header';
import StatCard from '@/components/dashboard/StatCard';
import MapView from '@/components/dashboard/MapView';
import ChartCard from '@/components/dashboard/ChartCard';
import WaterQualityCard from '@/components/dashboard/WaterQualityCard';

const DashboardPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Total Laporan',
      subtitle: 'Total Laporan',
      value: '450',
      icon: FileText,
      color: 'green',
      delay: 0,
    },
    {
      title: 'Sampah',
      subtitle: 'Total Laporan',
      value: '150',
      icon: Trash2,
      color: 'green',
      delay: 100,
    },
    {
      title: 'Kualitas Air',
      subtitle: 'Total Laporan',
      value: '100',
      icon: Droplet,
      color: 'green',
      delay: 200,
    },
    {
      title: 'Penebangan Hutan',
      subtitle: 'Total Laporan',
      value: '50',
      icon: Axe,
      color: 'green',
      delay: 300,
    },
    {
      title: 'Pembakaran Hutan',
      subtitle: 'Total Laporan',
      value: '50',
      icon: Flame,
      color: 'green',
      delay: 400,
    },
  ];

  return (
    <div className="flex h-screen bg-linear-to-br from-green-50 via-cyan-50 to-blue-50 overflow-hidden">
      {/* Sidebar (fixed, melayang) */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden ml-0 lg:ml-[calc(18rem+1.5rem)]">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-[1600px] mx-auto">
            {/* Map Section */}
            <div className="mb-6" data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-4 h-[400px] md:h-[500px]">
                <MapView />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  subtitle={stat.subtitle}
                  value={stat.value}
                  icon={stat.icon}
                  color={stat.color}
                  delay={stat.delay}
                />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Chart */}
              <div className="lg:col-span-2">
                <ChartCard />
              </div>

              {/* Water Quality Card */}
              <div className="lg:col-span-1">
                <WaterQualityCard />
              </div>
            </div>
          </div>
        </main>

        {/* Floating Chatbot Button - Kanan Bawah */}
        <button className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110">
          <MessageSquare size={28} className="text-white" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;