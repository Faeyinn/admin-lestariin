import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { type LatLngExpression } from 'leaflet';

interface DetailReportMapProps {
  position: [number, number];
}

const DetailReportMap: React.FC<DetailReportMapProps> = ({ position }) => {
  const mapCenter: LatLngExpression = [position[0], position[1]];

  return (
    <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={mapCenter}
        zoom={14}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapCenter}>
          <Popup>Lokasi Laporan</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DetailReportMap;