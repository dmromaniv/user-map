import { MapContainer, TileLayer } from "react-leaflet";

import ClusterLayer from "./ClusterLayer";

// ui config
import { MAP_VIEW } from "../../../config/map";
import { OSM_CONFIG } from "../../../config/tiles";

// leaflet default styles
import "leaflet/dist/leaflet.css";

type MapViewProps = {
  selectedInterests: string[];
};

const MapView = ({ selectedInterests }: MapViewProps) => {
  return (
    <MapContainer
      center={MAP_VIEW.center}
      zoom={MAP_VIEW.defaultZoom}
      className="w-full h-[calc(100%-100px)] border border-gray-300 rounded-lg"
      preferCanvas
      worldCopyJump
    >
      <TileLayer url={OSM_CONFIG.url} attribution={OSM_CONFIG.attribution} />
      <ClusterLayer
        centerLat={MAP_VIEW.center[0]}
        centerLng={MAP_VIEW.center[1]}
        radiusKm={Infinity}
        selectedInterests={selectedInterests}
      />
    </MapContainer>
  );
};

export default MapView;
