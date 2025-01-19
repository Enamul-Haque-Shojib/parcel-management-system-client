// import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import React from 'react';
// import ParcelTableData from './ParcelTableData';

// const ParcelTable = (props) => {
    
//     const {parcelData} = props;

  
//     return (
//         <div>
//             <Table>
//       <TableCaption>A list of Parcels.</TableCaption>
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px]">Parcel Number</TableHead>
//           <TableHead>Name</TableHead>
//           <TableHead>Email</TableHead>
//           <TableHead>Price</TableHead>
//           <TableHead>Action</TableHead>
          
//           <TableHead className="text-right">Delivery Man</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {parcelData.map((data) => (
//           <ParcelTableData
//           key={data._id}
//           data={data}
//           ></ParcelTableData>
//         ))}
//       </TableBody>
//       <TableFooter>
//         <TableRow>
//           <TableCell colSpan={3}>Total</TableCell>
//           <TableCell className="text-right">$2,500.00</TableCell>
//         </TableRow>
//       </TableFooter>
//     </Table>
//         </div>
//     );
// };

// export default ParcelTable;




import React, { useState } from "react";
import { Table, TableBody, TableCaption, TableFooter, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import ParcelTableData from "./ParcelTableData";
import UpdateParcel from "../UpdateParcel/UpdateParcel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

const ParcelTable = ({ parcelData }) => {
  const [selectedParcel, setSelectedParcel] = useState(null); // State for selected parcel

  return (
    <div>
      <Table>
        <TableCaption>A list of Parcels.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Parcel Number</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
            <TableHead className="text-right">Delivery Man</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcelData.map((data) => (
            <ParcelTableData
              key={data._id}
              data={data}
              // Pass handler to update selected parcel
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      
    </div>
  );
};

export default ParcelTable;
