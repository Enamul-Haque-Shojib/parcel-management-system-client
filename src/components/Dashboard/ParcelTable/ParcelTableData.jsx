import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import MapWithPins from "../Map/MapWithPins";
import UserReview from "../UserReview/UserReview";
import ManageDeliveryMen from "../MangeDelieveryMen/ManageDeliveryMen";
import SuccessPayment from "../Payment/SuccessPayment";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const ParcelTableData = ({ 
  data,
  role,
 }) => {

 
  
  // const role = "Admin"
  const toast = useToast();
  const axiosInstance = useAxiosSecure();
  const [approximateDeliveryDate, setApproximateDeliveryDate] = useState(
    data.ApproximateDeliveryDate
  );
  const [deliverMan, setDeliverMan] = useState(data.deliveryMan);
  const [bookingStatus, setBookingStatus] = useState(data.bookingStatus);

  const handleStatus = async (id, status) => {
    
    try {
      const statusChange = { bookingStatus: status };
      await axiosInstance.patch(`/auth/parcel-status/${id}`, statusChange);
      setBookingStatus(status);
      toast({
        title: `Successfully updated to ${status}`,
      });
    } catch (error) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <TableRow className="hover:bg-gray-100">
      <TableCell>{data.parcelNumber}</TableCell>
      {role === "User" && (
        <>
          <TableCell>{data.parcelType}</TableCell>
          <TableCell>{data.bookingDate.slice(0, 10)}</TableCell>
          <TableCell>{data.requestedDeliveryDate.slice(0, 10)}</TableCell>
          <TableCell>{approximateDeliveryDate || "N/A"}</TableCell>
          <TableCell>{deliverMan || "Unassigned"}</TableCell>
          <TableCell>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                bookingStatus === "Pending"
                  ? "bg-yellow-200 text-yellow-800"
                  : bookingStatus === "Delivered"
                  ? "bg-green-200 text-green-800"
                  : "bg-red-200 text-red-800"
              }`}
            >
              {bookingStatus}
            </span>
          </TableCell>
          <TableCell className="text-right space-x-2">
            <Link
              to={`update-parcel/${data._id}`}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md"
            >
              Update
            </Link>
            <Button
              onClick={() => handleStatus(data._id, "Canceled")}
              disabled={bookingStatus !== "Pending"}
              variant="destructive"
            >
              Cancel
            </Button>
          </TableCell>
          <TableCell>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  disabled={bookingStatus !== "Delivered"}
                >
                  Review
                </Button>
              </DialogTrigger>
              <UserReview parcelId={data._id} deliverManId={data.deliveryMan} />
            </Dialog>
          </TableCell>
          <TableCell>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Pay</Button>
              </DialogTrigger>
              <SuccessPayment />
            </Dialog>
          </TableCell>
        </>
      )}
      {
        role === "DeliverMan" && (
          <>
          <TableCell>{data.name}</TableCell>
      <TableCell>{data.senderPhoneNumber}</TableCell>
      <TableCell>{data.requestedDeliveryDate.slice(0, 10)}</TableCell>
      <TableCell>{approximateDeliveryDate.slice(0, 10) || "N/A"}</TableCell>
      <TableCell>{data.receiverName}</TableCell>
      <TableCell>{data.receiverPhoneNumber}</TableCell>
      <TableCell>{data.parcelDeliveryAddress}</TableCell>
      <TableCell className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Location
            </Button>
          </DialogTrigger>
          <MapWithPins
            name={data.name}
            latitude={data.deliveryAddressLatitude}
            longitude={data.deliveryAddressLongitude}
          />
        </Dialog>
      </TableCell>
      <TableCell className="text-center">
        <Button
          onClick={() => handleStatus(data._id, "Canceled")}
          disabled={bookingStatus !== "Pending"}
          variant="destructive"
        >
          Cancel
        </Button>
      </TableCell>
      <TableCell className="text-center">
        <Button
          onClick={() => handleStatus(data._id, "Delivered")}
          disabled={bookingStatus !== "Pending"}
          variant="success"
        >
          Deliver
        </Button>
      </TableCell>
          </>
        )
      }
      {
        role ==='Admin' && (
          <>
            <TableCell>{data.name}</TableCell>
      <TableCell>{data.senderPhoneNumber}</TableCell>
      <TableCell>{data.bookingDate.slice(0, 10)}</TableCell>
      <TableCell>{data.requestedDeliveryDate.slice(0, 10)}</TableCell>
      <TableCell>{data.price}</TableCell>
      <TableCell>{approximateDeliveryDate.slice(0, 10) || "N/A"}</TableCell>
      <TableCell>{deliverMan || "Not Assigned"}</TableCell>
      <TableCell>{bookingStatus}</TableCell>
      <TableCell className="text-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Manage
            </Button>
          </DialogTrigger>
          <ManageDeliveryMen
            parcelId={data._id}
            parcelNumber={data.parcelNumber}
            setApproximateDeliveryDate={setApproximateDeliveryDate}
            setDeliverMan={setDeliverMan}
            setBookingStatus={setBookingStatus}
          />
        </Dialog>
      </TableCell>
          </>
        )
      }
    </TableRow>
  );
};

export default ParcelTableData;
