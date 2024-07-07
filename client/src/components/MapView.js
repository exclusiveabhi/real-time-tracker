// client/src/components/MapView.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
  const [markers, setMarkers] = useState([]);
  const [riderLocation, setRiderLocation] = useState(null);

  useEffect(() => {
    // Fetch markers from the server for the user
    // Fetch rider location from the server and update every 5 seconds
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.lat, marker.lng]}>
          <Popup>
            Marker at [{marker.lat}, {marker.lng}]
          </Popup>
        </Marker>
      ))}
      {riderLocation && (
        <Marker position={riderLocation}>
          <Popup>
            Rider at [{riderLocation[0]}, {riderLocation[1]}]
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapView;
