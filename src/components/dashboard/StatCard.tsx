import React from 'react';
import { type LucideIcon } from 'lucide-react';
import BgStat from '@/assets/bg-stat-card.png';

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  subtitle,
  value,
  icon: Icon,
  color,
  delay = 0
}) => {

  const iconColorClasses: { [key: string]: string } = {
    green: 'text-green-800',
    blue: 'text-blue-800',
    cyan: 'text-cyan-800',
    orange: 'text-orange-800',
    red: 'text-red-800',
  };

  const iconColorClass = iconColorClasses[color] ?? 'text-green-800';

  return (
    <div
      className={`rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer bg-cover bg-center`}
      style={{ backgroundImage: `url(${BgStat})` }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* subtle overlay using color to keep readable text */}
      <div className="absolute inset-0 rounded-2xl" style={{ background: 'rgba(16, 185, 129, 0.25)' }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm opacity-90">{subtitle}</p>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="bg-white bg-opacity-20 p-3 rounded-xl flex items-center justify-center">
            <Icon size={24} className={`${iconColorClass}`} />
          </div>
        </div>
        <p className="text-4xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;