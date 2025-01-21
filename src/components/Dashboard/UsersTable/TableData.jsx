import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast"

const TableData = (props) => {
        const { toast } = useToast()
        const {data, tableRole} = props;
        const axiosInstance = useAxiosSecure()
        const [statisticsAuth, setStatisticsAuth] = useState({});
   
   
        
     useEffect(() => {
            axiosInstance.get(`/statistics/statistics-auth/${data._id}`)
            .then(res => {
                setStatisticsAuth(res.data.data);
             })
        },[]);


        const handleRole = async(id,authRole)=>{
                
                try {
                        const roleChange = {
                          role: authRole,
                        };
                        const response = await axiosInstance.patch(`/auth/auth-role/${id}`, roleChange);
                        console.log(response.data.data);
             
                        toast({
                          title: `Successfully create ${authRole}`,
                        });
                      } catch (error) {
                        console.error("Error updating role:", error);
                        toast({
                          title: "Failed to update role",
                          description: error.message,
                          variant: "destructive",
                        });
                      }
        }
    
        return (
                <TableRow>
                        <TableCell className="font-medium">{data.authId}</TableCell>
                {
                        tableRole === 'User' && (
                                <>
                                <TableCell className="font-medium">{data.authName}</TableCell>
                                <TableCell className="font-medium">{data.authPhoneNumber}</TableCell>
                                <TableCell className="font-medium">{statisticsAuth.parcelCount}</TableCell>
                                <TableCell className="font-medium">{statisticsAuth.parcelCost}</TableCell>
                                <TableCell className="font-medium">
                                        <Button onClick={()=>{handleRole(data._id,'DeliverMan')}}>Make Delivery Man</Button>
                                </TableCell>
                                <TableCell className="font-medium">
                                        <Button onClick={()=>{handleRole(data._id,'Admin')}}>Make Admin</Button>
                                </TableCell>
                                </>
                        )
                }
                {
                        tableRole === 'DeliverMan' && (
                                <>
                                <TableCell className="font-medium">{data.authName}</TableCell>
                                <TableCell className="font-medium">{data.authPhoneNumber}</TableCell>
                                <TableCell className="font-medium">{statisticsAuth.deliveredCount}</TableCell>
                                <TableCell className="font-medium">{statisticsAuth.avgReview}</TableCell>
                               
                                </>
                        )
                }
                
                
                </TableRow>
          
        );
};

export default TableData;