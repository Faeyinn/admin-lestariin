import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

interface DetailReportActionsProps {
  reportId: number;
}

const DetailReportActions: React.FC<DetailReportActionsProps> = ({
  reportId,
}) => {
  const navigate = useNavigate();

  const handleVerifikasi = () => {
    Swal.fire({
      title: 'Verifikasi Laporan',
      text: `Apakah Anda yakin ingin memverifikasi laporan #${reportId}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#22c55e', // Warna hijau
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Ya, Verifikasi!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Terverifikasi!',
          text: 'Laporan berhasil diverifikasi.',
          icon: 'success',
          confirmButtonColor: '#22c55e',
        });
      }
    });
  };

  const handleTolak = () => {
    Swal.fire({
      title: 'Tolak Laporan',
      text: `Apakah Anda yakin ingin menolak laporan #${reportId}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444', // Warna merah
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Ya, Tolak!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Ditolak!',
          text: 'Laporan telah ditolak.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      }
    });
  };

  return (
    <div
      className="flex flex-col gap-3 lg:sticky lg:top-28" // Dibuat sticky di desktop
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <button
        onClick={() => navigate('/laporan')}
        className="w-full px-4 py-2.5 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        Kembali
      </button>
      <button
        onClick={handleVerifikasi}
        className="w-full px-4 py-2.5 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-colors"
      >
        Verifikasi
      </button>
      <button
        onClick={handleTolak}
        className="w-full px-4 py-2.5 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition-colors"
      >
        Tolak
      </button>
    </div>
  );
};

export default DetailReportActions;