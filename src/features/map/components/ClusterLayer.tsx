import { useMemo, useRef, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import type { Feature, Point } from "geojson";
import Supercluster from "supercluster";

import UserDetailsPopup from "./UserDetailsPopup";

import { createMarkerIcon, createClusterIcon } from "../utils/icons";
import { filterUsersBySelectedInterests, toGeoJSON } from "../utils/clustering";

import type { User } from "../../../types/user";

import { CLUSTER_CONFIG } from "../../../config/map";

interface UserClusterLayerProps {
  centerLat: number;
  centerLng: number;
  //  Radius in kilometers to filter users. Use Infinity for worldwide view
  radiusKm: number | typeof Infinity;
  selectedInterests: string[];
  userList: User[];
  interestMap: Map<string, number[]>;
}

const UserClusterLayer = ({
  userList,
  interestMap: interestIndex,
  radiusKm,
  selectedInterests,
}: UserClusterLayerProps) => {
  const map = useMap();

  const [mapUpdateTrigger, setMapUpdateTrigger] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Handle map movement and zoom changes with debounced updates
  useMapEvents({
    moveend: () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(() =>
        setMapUpdateTrigger((prev) => prev + 1)
      );
    },
    zoomend: () => setMapUpdateTrigger((prev) => prev + 1),
  });

  // Filtered users based on selected interests
  const usersWithMatchingInterests = useMemo(
    () =>
      filterUsersBySelectedInterests(
        userList,
        interestIndex,
        selectedInterests
      ),
    [userList, interestIndex, selectedInterests]
  );

  // Apply geographic filtering (currently disabled when radius is Infinity)
  const filteredUsers = useMemo(() => {
    if (!Number.isFinite(radiusKm)) return usersWithMatchingInterests;
    return usersWithMatchingInterests;
  }, [usersWithMatchingInterests, radiusKm]);

  // Init cluster  with filtered user points
  const clusterIndex = useMemo(() => {
    const geoPoints = toGeoJSON(filteredUsers);
    const clusterEngine = new Supercluster<{ uid: string }>({
      radius: CLUSTER_CONFIG.radius,
      maxZoom: CLUSTER_CONFIG.maxZoom,
      minPoints: CLUSTER_CONFIG.minPoints,
    });
    clusterEngine.load(geoPoints);

    return clusterEngine;
  }, [filteredUsers]);

  // Show only visible clusters based on current map bounds and zoom
  const visibleClusters = useMemo(() => {
    const bounds = map.getBounds();
    const boundingBox: [number, number, number, number] = [
      bounds.getWest(),
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
    ];
    return clusterIndex.getClusters(boundingBox, Math.round(map.getZoom()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clusterIndex, map, mapUpdateTrigger]);

  return (
    <>
      {visibleClusters.map((feature: Feature<Point>) => {
        const [longitude, latitude] = feature.geometry.coordinates;
        const position: LatLngExpression = [latitude, longitude];

        // Render cluster marker
        if (feature.properties?.cluster) {
          const pointCount = feature.properties.point_count as number;
          return (
            <Marker
              key={`cluster-${feature.id}`}
              position={position}
              icon={createClusterIcon(pointCount)}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    clusterIndex.getClusterExpansionZoom(feature.id as number),
                    CLUSTER_CONFIG.maxZoom
                  );
                  map.setView(position, expansionZoom, { animate: true });
                },
              }}
            />
          );
        }

        // Render individual user marker
        const userId = feature.properties?.uid as string;
        const userData = filteredUsers.find((user: User) => user.id === userId);
        return (
          <Marker
            key={`user-${userId}`}
            position={position}
            icon={createMarkerIcon()}
          >
            <UserDetailsPopup userData={userData} />
          </Marker>
        );
      })}
    </>
  );
};

export default UserClusterLayer;
