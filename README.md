# 🌍 Friends Finder

A web app for discovering users around the world by **interests** and **geographical location**.  
It displays markers on an interactive map (with clustering) and automatically centers on the user’s current location it it is enabled.

---

## Features

-  **Interest-based filtering**: filter users by a list of interests. (Filters are saved in localStorage). 
-  **Interactive map**:  built with Leaflet and `react-leaflet`.  
-  **User location detection**: centers the map on the current user position via `react-geolocated`.  
- **Marker clustering**:  efficiently render thousands of points.  
- **Mocked users data**: used JSON with 10,000 random users across the world.  
- **Config-driven**: default map parameters and tile providers managed in `/config`.

---

## Tech Stack
- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Map**: [Leaflet](https://leafletjs.com/) + [React-Leaflet](https://react-leaflet.js.org/)
- **Clustering**: [Supercluster](https://github.com/mapbox/supercluster)
- **Geolocation**: [react-geolocated](https://github.com/no23reason/react-geolocated)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Ant Design v5](https://ant.design/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## Architecture

### **Data Layer**
All user data lives in a JSON file (10k records).  
User Model:
```json
{
  id: string;
  name: string;
  interests: string[];
  location: { lat: number; lng: number }
}
```

### **How to Run App locally**

 1. Clone the repository
 ```
git clone https://github.com/dmromaniv/user-map.git
cd user-map
```

 2. Install dependencies
```
npm install
```
3. run app 
```npm run dev```

### **Future Improvements**

- User authentication & roles (for editing interests);

- Integrated with BE and move filtering to it;

- Upgrade design;