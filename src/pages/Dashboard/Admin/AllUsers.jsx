import UsersTable from '@/components/Dashboard/UsersTable/UsersTable';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    
    const axiosInstance = useAxiosSecure();


    const[customers, setCustomers] = useState([]);
    

    useEffect(() => {
        axiosInstance.get(`/auth?role=User`)
        .then(res => {
          setCustomers(res.data.data);
         })
    },[]);



    return (
        <div>

    
        <UsersTable userData={customers} tableRole='User'></UsersTable>

        </div>
    );
};

export default AllUsers;