
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

import UsersTable from '@/components/Dashboard/UsersTable/UsersTable';
const AllDeliveryMen = () => {
    const axiosInstance = useAxiosSecure();


    const[deliveryMen, setDeliveryMen] = useState([]);
    
    const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))
    useEffect(() => {
        axiosInstance.get(`/auth?role=DeliverMan`,
            {
                headers:{
                    "Authorization" : `${token.token}`
                }
                
            }
        )
        .then(res => {
            setDeliveryMen(res.data.data);
         })
    },[]);



    return (
        <div>
            <h1 className='text-center text-2xl'>All Deliver Men</h1>
                <UsersTable userData={deliveryMen} tableRole='DeliverMan'></UsersTable>
        </div>
    );
};


export default AllDeliveryMen;