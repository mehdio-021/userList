import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { IoCloseSharp } from "react-icons/io5";
import osm from "./osm-providers";


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
        <div style={{ width: "100%", height: "400px" }}>
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default UserLocation;
