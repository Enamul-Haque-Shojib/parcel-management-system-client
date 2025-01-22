import React from "react";
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
import TableData from "./TableData";

const UsersTable = (props) => {
  const { userData, tableRole } = props;

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>
          A list of {tableRole === "User" ? "Users" : "Delivery Men"}.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            {tableRole === "User" && (
              <>
                <TableHead>Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Total Parcels</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Make Deliver Man</TableHead>
                <TableHead>Make Admin</TableHead>
              </>
            )}
            {tableRole === "DeliverMan" && (
              <>
                <TableHead>Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Total Delivered</TableHead>
                <TableHead>Average Review</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((data) => (
            <TableData key={data._id} data={data} tableRole={tableRole} />
          ))}
        </TableBody>
        {tableRole === "User" && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Users</TableCell>
              <TableCell className="text-right">
                {userData.length || 0}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
        {tableRole === "DeliverMan" && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Deliver Men</TableCell>
              <TableCell className="text-right">
                {userData.length || 0}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
};

export default UsersTable;
