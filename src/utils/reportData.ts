export interface Report {
  id: number;
  image: string;
  status: string;
  category: string;
  tags: string[];
  location: string;
  description: string;
  author: string;
  date: string;
}

export const reportsData: Report[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=400',
    status: 'Menunggu Verifikasi',
    category: 'Sampah',
    tags: ['Banyak Sampah'],
    location: 'Padang',
    description: 'Banyaknya sampah di area ini yang membuat warga resah',
    author: 'Budi Herman',
    date: 'October 25, 2025',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400',
    status: 'Menunggu Verifikasi',
    category: 'Kualitas Air',
    tags: ['Air Keruh'],
    location: 'Padang Pariaman',
    description: 'Air keruh membuat warga kesulitan mendapatkan air bersih',
    author: 'Budi Herman',
    date: 'October 25, 2025',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400',
    status: 'Menunggu Verifikasi',
    category: 'Sampah',
    tags: ['Banyak Sampah'],
    location: 'Lembah Harau',
    description: 'Banyaknya sampah di area ini yang membuat warga resah',
    author: 'Budi Herman',
    date: 'October 25, 2025',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400',
    status: 'Menunggu Verifikasi',
    category: 'Sampah',
    tags: ['Banyak Sampah', 'Sampah Anorganik'],
    location: 'Bukittinggi',
    description: 'Tumpukan sampah anorganik mengganggu pemandangan dan kesehatan',
    author: 'Budi Herman',
    date: 'October 25, 2025',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400',
    status: 'Diverifikasi',
    category: 'Sampah',
    tags: ['Sampah Organik'],
    location: 'Payakumbuh',
    description: 'Sampah organik menumpuk di pasar tradisional',
    author: 'Siti Aminah',
    date: 'October 24, 2025',
  },
];