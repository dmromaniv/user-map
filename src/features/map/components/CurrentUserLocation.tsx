import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import markerIcon from "../../../assets/icons/place-marker.svg";

import { createMarkerIcon } from "../utils/icons";

interface CurrentUserLocationProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const CurrentUserLocation = ({
  lat,
  lng,
  zoom = 12,
}: CurrentUserLocationProps) => {
  const map = useMap();
  const isCoordsSetRef = useRef(false);

  useEffect(() => {
    if (isCoordsSetRef.current) return;
    map.setView([lat, lng], zoom, { animate: true });
    isCoordsSetRef.current = true;
  }, [lat, lng, zoom, map]);

  return (
    <Marker position={[lat, lng]} icon={createMarkerIcon(markerIcon)}>
      <Popup>Your are here!</Popup>
    </Marker>
  );
};

export default CurrentUserLocation;
