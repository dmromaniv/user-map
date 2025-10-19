import type { Feature, Point } from "geojson";

import type { User } from "../../../types/user";

//  Builds a map where each interest name points to a sorted list of user indices
export const buildUserInterestsMap = (users: User[]): Map<string, number[]> => {
  const interestMap = new Map<string, number[]>();

  users.forEach((user, userIndex) => {
    user.interests.forEach((interest: string) => {
      const userIndices = interestMap.get(interest) || [];
      userIndices.push(userIndex);
      interestMap.set(interest, userIndices);
    });
  });

  for (const indices of interestMap.values()) {
    indices.sort((a, b) => a - b);
  }

  return interestMap;
};

// Filters users based on selected interests
export const filterUsersBySelectedInterests = (
  users: User[],
  interestToUserIndices: Map<string, number[]>,
  selectedInterests: string[]
): User[] => {
  if (!selectedInterests.length) return users;

  const matchedUserIndices = new Set<number>();

  // Collect indices of users matching any selected interest
  for (const interest of selectedInterests) {
    const userIndices = interestToUserIndices.get(interest);
    if (!userIndices) continue;

    for (const userIndex of userIndices) {
      matchedUserIndices.add(userIndex);
    }
  }

  return Array.from(matchedUserIndices, (index) => users[index]);
};

export function toGeoJSON(users: User[]): Feature<Point, { uid: string }>[] {
  return users.map((u) => ({
    type: "Feature",
    geometry: { type: "Point", coordinates: [u.location.lng, u.location.lat] },
    properties: { uid: u.id },
  }));
}
