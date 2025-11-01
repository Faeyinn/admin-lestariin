import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L, { type LatLngExpression } from 'leaflet';
import { Trash2, Flame, Droplet, User } from 'lucide-react';
// Custom icon generator for Lucide icons
const createLucideIcon = (icon: React.ReactElement, bg: string) => {
  const svg = renderToStaticMarkup(icon);
  return L.divIcon({
    html: `<div style="background:${bg};border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;">
      ${svg}
    </div>`,
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  });
};

const markerData = [
  {
    id: 1,
    type: 'fire',
    position: [-0.914, 100.460],
    title: 'Pembakaran Hutan',
    description: 'Area pembakaran',
    color: '#ef4444',
    icon: <Flame size={20} />,
  },
  {
    id: 2,
    type: 'fire',
    position: [-0.916, 100.465],
    title: 'Titik Api',
    description: 'Hotspot terdeteksi',
    color: '#ef4444',
    icon: <Flame size={20} />,
  },
  {
    id: 3,
    type: 'trash',
    position: [-0.912, 100.462],
    title: 'Sampah',
    description: 'Belum dikonfirmasi',
    date: '01 Nov 2025',
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=400',
    color: '#22c55e',
    icon: <Trash2 size={20} />,
  },
  {
    id: 4,
    type: 'trash',
    position: [-0.915, 100.468],
    title: 'TPS',
    description: 'Tempat pengumpulan',
    color: '#22c55e',
    icon: <Trash2 size={20} />,
  },
  {
    id: 5,
    type: 'trash',
    position: [-0.917, 100.461],
    title: 'Bank Sampah',
    description: 'Aktif',
    color: '#22c55e',
    icon: <Trash2 size={20} />,
  },
  {
    id: 6,
    type: 'water',
    position: [-0.913, 100.467],
    title: 'Kualitas Air Bagus',
    description: 'pH Normal',
    color: '#3b82f6',
    icon: <Droplet size={20} />,
  },
  {
    id: 7,
    type: 'user',
    position: [-0.9145, 100.464],
    title: 'Lokasi Saya',
    description: 'Current position',
    color: '#2563eb',
    icon: <User size={20} />,
  },
];

const heatmapCircles = [
  // Example: [lat, lng, color, radius]
  [-0.914, 100.460, '#ef4444', 300],
  [-0.912, 100.462, '#22c55e', 250],
  [-0.913, 100.467, '#3b82f6', 200],
];

const MapView: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <MapContainer
        center={[-0.914, 100.464]}
        zoom={14}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%', minHeight: 350, borderRadius: '1rem' }}
      >
        {/* Map tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Heatmap effect using Circle */}
        {heatmapCircles.map(([lat, lng, color, radius], idx) => (
          <Circle
            key={idx}
            center={[lat as number, lng as number] as LatLngExpression}
            pathOptions={{ color: color as string, fillColor: color as string, fillOpacity: 0.25, opacity: 0.2 }}
            radius={radius as number}
          />
        ))}

        {/* Markers */}
        {markerData.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position as LatLngExpression}
            icon={createLucideIcon(marker.icon, marker.color)}
            eventHandlers={{
              click: () => setSelectedMarker(marker.id),
            }}
          >
            {selectedMarker === marker.id && (
              <Popup
                closeButton={true}
                eventHandlers={{
                  remove: () => setSelectedMarker(null),
                }}
                minWidth={180}
                maxWidth={220}
              >
                <div>
                  {marker.image && (
                    <img
                      src={marker.image}
                      alt={marker.title}
                      className="w-full h-20 object-cover rounded mb-2"
                    />
                  )}
                  <div className="font-semibold text-sm">{marker.title}</div>
                  <div className="text-xs text-gray-600">{marker.description}</div>
                  {marker.date && (
                    <div className="text-xs text-gray-400 mt-1">{marker.date}</div>
                  )}
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
      {/* Andalas Label */}
      <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow text-sm font-semibold text-gray-700 z-[999]">
        Andalas
      </div>
    </div>
  );
};

export default MapView;