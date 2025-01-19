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
    
    const {userData, handleCustomers, handleDeliveryMan, role} = props;
  
    // const userData = role === 'customer' ? customers : deliveryMen;
  
    return (
        <div>
            <Table>
      <TableCaption> A list of {role === 'customer' ? 'Customers' : 'Delivery Men'}.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>email</TableHead>
          
          <TableHead className="text-right">Phone Number</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userData.map((data) => (
          <TableData
          key={data._id}
          data={data}
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