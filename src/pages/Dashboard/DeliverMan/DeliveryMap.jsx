import MapWithPins from '@/components/Dashboard/Map/MapWithPins';
import React from 'react';

const DeliveryMap = () => {
    const parcels = [
        {
          name: "Parcel 1",
          description: "Delivered to London",
          latitude: 23.8103,
          longitude: 90.4125,
        },
        // {
        //   name: "Parcel 2",
        //   description: "Delivered to Manchester",
        //   latitude: 23.7337,
        //   longitude: 90.3928,
        // },
        // {
        //   name: "Parcel 3",
        //   description: "Delivered to Edinburgh",
        //   latitude: 23.7514,
        //   longitude: 90.3910,
        // },
        // {
        //   name: "Parcel 4",
        //   description: "Delivered to Edinburgh",
        //   latitude: 23.7198,
        //   longitude: 90.3883,
        // },
      ];
    
      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Delivery Map</h1>
          {/* <MapWithPins parcels={parcels} /> */}
        </div>
      );
};

export default DeliveryMap;