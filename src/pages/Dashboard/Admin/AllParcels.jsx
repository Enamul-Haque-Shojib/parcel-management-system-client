import ParcelTable from '@/components/Dashboard/ParcelTable/ParcelTable';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const AllParcels = () => {
    const axiosInstance = useAxiosSecure();
const {role} = useAuth()

    const[parcels, setParcels] = useState([]);
    
    const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))
    useEffect(() => {
        axiosInstance.get(`/parcels`,
            {
                headers:{
                    "Authorization" : `${token.token}`
                }
                
            }
        )
        .then(res => {
            setParcels(res.data.data);
         })
    },[]);



    return (
        <div>
            <h1 className='text-center text-2xl'>All Parcels</h1>
            <ParcelTable parcelData={parcels} role={role}></ParcelTable>
 

        </div>
    );
};

export default AllParcels;