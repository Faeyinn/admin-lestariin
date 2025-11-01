import React from 'react';
import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const ChartCard: React.FC = () => {
  const data = [
    { month: 'Senin', Sampah: 30, 'Kualitas Air': 20, 'Penebangan Hutan': 15, 'Pembakaran Hutan': 10 },
    { month: 'Selasa', Sampah: 35, 'Kualitas Air': 25, 'Penebangan Hutan': 18, 'Pembakaran Hutan': 12 },
    { month: 'Rabu', Sampah: 45, 'Kualitas Air': 40, 'Penebangan Hutan': 22, 'Pembakaran Hutan': 15 },
    { month: 'Kamis', Sampah: 55, 'Kualitas Air': 45, 'Penebangan Hutan': 28, 'Pembakaran Hutan': 20 },
    { month: 'Jumat', Sampah: 70, 'Kualitas Air': 35, 'Penebangan Hutan': 25, 'Pembakaran Hutan': 18 },
    { month: 'Sabtu', Sampah: 50, 'Kualitas Air': 30, 'Penebangan Hutan': 20, 'Pembakaran Hutan': 14 },
    { month: 'Minggu', Sampah: 45, 'Kualitas Air': 28, 'Penebangan Hutan': 18, 'Pembakaran Hutan': 12 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up" data-aos-delay="400">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSampah" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorKualitasAir" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorPenebangan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorPembakaran" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
          <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px' }}
            iconType="circle"
          />
          <Area
            type="monotone"
            dataKey="Sampah"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorSampah)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="Kualitas Air"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorKualitasAir)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="Penebangan Hutan"
            stroke="#f59e0b"
            fillOpacity={1}
            fill="url(#colorPenebangan)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="Pembakaran Hutan"
            stroke="#ef4444"
            fillOpacity={1}
            fill="url(#colorPembakaran)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;