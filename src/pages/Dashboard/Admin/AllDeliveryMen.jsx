
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

import UsersTable from '@/components/Dashboard/UsersTable/UsersTable';
const AllDeliveryMen = () => {
    const axiosInstance = useAxiosSecure();


    const[deliveryMen, setDeliveryMen] = useState([]);
    

    useEffect(() => {
        axiosInstance.get(`/auth?role=DeliverMan`)
        .then(res => {
            setDeliveryMen(res.data.data);
         })
    },[]);



    return (
        <div>

<UsersTable userData={deliveryMen} tableRole='DeliverMan'></UsersTable>
 

        </div>
    );
};


export default AllDeliveryMen;