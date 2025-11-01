import React, { useState, useMemo } from 'react';
import { FileText, CheckCircle, Clock, XCircle } from 'lucide-react';
import Swal from 'sweetalert2';
import Sidebar from '@/components/Sidebar';
import ReportHeader from '@/components/laporan/ReportHeader';
import ReportStatCard from '@/components/laporan/ReportStatCard';
import ReportCard from '@/components/laporan/ReportCard';
import Pagination from '@/components/laporan/Pagination';
import FilterModal, { type FilterState } from '@/components/laporan/FilterModal';
import { reportsData, type Report } from '@/utils/reportData';

const LaporanPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    status: '',
    dateFrom: '',
    dateTo: '',
  });

  const itemsPerPage = 15;

  // Calculate statistics
  const stats = useMemo(() => {
    const total = reportsData.length;
    const verified = reportsData.filter((r) => r.status === 'Diverifikasi').length;
    const unverified = reportsData.filter((r) => r.status === 'Belum Diverifikasi').length;
    const rejected = reportsData.filter((r) => r.status === 'Verifikasi Ditolak').length;

    return { total, verified, unverified, rejected };
  }, []);

  // Filter and search reports
  const filteredReports = useMemo(() => {
    return reportsData.filter((report) => {
      // Search filter
      const matchesSearch =
        report.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.author.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        !filters.category || report.category === filters.category;

      // Status filter
      const matchesStatus = !filters.status || report.status === filters.status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
  const paginatedReports = filteredReports.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterApply = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleExport = () => {
    Swal.fire({
      title: 'Export Laporan',
      text: 'Pilih format export',
      icon: 'question',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: 'Excel',
      denyButtonText: 'PDF',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#22c55e',
      denyButtonColor: '#3b82f6',
      cancelButtonColor: '#6b7280',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Export Excel',
          text: 'Laporan berhasil diexport ke Excel!',
          icon: 'success',
          confirmButtonColor: '#22c55e',
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Export PDF',
          text: 'Laporan berhasil diexport ke PDF!',
          icon: 'success',
          confirmButtonColor: '#3b82f6',
        });
      }
    });
  };

  const statCards = [
    {
      title: 'Total Laporan',
      subtitle: 'Total Laporan',
      value: stats.total,
      icon: FileText,
      gradient: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
      delay: 0,
    },
    {
      title: 'Diverifikasi',
      subtitle: 'Laporan',
      value: stats.verified,
      icon: CheckCircle,
      gradient: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
      delay: 100,
    },
    {
      title: 'Belum Diverifikasi',
      subtitle: 'Laporan',
      value: stats.unverified,
      icon: Clock,
      gradient: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
      delay: 200,
    },
    {
      title: 'Verifikasi Ditolak',
      subtitle: 'Laporan',
      value: stats.rejected,
      icon: XCircle,
      gradient: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
      delay: 300,
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden ml-0 lg:ml-[calc(18rem+1.5rem)]">
        {/* Header */}
        <ReportHeader
          onMenuClick={() => setSidebarOpen(true)}
          onFilterClick={() => setFilterOpen(true)}
          onExportClick={handleExport}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-[1600px] mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {statCards.map((stat, index) => (
                <ReportStatCard
                  key={index}
                  title={stat.title}
                  subtitle={stat.subtitle}
                  value={stat.value}
                  icon={stat.icon}
                  gradient={stat.gradient}
                  delay={stat.delay}
                />
              ))}
            </div>

            {/* Reports Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Daftar Laporan
              </h2>

              {/* Report Cards */}
              {paginatedReports.length > 0 ? (
                <>
                  {paginatedReports.map((report, index) => (
                    <ReportCard
                      key={report.id}
                      {...report}
                      delay={index * 50}
                    />
                  ))}

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    totalItems={filteredReports.length}
                    itemsPerPage={itemsPerPage}
                  />
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Tidak ada laporan yang ditemukan
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={handleFilterApply}
      />
    </div>
  );
};

export default LaporanPage;