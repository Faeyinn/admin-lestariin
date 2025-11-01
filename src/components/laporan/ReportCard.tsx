import React from 'react';
import Swal from 'sweetalert2';

interface ReportCardProps {
  id: number;
  image: string;
  status: string;
  category: string;
  tags: string[];
  location: string;
  description: string;
  author: string;
  date: string;
  delay?: number;
}

const ReportCard: React.FC<ReportCardProps> = ({
  id,
  image,
  status,
  category,
  tags,
  location,
  description,
  author,
  date,
  delay = 0,
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case 'sampah':
        return 'text-red-600';
      case 'kualitas air':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const getTagColor = (tag: string) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('sampah')) return 'bg-red-100 text-red-700';
    if (tagLower.includes('air')) return 'bg-blue-100 text-blue-700';
    if (tagLower.includes('anorganik')) return 'bg-yellow-100 text-yellow-700';
    return 'bg-gray-100 text-gray-700';
  };

  const handleVerifikasi = () => {
    Swal.fire({
      title: 'Verifikasi Laporan',
      text: `Apakah Anda yakin ingin memverifikasi laporan ini?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#22c55e',
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
      text: 'Apakah Anda yakin ingin menolak laporan ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
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
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 mb-4"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={category}
            className="w-full md:w-40 h-40 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between mb-2">
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Status <span className="ml-2">: {status}</span>
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm font-semibold">Kategori :</span>
                <span className={`font-bold ${getCategoryColor(category)}`}>
                  {category}
                </span>
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-3 py-1 rounded-full font-medium ${getTagColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">{author}</p>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>

          <p className="text-sm mb-1">
            <span className="font-semibold">Lokasi</span>
            <span className="ml-2">: {location}</span>
          </p>

          <div className="mb-3">
            <p className="text-sm font-semibold mb-1">Deskripsi</p>
            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleVerifikasi}
              className="flex-1 sm:flex-none px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
            >
              Verifikasi
            </button>
            <button
              onClick={handleTolak}
              className="flex-1 sm:flex-none px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
            >
              Tolak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;