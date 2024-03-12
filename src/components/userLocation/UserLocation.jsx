import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IoCloseSharp } from "react-icons/io5";
import "./leaflet.css";

const UserLocation = ({ onClose }) => {
  const [center, serCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.4)] ">
      <div className="p-8 bg-white dark:bg-slate-400 rounded-lg w-[32rem] relative">
        <div
          className="absolute top-2 left-2 text-2xl cursor-pointer transition-all duration-150 hover:scale-150"
          onClick={onClose}
        >
          <IoCloseSharp />
        </div>
        <div style={{ height: `50dvh` }}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={true}
            style={{ height: `100%` }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default UserLocation;
