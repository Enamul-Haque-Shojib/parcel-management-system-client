import ParcelTable from '@/components/Dashboard/ParcelTable/ParcelTable';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const AllParcels = () => {
    const axiosInstance = useAxiosSecure();


    const[parcels, setParcels] = useState([]);
    

    useEffect(() => {
        axiosInstance.get(`/parcels`)
        .then(res => {
            setParcels(res.data.data);
         })
    },[]);



    return (
        <div>

            <ParcelTable parcelData={parcels}></ParcelTable>
 

        </div>
    );
};

export default AllParcels;