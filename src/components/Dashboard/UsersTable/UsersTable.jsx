import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import TableData from './TableData';

const UsersTable = (props) => {
    const {userData, tableRole} = props;
    console.log(tableRole);
  
  
    // const userData = role === 'customer' ? customers : deliveryMen;
   
  
    return (
        <div>
            <Table>
      <TableCaption> A list of {tableRole === 'User' ? 'User' : 'Delivery Men'}.</TableCaption>
      <TableHeader>
        <TableRow>
        <TableHead className="w-[100px]">User Id</TableHead>
          {
            tableRole === 'User' && (
              <>
              <TableHead className="">Name</TableHead>
              <TableHead className="">Phone Number</TableHead>
              <TableHead className="">Total Parcels</TableHead>
              <TableHead className="">Total Cost</TableHead>
              <TableHead className="">Make Deliver Man</TableHead>
              <TableHead className="">Make Admin</TableHead>
              </>
            )
          }
          {
            tableRole === "DeliverMan" && (
              <>
               <TableHead className="">Name</TableHead>
               <TableHead className="">Phone Number</TableHead>
               <TableHead className="">Total Delivered</TableHead>
               <TableHead className="">Average review</TableHead>
              </>
            )
          }
         
          
         
        </TableRow>
      </TableHeader>
      <TableBody>
        {userData.map((data) => (
          <TableData
          key={data._id}
          data={data}
          tableRole={tableRole}
          ></TableData>
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

export default UsersTable;