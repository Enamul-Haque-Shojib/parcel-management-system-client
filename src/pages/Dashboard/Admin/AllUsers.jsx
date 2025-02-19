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

<h1 className='text-center text-2xl'>All Users</h1>
        <UsersTable userData={customers} tableRole='User'></UsersTable>

        </div>
    );
};

export default AllUsers;