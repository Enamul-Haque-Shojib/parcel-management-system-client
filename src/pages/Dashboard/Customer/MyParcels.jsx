import ParcelTable from '@/components/Dashboard/ParcelTable/ParcelTable';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const MyParcels = () => {
    const axiosInstance = useAxiosSecure();


    const[myParcels, setMyParcels] = useState([]);
    

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
            setMyParcels(res.data.data);
         })
    },[]);



    return (
        <div>

            <ParcelTable parcelData={myParcels}></ParcelTable>
 

        </div>
    );
};


export default MyParcels;