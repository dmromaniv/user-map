import { MapContainer, TileLayer } from "react-leaflet";
import { useGeolocated } from "react-geolocated";

import ClusterLayer from "./ClusterLayer";
import CurrentUserLocation from "./CurrentUserLocation";

// ui config
import { MAP_VIEW } from "../../../config/map";
import { OSM_CONFIG } from "../../../config/tiles";

// leaflet default styles
import "leaflet/dist/leaflet.css";

type MapViewProps = {
  selectedInterests: string[];
};

const MapView = ({ selectedInterests }: MapViewProps) => {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 10_000,
    suppressLocationOnMount: false,
    watchPosition: false,
  });

  return (
    <MapContainer
      center={MAP_VIEW.center}
      zoom={MAP_VIEW.defaultZoom}
      className="w-full h-[calc(100%-100px)] border border-gray-300 rounded-lg"
      preferCanvas
      worldCopyJump
    >
      {coords && (
        <CurrentUserLocation
          lat={coords.latitude}
          lng={coords.longitude}
          zoom={MAP_VIEW.defaultZoom}
        />
      )}
      <TileLayer url={OSM_CONFIG.url} attribution={OSM_CONFIG.attribution} />
      <ClusterLayer selectedInterests={selectedInterests} />
    </MapContainer>
  );
};

export default MapView;
