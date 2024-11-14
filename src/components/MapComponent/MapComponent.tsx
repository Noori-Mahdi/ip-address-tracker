import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerIcon from '../../assets/img/icon-location.svg'
import L from 'leaflet'; // برای تنظیمات مربوط به marker

const MapComponent = () => {
  const [position, setPosition] = useState<[number,number]>([51.505, -0.09]); // موقعیت پیش‌فرض نقشه

  return (
    <MapContainer center={position} zoom={13} style={{height:'100vh', width: '100%', zIndex:'0'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker  position={position} icon={new L.Icon({ iconUrl: MarkerIcon })}>
        <Popup>
          <span>Your location</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
