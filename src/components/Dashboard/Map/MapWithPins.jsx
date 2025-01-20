

import { Button } from "@/components/ui/button"
import {

  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"

 
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

// Default marker icons
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Custom icon for default center
import defaultCenterIconUrl from "../../../assets/navigation.png"; // Path to a custom icon file

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Custom icon for the starting point
const defaultCenterIcon = L.icon({
  iconUrl: defaultCenterIconUrl,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Routing = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(...start), L.latLng(...end)],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "blue", weight: 4 }],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      createMarker: () => null, // Prevent additional markers
    });

    routingControl.addTo(map);

    // Hide the routing control's UI elements
    const controlContainer = routingControl.getContainer();
    if (controlContainer) {
      controlContainer.style.display = "none";
    }

    return () => map.removeControl(routingControl);
  }, [map, start, end]);

  return null;
};



const MapWithPins = (parcel) => {
  const defaultCenter = [23.8429, 90.4004]; // Default starting point
  const defaultZoom = 11;
  return (
    <DialogContent className="sm:max-w-[600px]">
    <DialogHeader>
      <DialogTitle>View Location</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
    </DialogHeader>
    <div className="w-full h-[500px]">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        className="w-full h-full rounded-lg shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker for the default center with a custom icon */}
        <Marker position={defaultCenter} icon={defaultCenterIcon}>
          <Popup>
            <div>
              <h3 className="font-semibold">Starting Point</h3>
              <p>Coordinates: {defaultCenter[0]}, {defaultCenter[1]}</p>
            </div>
          </Popup>
        </Marker>

        {/* Render markers and routes for each parcel */}
        {/* {parcels.map((parcel, index) => ( */}
          <React.Fragment 
          // key={index}
          >
            <Marker position={[parcel.latitude, parcel.longitude]}>
              <Popup>
                <div>
                  <h3 className="font-semibold">{parcel.name}</h3>
                  <p>{parcel.description}</p>
                  <p>
                    <strong>Coordinates:</strong> {parcel.latitude}, {parcel.longitude}
                  </p>
                </div>
              </Popup>
            </Marker>
            <Routing start={defaultCenter} end={[parcel.latitude, parcel.longitude]} />
          </React.Fragment>
        {/* ))} */}
      </MapContainer>
    </div>
  
  </DialogContent>
  );
};

export default MapWithPins;













