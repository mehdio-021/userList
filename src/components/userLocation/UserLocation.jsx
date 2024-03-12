import { useRef} from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IoCloseSharp } from "react-icons/io5";
import "./leaflet.css";
import iconUrl from "/public/location.png";

const UserLocation = ({ onClose }) => {
  const ZOOM_LEVEL = 20;
  const mapRef = useRef();
  const position = [35.7292667, 51.360267];
  const icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [30, 30],
  });

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
            center={position}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={true}
            style={{ height: `100%` }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
              <Popup>محل تقریبی کاربر</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default UserLocation;
