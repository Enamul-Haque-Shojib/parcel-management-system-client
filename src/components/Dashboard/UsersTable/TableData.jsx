import { TableCell, TableRow } from '@/components/ui/table';
import React from 'react';

const TableData = (props) => {
    
    const {data} = props
        return (
           
                <TableRow>
                <TableCell className="font-medium">{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                {/* <TableCell>{userPhoneNumber}</TableCell> */}
                <TableCell className="text-right">{data.userPhoneNumber}</TableCell>
                </TableRow>
          
        );
};

export default TableData;