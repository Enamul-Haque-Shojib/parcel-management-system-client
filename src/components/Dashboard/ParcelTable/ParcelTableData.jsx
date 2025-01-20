// import { Button } from '@/components/ui/button';
// import { TableCell, TableRow } from '@/components/ui/table';
// import React from 'react';


// import {
//   Sheet,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import UpdateParcel from '../UpdateParcel/UpdateParcel';

// const ParcelTableData = (props) => {
//     const {data} = props;

    

//     const handleUpdateParcel = (data) => {
        
//     }
//             return (
                
//                     <TableRow>
//                     <TableCell className="font-medium">{data.parcelNumber}</TableCell>
//                     <TableCell>{data.name}</TableCell>
//                     <TableCell>{data.email}</TableCell>
//                     <TableCell>{data.price}</TableCell>
//                     <TableCell>{data.deliveryMan}</TableCell>
//                     <TableCell className="text-right">

//                     <Sheet>
//                         <SheetTrigger asChild>
//                                 <Button 
//                                 variant="outline" className="bg-yellow-600"
//                                 onClick = {() =>{handleUpdateParcel(data)}}
//                                 >Update</Button>
                               
//                         </SheetTrigger>
//                         <UpdateParcel updateForData={}></UpdateParcel>
//                         </Sheet>

//                         </TableCell>
//                     </TableRow>
             
//             );
// };

// export default ParcelTableData;



import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

 
import React from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import MapWithPins from "../Map/MapWithPins";
import useAuth from "@/hooks/useAuth";














const parcels = [
  // {
  //   name: "Parcel 1",
  //   description: "Delivered to London",
  //   latitude: 23.8103,
  //   longitude: 90.4125,
  // },
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
  {
    name: "Parcel 4",
    description: "Delivered to Edinburgh",
    latitude:  23.8749,
    longitude: 90.3984,
  },
];

const ParcelTableData = ({ data }) => {
  // const {role} = useAuth();
  const role="DeliverMan"

  return (
    <TableRow>
      <TableCell className="font-medium">{data.parcelNumber}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.price}</TableCell>
      <TableCell>{data.deliveryMan}</TableCell>

      {
        role === "DeliverMan" && (
          <TableCell>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Location</Button>
      </DialogTrigger>
     <MapWithPins 
     name={data.name}
     latitude={data.deliveryAddressLatitude}
     longitude={data.deliveryAddressLongitude}
     ></MapWithPins>
    </Dialog>
      </TableCell>
        )
      }
      

      <TableCell className="text-right">
        <Link
          variant="outline"
          className="bg-yellow-600"
          to={`update-parcel/${data._id}`}
        >
          Update
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default ParcelTableData;
