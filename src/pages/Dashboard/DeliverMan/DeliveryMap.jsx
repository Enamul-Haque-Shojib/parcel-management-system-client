


// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix for default marker icon
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// import 'leaflet/dist/leaflet.css';


// L.Marker.prototype.options.icon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41], // Adjust based on your needs
//   popupAnchor: [1, -34], // Adjust based on your needs
// });

// const MapWithPins = ({ parcels }) => {
//       const defaultCenter = [23.8429, 90.4004]; // Default to London if no parcels
//       const defaultZoom = 13;
    
//       return (
//         <div className="w-full h-[500px]">
//           <MapContainer
//             center={defaultCenter}
//             zoom={defaultZoom}
//             scrollWheelZoom={false}
//             className="w-full h-full rounded-lg shadow-md"
//           >
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             {parcels.map((parcel, index) => (
//               <Marker
//                 key={index}
//                 position={[parcel.latitude, parcel.longitude]}
//               >
//                 <Popup>
//                   <div>
//                     <h3 className="font-semibold">{parcel.name}</h3>
//                     <p>{parcel.description}</p>
//                     <p>
//                       <strong>Coordinates:</strong> {parcel.latitude}, {parcel.longitude}
//                     </p>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       );
// };

// export default MapWithPins;





// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Default marker icons
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41], // Adjust based on your needs
//   popupAnchor: [1, -34], // Adjust based on your needs
// });

// // Dynamic marker icon generator
// const getMarkerIcon = (status) => {
//   let iconColor;

//   switch (status) {
//     case "delivered":
//       iconColor = "green";
//       break;
//     case "canceled":
//       iconColor = "red";
//       break;
//     default:
//       iconColor = "blue"; // Default color
//   }

//   return L.icon({
//     iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${iconColor}.png`,
//     shadowUrl: iconShadow,
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//   });
// };

// const MapWithPins = ({ parcels }) => {
//   // Initialize state for parcel statuses
//   const [parcelStatuses, setParcelStatuses] = useState(
//     parcels.map(() => "pending") // Default all to "pending"
//   );

//   // Handle marker click
//   const handleMarkerClick = (index, newStatus) => {
//     setParcelStatuses((prev) =>
//       prev.map((status, i) => (i === index ? newStatus : status))
//     );
//   };

//   const defaultCenter = [23.8429, 90.4004];
//   const defaultZoom = 13;

//   return (
//     <div className="w-full h-[500px]">
//       <MapContainer
//         center={defaultCenter}
//         zoom={defaultZoom}
//         scrollWheelZoom={false}
//         className="w-full h-full rounded-lg shadow-md"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {parcels.map((parcel, index) => (
//           <Marker
//             key={index}
//             position={[parcel.latitude, parcel.longitude]}
//             icon={getMarkerIcon(parcelStatuses[index])}
//             eventHandlers={{
//               click: () =>
//                 handleMarkerClick(
//                   index,
//                   parcelStatuses[index] === "delivered"
//                     ? "canceled"
//                     : "delivered"
//                 ),
//             }}
//           >
//             <Popup>
//               <div>
//                 <h3 className="font-semibold">{parcel.name}</h3>
//                 <p>{parcel.description}</p>
//                 <p>
//                   <strong>Coordinates:</strong> {parcel.latitude}, {parcel.longitude}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {parcelStatuses[index]}
//                 </p>
//                 <button
//                   className="text-white bg-green-500 px-2 py-1 rounded mr-2"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleMarkerClick(index, "delivered");
//                   }}
//                 >
//                   Mark as Delivered
//                 </button>
//                 <button
//                   className="text-white bg-red-500 px-2 py-1 rounded"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleMarkerClick(index, "canceled");
//                   }}
//                 >
//                   Mark as Canceled
//                 </button>
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapWithPins;












// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-routing-machine";

// // Default marker icons
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// // Routing component
// const Routing = ({ start, end }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(...start), L.latLng(...end)],
//       routeWhileDragging: true,
//       lineOptions: {
//         styles: [{ color: "blue", weight: 4 }],
//       },
//       addWaypoints: false,
//       draggableWaypoints: false,
//       fitSelectedRoutes: true,
//       showAlternatives: false,
//       createMarker: () => null, // Prevent additional markers
//     });

//     routingControl.addTo(map);

//     // Hide the routing control's UI elements
//     const controlContainer = routingControl.getContainer();
//     if (controlContainer) {
//       controlContainer.style.display = "none";
//     }

//     return () => map.removeControl(routingControl);
//   }, [map, start, end]);

//   return null;
// };

// const MapWithPins = ({ parcels }) => {
//   const defaultCenter = [23.8429, 90.4004]; // Default starting point
//   const defaultZoom = 13;

//   return (
//     <div className="w-full h-[500px]">
//       <MapContainer
//         center={defaultCenter}
//         zoom={defaultZoom}
//         scrollWheelZoom={false}
//         className="w-full h-full rounded-lg shadow-md"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Marker for the default center */}
//         <Marker position={defaultCenter}>
//           <Popup>
//             <div>
//               <h3 className="font-semibold">Starting Point</h3>
//               <p>Coordinates: {defaultCenter[0]}, {defaultCenter[1]}</p>
//             </div>
//           </Popup>
//         </Marker>

//         {/* Render markers and routes for each parcel */}
//         {parcels.map((parcel, index) => (
//           <React.Fragment key={index}>
//             <Marker position={[parcel.latitude, parcel.longitude]}>
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{parcel.name}</h3>
//                   <p>{parcel.description}</p>
//                   <p>
//                     <strong>Coordinates:</strong> {parcel.latitude}, {parcel.longitude}
//                   </p>
//                 </div>
//               </Popup>
//             </Marker>
//             <Routing start={defaultCenter} end={[parcel.latitude, parcel.longitude]} />
//           </React.Fragment>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapWithPins;






// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-routing-machine";

// // Default marker icons
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// // Custom icon for default center
// import defaultCenterIconUrl from "../../../assets/home.png"; // Path to a custom icon file

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// // Custom icon for the starting point
// const defaultCenterIcon = L.icon({
//   iconUrl: defaultCenterIconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const Routing = ({ start, end }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(...start), L.latLng(...end)],
//       routeWhileDragging: true,
//       lineOptions: {
//         styles: [{ color: "blue", weight: 4 }],
//       },
//       addWaypoints: false,
//       draggableWaypoints: false,
//       fitSelectedRoutes: true,
//       showAlternatives: false,
//       createMarker: () => null, // Prevent additional markers
//     });

//     routingControl.addTo(map);

//     // Hide the routing control's UI elements
//     const controlContainer = routingControl.getContainer();
//     if (controlContainer) {
//       controlContainer.style.display = "none";
//     }

//     return () => map.removeControl(routingControl);
//   }, [map, start, end]);

//   return null;
// };

// const MapWithPins = ({ parcels }) => {
//   const defaultCenter = [23.8429, 90.4004]; // Default starting point
//   const defaultZoom = 13;

//   return (
//     <div className="w-full h-[500px]">
//       <MapContainer
//         center={defaultCenter}
//         zoom={defaultZoom}
//         scrollWheelZoom={false}
//         className="w-full h-full rounded-lg shadow-md"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Marker for the default center with a custom icon */}
//         <Marker position={defaultCenter} icon={defaultCenterIcon}>
//           <Popup>
//             <div>
//               <h3 className="font-semibold">Starting Point</h3>
//               <p>Coordinates: {defaultCenter[0]}, {defaultCenter[1]}</p>
//             </div>
//           </Popup>
//         </Marker>

//         {/* Render markers and routes for each parcel */}
//         {parcels.map((parcel, index) => (
//           <React.Fragment key={index}>
//             <Marker position={[parcel.latitude, parcel.longitude]}>
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{parcel.name}</h3>
//                   <p>{parcel.description}</p>
//                   <p>
//                     <strong>Coordinates:</strong> {parcel.latitude}, {parcel.longitude}
//                   </p>
//                 </div>
//               </Popup>
//             </Marker>
//             <Routing start={defaultCenter} end={[parcel.latitude, parcel.longitude]} />
//           </React.Fragment>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapWithPins;



//-----------------------------------------------------------------------

// import { Button } from "@/components/ui/button"
// import {

//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,

// } from "@/components/ui/dialog"

 
// import React, { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-routing-machine";

// // Default marker icons
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// // Custom icon for default center
// import defaultCenterIconUrl from "../../../assets/navigation.png"; // Path to a custom icon file

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// // Custom icon for the starting point
// const defaultCenterIcon = L.icon({
//   iconUrl: defaultCenterIconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });

// const Routing = ({ start, end }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     const routingControl = L.Routing.control({
//       waypoints: [L.latLng(...start), L.latLng(...end)],
//       routeWhileDragging: true,
//       lineOptions: {
//         styles: [{ color: "blue", weight: 4 }],
//       },
//       addWaypoints: false,
//       draggableWaypoints: false,
//       fitSelectedRoutes: true,
//       showAlternatives: false,
//       createMarker: () => null, // Prevent additional markers
//     });

//     routingControl.addTo(map);

//     // Hide the routing control's UI elements
//     const controlContainer = routingControl.getContainer();
//     if (controlContainer) {
//       controlContainer.style.display = "none";
//     }

//     return () => map.removeControl(routingControl);
//   }, [map, start, end]);

//   return null;
// };



// const MapWithPins = (parcels) => {
//   const defaultCenter = [23.8429, 90.4004]; // Default starting point
//   const defaultZoom = 11;
//   return (
//     <DialogContent className="sm:max-w-[600px]">
//     <DialogHeader>
//       <DialogTitle>View Location</DialogTitle>
//       <DialogDescription>
//         Make changes to your profile here. Click save when you're done.
//       </DialogDescription>
//     </DialogHeader>
//     <div className="w-full h-[500px]">
//       <MapContainer
//         center={defaultCenter}
//         zoom={defaultZoom}
//         scrollWheelZoom={false}
//         className="w-full h-full rounded-lg shadow-md"
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Marker for the default center with a custom icon */}
//         <Marker position={defaultCenter} icon={defaultCenterIcon}>
//           <Popup>
//             <div>
//               <h3 className="font-semibold">Starting Point</h3>
//               <p>Coordinates: {defaultCenter[0]}, {defaultCenter[1]}</p>
//             </div>
//           </Popup>
//         </Marker>

//         {/* Render markers and routes for each parcel */}
//         {parcels.map((parcel, index) => (
//           <React.Fragment 
//           key={index}
//           >
//             <Marker position={[parcel.latitude, parcel.longitude]}>
//               <Popup>
//                 <div>
//                   <h3 className="font-semibold">{parcel.name}</h3>
//                   <p>{parcel.description}</p>
//                   <p>
//                     <strong>Coordinates:</strong> {parcel.latitude}, {parcel.longitude}
//                   </p>
//                 </div>
//               </Popup>
//             </Marker>
//             <Routing start={defaultCenter} end={[parcel.latitude, parcel.longitude]} />
//           </React.Fragment>
//         ))}
//       </MapContainer>
//     </div>
  
//   </DialogContent>
//   );
// };

// export default MapWithPins;





// import MapWithPins from '@/components/Dashboard/Map/MapWithPins';
// import React from 'react';

// const DeliveryMap = () => {
//     const parcels = [
//         {
//           name: "Parcel 1",
//           description: "Delivered to London",
//           latitude: 23.8103,
//           longitude: 90.4125,
//         },
//         {
//           name: "Parcel 2",
//           description: "Delivered to Manchester",
//           latitude: 23.7337,
//           longitude: 90.3928,
//         },
//         {
//           name: "Parcel 3",
//           description: "Delivered to Edinburgh",
//           latitude: 23.7514,
//           longitude: 90.3910,
//         },
//         {
//           name: "Parcel 4",
//           description: "Delivered to Edinburgh",
//           latitude: 23.7198,
//           longitude: 90.3883,
//         },
//       ];
    
//       return (
//         <div className="p-4">
//           <h1 className="text-2xl font-bold mb-4">Delivery Map</h1>
//           <MapWithPins parcels={parcels} />
//         </div>
//       );
// };

// export default DeliveryMap;