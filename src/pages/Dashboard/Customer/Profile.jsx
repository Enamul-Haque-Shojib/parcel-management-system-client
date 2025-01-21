import UpdateProfile from '@/components/Dashboard/UpdateProfile/UpdateProfile';

import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Profile = () => {
const axiosInstance = useAxiosSecure()
  const [profileData, setProfileData] = useState([]);

    
    const {user,loading} = useAuth();

 
    
    if(loading) {
        return <span className="">Loading......</span>
    }
    const {displayName, email, photoURL} = user;

     useEffect(() => {
            axiosInstance.get(`/auth?email=${email}`)
            .then(res => {
                setProfileData(res.data.data[0]);
             })
        },[]);

   
    return (
        <div>

 <div className='w-[200px] h-[200px]'>
 <img
        src={profileData.authImgUrl}
        alt="Photo by Drew Beamer"
        
        className="h-full w-full rounded-md object-cover"
      />
 </div>
      
    
        <h1 className='text-2xl'>User Id: {profileData?.authId}</h1>
        <h1 className='text-2xl'>Name: {profileData?.authName}</h1>
        <h1 className='text-2xl'>Email: {profileData?.email}</h1>
        <h1 className='text-2xl'>User: {profileData?.role}</h1>
        <h1 className='text-2xl'>User: {profileData?.authPhoneNumber}</h1>





        <div className="flex gap-4 justify-center mt-6">
        <Dialog>
      <DialogTrigger asChild>
        
        <Button >Update Profile</Button>
      </DialogTrigger>
      <UpdateProfile profileData={profileData}></UpdateProfile>
    </Dialog>
      
    </div>
            
        </div>
    );
};

export default Profile;