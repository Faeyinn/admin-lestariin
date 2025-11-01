import React from 'react';

const WaterQualityCard: React.FC = () => {
  const cleanWater = 67;
  const dirtyWater = 33;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6" data-aos="fade-up" data-aos-delay="500">
      <h3 className="text-sm text-gray-600 mb-2">Rasio Kualitas Air</h3>
      <h2 className="text-xl font-bold text-gray-800 mb-6">Air Jernih & Air Keruh</h2>
      
      <div className="flex items-end justify-center gap-8 mb-6">
        {/* Clean Water Bar */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-48 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="absolute bottom-0 w-full bg-blue-500 transition-all duration-1000 ease-out rounded-t-lg"
              style={{ height: `${cleanWater}%` }}
              data-aos="slide-up"
              data-aos-delay="600"
            />
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-800">{cleanWater}%</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-gray-600">Air Jernih</span>
          </div>
        </div>

        {/* Dirty Water Bar */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-48 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="absolute bottom-0 w-full bg-amber-700 transition-all duration-1000 ease-out rounded-t-lg"
              style={{ height: `${dirtyWater}%` }}
              data-aos="slide-up"
              data-aos-delay="700"
            />
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-800">{dirtyWater}%</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 bg-amber-700 rounded-full" />
            <span className="text-sm text-gray-600">Air Keruh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterQualityCard;