import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import UpdateProfile from "@/components/Dashboard/UpdateProfile/UpdateProfile";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const Profile = () => {
  const axiosInstance = useAxiosSecure();
  const [profileData, setProfileData] = useState(null);
  const { user, loading } = useAuth();

  const token = JSON.parse(localStorage.getItem('ParcelManagementSystemToken'))
  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/auth?email=${user.email}`,
          {
            headers:{
                "Authorization" : `${token.token}`
            } 
          }
        )
        .then((res) => {
          setProfileData(res.data.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, [user?.email, axiosInstance]);

  if (loading) {
    return <span className="text-center block text-xl">Loading...</span>;
  }

  if (!profileData) {
    return <span className="text-center block text-xl">Profile data not found.</span>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40">
          <img
            src={profileData.authImgUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            className="h-full w-full rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-4">
        <h1 className="text-xl font-bold text-gray-800">User ID: <span className="font-normal">{profileData.authId}</span></h1>
        <h1 className="text-xl font-bold text-gray-800">Name: <span className="font-normal">{profileData.authName}</span></h1>
        <h1 className="text-xl font-bold text-gray-800">Email: <span className="font-normal">{profileData.email}</span></h1>
        <h1 className="text-xl font-bold text-gray-800">Role: <span className="font-normal">{profileData.role}</span></h1>
        <h1 className="text-xl font-bold text-gray-800">Phone: <span className="font-normal">{profileData.authPhoneNumber}</span></h1>
      </div>

      {/* Update Profile Button */}
      <div className="flex justify-center mt-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition">
              Update Profile
            </Button>
          </DialogTrigger>
          <UpdateProfile profileData={profileData} />
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
