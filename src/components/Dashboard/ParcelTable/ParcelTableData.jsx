

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useToast } from "@/hooks/use-toast"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import MapWithPins from "../Map/MapWithPins";
import useAuth from "@/hooks/useAuth";
import ManageDeliveryMen from "../MangeDelieveryMen/ManageDeliveryMen";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import UserReview from "../UserReview/UserReview";
import SuccessPayment from "../Payment/SuccessPayment";





const ParcelTableData = ({ data }) => {
  
  const  toast  = useToast()
  const axiosInstance = useAxiosSecure()
  const [approximateDeliveryDate, setApproximateDeliveryDate] = useState(data.ApproximateDeliveryDate);
  const [deliverMan, setDeliverMan] = useState(data.deliveryMan);
  const [bookingStatus, setBookingStatus] = useState(data.bookingStatus);
  // const {role} = useAuth();
  
  const role="User";


  const handleStatus = async(id,status) => {
    try {
      console.log(status);
      const statusChange = {
        bookingStatus: status,
      };
      const response = await axiosInstance.patch(`/auth/parcel-status/${id}`, statusChange);
      // console.log(response.data.data);
      setBookingStatus(status);
      toast({
        title: `Successfully ${status}`,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Failed to update status",
        description: error.message,
        variant: "destructive",
      });
    }
  }


  return (
    <TableRow>
      <TableCell>{data.parcelNumber}</TableCell>
      {
        role == "User" && (
          <>
          <TableCell>{data.parcelType}</TableCell>
          <TableCell>{data.bookingDate.slice(0, 10)}</TableCell>
          <TableCell>{data.requestedDeliveryDate.slice(0, 10)}</TableCell>
          <TableCell>{approximateDeliveryDate}</TableCell>
          <TableCell>{deliverMan}</TableCell>
          <TableCell>{bookingStatus}</TableCell>
          <TableCell className="text-right">
        <Link
          variant="outline"
          className="bg-yellow-600"
          to={`update-parcel/${data._id}`}
        >
          Update
        </Link>
        <Button onClick={()=>{handleStatus(data._id, 'Canceled')}} disabled = {data.bookingStatus !=='Pending'}>Cancel</Button>
      </TableCell>
      <TableCell>
      <Dialog>
      <DialogTrigger asChild>
        
        <Button variant="outline" disabled = {data.bookingStatus!=='Delivered'}>Review</Button>
      </DialogTrigger>
      <UserReview parcelId={data._id} deliverManId={data.deliveryMan}></UserReview>
    </Dialog>
        
      </TableCell>
      <TableCell >
        
        <Dialog>
      <DialogTrigger asChild>
        
        <Button>Pay</Button>
      </DialogTrigger>
      <SuccessPayment></SuccessPayment>
    </Dialog>
      </TableCell>
          </>
        )
      }
      {
        role == "Admin" && (
          <>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.senderPhoneNumber}</TableCell>
          <TableCell>{data.bookingDate.slice(0, 10)}</TableCell>
          <TableCell>{data.requestedDeliveryDate.slice(0, 10)}</TableCell>
          <TableCell>{data.price}</TableCell>
          <TableCell>{data.ApproximateDeliveryDate}</TableCell>
          <TableCell>{data.deliveryMan}</TableCell>
          <TableCell>{data.bookingStatus}</TableCell>
          <TableCell >
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Mange</Button>
      </DialogTrigger>
      <ManageDeliveryMen 
      parcelId={data._id} 
      parcelNumber={data.parcelNumber} 
      setApproximateDeliveryDate={setApproximateDeliveryDate}
      setDeliverMan = {setDeliverMan}
      setBookingStatus = {setBookingStatus}
      ></ManageDeliveryMen>
    </Dialog>
          </TableCell>
      
      
          </>
        )
      }
      {
        role === "DeliverMan" && (
          <>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.senderPhoneNumber}</TableCell>
          <TableCell>{data.requestedDeliveryDate.slice(0, 10)}</TableCell>
          <TableCell>{approximateDeliveryDate}</TableCell>
          <TableCell>{data.receiverName}</TableCell>
          <TableCell>{data.receiverPhoneNumber}</TableCell>
          <TableCell>{data.parcelDeliveryAddress}</TableCell>
          <TableCell >
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
          <TableCell >
            <Button onClick={()=>{handleStatus(data._id, 'Canceled')}}>Cancel</Button>
          </TableCell>
          <TableCell >
            <Button onClick={()=>{handleStatus(data._id, 'Delivered')}}>Delivered</Button>
          </TableCell>
      
      
          </>
        )
      }
      
   
    </TableRow>
  );
};

export default ParcelTableData;
