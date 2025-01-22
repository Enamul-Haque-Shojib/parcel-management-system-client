import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import ParcelTableData from "./ParcelTableData";

const ParcelTable = ({ 
  parcelData,
  role
 }) => {

  
//  const role = "Admin"
  const renderHeaders = () => {
    if (role === "User") {
      return (
        <>
          <TableHead>Type</TableHead>
          <TableHead>Booking Date</TableHead>
          <TableHead>Requested Delivery Date</TableHead>
          <TableHead>Approximate Delivery Date</TableHead>
          <TableHead>Delivery Man</TableHead>
          <TableHead>Booking Status</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Review</TableHead>
          <TableHead>Pay</TableHead>
        </>
      );
    }else if (role === "DeliverMan"){
      return(
        <>
        <TableHead>Booked User's Name</TableHead>
        <TableHead>User's Phone Number</TableHead>
        <TableHead>Requested Delivery Date</TableHead>
        <TableHead>Approximate Delivery Date</TableHead>
        <TableHead>Receiver's Name</TableHead>
        <TableHead>Receiver's Phone Number</TableHead>
        <TableHead>Receiver's Address</TableHead>
        <TableHead>Location</TableHead>
        <TableHead>Cancel</TableHead>
        <TableHead>Deliver</TableHead>
        </> 
      )
    }else if(role==='Admin'){
      return(
        <>
                <TableHead>Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Booking Date</TableHead>
                <TableHead>Requested Delivery Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Approximate Delivery Date</TableHead>
                <TableHead>Delivery Man</TableHead>
                <TableHead>Booking Status</TableHead>
                <TableHead>Action</TableHead>
                </> 
      )
    }
    // Add similar cases for "Admin" and "DeliverMan"
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>A list of parcels and their statuses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Parcel Number</TableHead>
            {renderHeaders()}
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcelData.map((data) => (
            <ParcelTableData key={data._id} data={data} role={role} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ParcelTable;
