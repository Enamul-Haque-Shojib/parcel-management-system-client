import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useToast } from "@/hooks/use-toast";



const TableData = (props) => {

  const { data, tableRole } = props;
  const axiosInstance = useAxiosSecure();
  const [statisticsAuth, setStatisticsAuth] = useState({});
  const { toast } = useToast()
  useEffect(() => {
    axiosInstance
      .get(`/statistics/statistics-auth/${data._id}`)
      .then((res) => {
        setStatisticsAuth(res.data.data);
      })
      .catch((error) => console.error("Error fetching statistics:", error));
  }, [data._id, axiosInstance]);

  const handleRole = async (id, authRole) => {

    try {
      const roleChange = {
        role: authRole,
      };
      await axiosInstance.patch(`/auth/auth-role/${id}`,
        
        roleChange);

        toast({
          title: "Role has been updated",
        })
    } catch (error) {
      console.error("Error updating role:", error);
     
    }
  };

  return (
    <TableRow className="hover:bg-gray-100 transition duration-200">
      <TableCell className="font-medium">{data.authId}</TableCell>
      {tableRole === "User" && (
        <>
          <TableCell>{data.authName}</TableCell>
          <TableCell>{data.authPhoneNumber}</TableCell>
          <TableCell>{statisticsAuth.parcelCount || 0}</TableCell>
          <TableCell>${statisticsAuth.parcelCost?.toFixed(2) || "0.00"}</TableCell>
          <TableCell>
            
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleRole(data._id, "DeliverMan")}
                  className="text-sm bg-sky-600 hover:bg-sky-700 text-white py-1 px-3 rounded-md"
                >
                  Make Deliver Man
                </Button>
             
            
            
          </TableCell>
          <TableCell>
            
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleRole(data._id, "Admin")}
                  className="text-sm bg-sky-600 hover:bg-sky-700 text-white py-1 px-3 rounded-md"
                >
                  Make Admin
                </Button>
              
             
            
          </TableCell>
        </>
      )}
      {tableRole === "DeliverMan" && (
        <>
          <TableCell>{data.authName}</TableCell>
          <TableCell>{data.authPhoneNumber}</TableCell>
          <TableCell>{statisticsAuth.deliveredCount || 0}</TableCell>
          <TableCell>{statisticsAuth.avgReview?.toFixed(1) || "0.0"}</TableCell>
        </>
      )}
    </TableRow>
  );
};

export default TableData;
