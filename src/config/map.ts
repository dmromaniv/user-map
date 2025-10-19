import markerIcon from "../assets/icons/marker.svg";
import markerShadow from "../assets/marker-shadow.png";

//  Map marker configurations
export const MARKER_CONFIG = {
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [30, 40] as [number, number],
  iconAnchor: [12, 40] as [number, number],
};

//  Map view configuration
export const MAP_VIEW = {
  center: [20, 0] as [number, number], // World center coordinates
  defaultZoom: 2,
  maxZoom: 18,
  minZoom: 2,
} as const;

//  Cluster configuration
export const CLUSTER_CONFIG = {
  radius: 60, // Cluster radius in pixels
  maxZoom: 18, // Maximum zoom level for clustering
  minPoints: 2, // Minimum points to form a cluster
} as const;
