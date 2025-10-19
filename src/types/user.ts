export type User = {
  id: string;
  name: string;
  interests: string[];
  location: { lat: number; lng: number };
};
