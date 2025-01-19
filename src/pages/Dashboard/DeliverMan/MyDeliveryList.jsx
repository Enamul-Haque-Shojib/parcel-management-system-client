import ParcelTable from '@/components/Dashboard/ParcelTable/ParcelTable';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const MyDeliveryList = () => {
    const axiosInstance = useAxiosSecure();


    const[deliveryList, setDeliveryList] = useState([]);
    

    useEffect(() => {
        axiosInstance.get(`/parcels?deliveryMan=DM-0003`)
        .then(res => {
            setDeliveryList(res.data.data);
         })
    },[]);



    return (
        <div>

            <ParcelTable parcelData={deliveryList}></ParcelTable>
 

        </div>
    );
};

export default MyDeliveryList;