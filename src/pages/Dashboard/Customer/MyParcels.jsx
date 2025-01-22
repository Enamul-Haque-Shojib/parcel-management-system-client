import ParcelTable from '@/components/Dashboard/ParcelTable/ParcelTable';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const MyParcels = () => {
    const axiosInstance = useAxiosSecure();
    const {role, user} = useAuth();


    const[myParcels, setMyParcels] = useState([]);
    

    const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))

    useEffect(() => {
        axiosInstance.get(`/parcels?email=${user?.email}`,
            {
                headers:{
                    "Authorization" : `${token.token}`
                }
                
            }
        )
        .then(res => {
            setMyParcels(res.data.data);
         })
    },[]);



    return (
        <div>

            <ParcelTable parcelData={myParcels} role={role}></ParcelTable>
 

        </div>
    );
};


export default MyParcels;