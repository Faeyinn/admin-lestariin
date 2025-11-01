import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import DetailReportHeader from '@/components/laporan/DetailReportHeader';
import DetailReportContent from '@/components/laporan/DetailReportContent';
import { type Report } from '@/utils/reportData';

// Dummy data untuk halaman ini, Tuan bisa ganti dengan data asli nanti
const dummyReport: Report = {
  id: 3,
  image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1000&h=800&fit=crop', // Gambar dari desain
  status: 'Menunggu Verifikasi',
  category: 'Sampah',
  tags: ['Banyak Sampah', 'Sampah Anorganik'],
  location: 'Lembah Harau',
  description: 'Banyaknya sampah di area ini yang membuat warga resah',
  author: 'Budi Herman',
  date: 'October 25, 2025',
};

// Koordinat fiktif untuk peta (Lembah Harau)
const mapPosition: [number, number] = [-0.103, 100.602];

const DetailLaporanPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 overflow-hidden">
      {/* Sidebar yang sudah ada dari project Tuan */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden ml-0 lg:ml-[calc(18rem+1.5rem)]">
        {/* Header baru untuk halaman detail */}
        <DetailReportHeader onMenuClick={() => setSidebarOpen(true)} />

        {/* Konten Utama */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6" data-aos="fade-in">
          <div className="max-w-[1600px] mx-auto">
            <DetailReportContent report={dummyReport} position={mapPosition} />
          </div>
        </main>

        {/* Tombol Chatbot (sama seperti di halaman lain) */}
        <button className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110">
          <MessageSquare size={28} className="text-white" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        </button>
      </div>
    </div>
  );
};

export default DetailLaporanPage;