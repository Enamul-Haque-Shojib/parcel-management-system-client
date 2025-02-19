import ParcelTable from '@/components/Dashboard/ParcelTable/ParcelTable';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const MyDeliveryList = () => {
    const axiosInstance = useAxiosSecure();
    const {role, authId} = useAuth();


    const[deliveryList, setDeliveryList] = useState([]);

    const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))

    useEffect(() => {
        axiosInstance.get(`/parcels?deliveryMan=${authId}`,
            {
                headers:{
                    "Authorization" : `${token.token}`
                }
                
            }
        )
        .then(res => {
            setDeliveryList(res.data.data);
         })
    },[]);



    return (
        <div>
<h1 className='text-center text-2xl'>Deliver List</h1>
            <ParcelTable parcelData={deliveryList} role={role}></ParcelTable>
 

        </div>
    );
};

export default MyDeliveryList;