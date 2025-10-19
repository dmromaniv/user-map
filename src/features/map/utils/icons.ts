import L from "leaflet";

import { MARKER_CONFIG } from "../../../config/map";

export const createMarkerIcon = (icon?: string) =>
  new L.Icon(icon ? { ...MARKER_CONFIG, iconUrl: icon } : MARKER_CONFIG);

export const createClusterIcon = (count: number) =>
  L.divIcon({
    html: `<div class="flex items-center justify-center w-12 h-12 rounded-full bg-teal-800 dark:bg-teal-800 text-white dark:text-gray-300 font-bold shadow-md">${count}</div>`,
    className: "",
  });
